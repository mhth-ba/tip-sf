<?php

namespace AppBundle\Controller;

use AppBundle\Api\Uctovnictvo\DP\DokladApiModel;
use AppBundle\Api\Uctovnictvo\DP\HlavnyApiModel;
use AppBundle\Doctrine\Types\DateTime;
use AppBundle\Entity\Uctovnictvo\DP\Hlavny;
use AppBundle\Entity\Uctovnictvo\DP\Upload;
use AppBundle\Entity\Uctovnictvo\DP\Vstup;
use AppBundle\Entity\Uctovnictvo\DP\Vstup_Z;
use AppBundle\Entity\Uctovnictvo\DP\Vystup;
use AppBundle\Entity\Uctovnictvo\DP\Vystup_Z;
use AppBundle\Form\Type\Uctovnictvo\DP\HlavnyType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\ResultSetMapping;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class DanovePriznanieController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesDP();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_DP_UCT')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('uct/danove-priznanie/index.html.twig');
    }

    /**
     * @Route("uct/dp/upload", name="dp_upload", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function uploadFileAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $em = $this->getDoctrine()->getManager();

        $hlavny_id = $data['id'];
        $uploadtype_id = $data['uploadtype'];
        $original = $data['original'];
        $filename = $data['filename'];

        $hlavny = $em->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->find($hlavny_id);
        $uploadtype = $em->getRepository('AppBundle:Uctovnictvo\UploadType')
            ->find($uploadtype_id);
        $user = $em->getRepository('AppBundle:App\User')
            ->find( $this->getUser()->getId() );

        $upload = new Upload();

        $upload->setHlavny($hlavny);
        $upload->setUpload($uploadtype);
        $upload->setOriginal($original);
        $upload->setSubor($filename);
        $upload->setNahral($user);

        $em = $this->getDoctrine()->getManager();
        $em->persist($upload);
        $em->flush();

//        throw new Exception('Nastala neočakávaná chyba');

        $fs = new Filesystem();

        $dir = $this->get('kernel')->getProjectDir().'/web/uploads';

        switch ($uploadtype_id) {
            case 1:
                $fs->copy(
                    $dir.'/uctovnictvo/'.$filename,
                    $dir.'/uctovnictvo/S_ALR.xls'
                );

                $this->processALR();

                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Uctovnictvo\DP\Upload')
                    ->uploadALR($hlavny_id);
                //sleep(8);
                break;
            case 2:
                $fs->copy(
                    $dir.'/uctovnictvo/'.$filename,
                    $dir.'/uctovnictvo/ZFC_DDOKL.xls'
                );

                $this->processDDOKL();

                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Uctovnictvo\DP\Upload')
                    ->uploadDDOKL($hlavny_id);
                //sleep(8);
                break;
            case 3:
                // obycajna priloha -> nevykonat nic
                break;
        }

        return $this->createApiResponse($upload);
    }

    /**
     * @Route("uct/dp/download/{id}", name="dp_download", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function downloadFileAction($id)
    {
        $upload = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Upload')
            ->find($id);

        $sub = 'uctovnictvo';
        $file = $upload->getSubor();
        $orig = $upload->getOriginal();

        return $this->downloadFile($sub, $file, $orig, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    private function processDDOKL()
    {
        // directory and file paths
        $dir = $this->get('kernel')->getProjectDir().'/web/uploads/uctovnictvo/';
        $file_orig = $dir . 'ZFC_DDOKL.xls';
        $file_new = $dir . 'ZFC_DDOKL_P.XLS';

        // file handler
        $file = new \SplFileObject($file_orig, 'r');
        $contents = $file->fread($file->getSize());

        // pocet riadkov v subore
        $lines = mb_substr_count($contents, "\n");

        // UCS-2 LE BOM (Byte Order Mark): FF FE
        //$content_new = "\xFF\xFE";
        $content_new = "";

        for ($i = 0; $i < $lines; $i++) {
            // nastavenie kurzora na cislo riadku (podla "i")
            $file->seek($i);

            // nacitanie riadku z pozicie kurzora
            $row = $file->current();

            // nacitanie poctu tabulatorov v riadku
            $tabs = mb_substr_count($row, "\t");

            // ZFC_DDOKL riadok musi obsahovat 23 tabulatorov
            // ak je pocet tabov mensi ako 23, pridat chybajuci pocet tabov
            if ($tabs < 23) {
                $replace = "";
                do {
                    $replace .= "\x00\t";
                    $tabs++;
                } while ($tabs < 23);
                $row = str_replace("\x00\r\x00\n", "$replace\x00\r\x00\n", $row);
            }

            // pridat riadok do vysledneho obsahu
            $content_new .= $row;
        }

        $content_new .= "\x00\n\0";

        // zapisat vysledny obsah do suboru
        $handle = fopen($file_new, 'w');
        $data = $content_new;
        fwrite($handle, $data);
        fclose($handle);

        // uvolnenie pointera
        $file = null;
    }

    private function processALR()
    {
        // predbezne hlasenie - vystupna DPH
        $this->processXLS(
            "S_ALR.xls",
            "S_ALR_vy_P.XLS",
            "Výstupná DPH: Jednotl.položky",
            "Výstupná DPH: Súčet",
            28,
            "\xFF\xFE\r\0\n\0"
        );

        // predbezne hlasenie - vstupna DPH
        $this->processXLS(
            "S_ALR.xls",
            "S_ALR_vs_P.XLS",
            "Vstupná DPH: Jednotl.položky",
            "Vstupná DPH: Súčet",
            28,
            "\xFF\xFE\r\0\n"
        );
    }

    private function processXLS($filename_orig, $filename_new, $start, $stop, $tabs_count, $content)
    {
        // UCS-2 LE BOM (Byte Order Mark): FF FE
        // \r = 0D 00 {CR}
        // \n = 0A 00 {LF}
        // \t = 09 00 {TAB}
        //    = 20 00 {SPACE}

        // directory and file paths
        $dir = $this->get('kernel')->getProjectDir().'/web/uploads/uctovnictvo/';

        $file_orig = $dir . $filename_orig;
        $file_new = $dir . $filename_new;

        // file handler
        $file = new \SplFileObject($file_orig, 'r');
        //$file->setFlags(\SplFileObject::READ_AHEAD);

        $contents = $file->fread($file->getSize());

        // vyraz, podla ktoreho sa nastavi zaciatok a koniec citania suboru
        $start_exp = mb_convert_encoding($start, "UCS-2LE");
        $stop_exp = mb_convert_encoding($stop, "UCS-2LE");

        // nacitanie zaciatocnej a koncovej pozicie v byte-och
        $start_pos = mb_strpos($contents, $start_exp);
        $stop_pos = mb_strpos($contents, $stop_exp);

        // nacitanie obsahu v rozsahu pozicii
        $file->fseek($start_pos);
        $contents = $file->fread($stop_pos - $start_pos);

        // pocet riadkov
        $lines = mb_substr_count($contents, "\n");

        // nastavenie kurzora na zaciatok citania
        $file->fseek($start_pos);

        for ($i = 0; $i < $lines; $i++) {
            // nastavenie kurzora na dalsi riadok a nacitanie obsahu riadku
            $file->next();
            $row = $file->current();

            // nacitanie poctu tabulatorov v riadku
            $tabs = mb_substr_count($row, "\t");

            // riadok musi obsahovat X tabulatorov
            // ak je pocet tabulatorov mensi ako X, pridat chybajuci pocet tabulatorov
            if ($tabs < $tabs_count) {
                $replace = "";
                do {
                    $replace .= "\0\t";
                    $tabs++;
                } while ($tabs < $tabs_count);
                $row = str_replace("\0\r\0\n", "$replace\0\r\0\n", $row);
            }

            // pridat riadok do vysledneho obsahu
            $content .= $row;
        }

        // zakoncenie suboru, aby MS SQL BULK INSERT vedel nacitat data
        $content .= "\0\n\0";

        // zapisat vysledny obsah do suboru
        $handle = fopen($file_new, 'w');
        $data = $content;
        fwrite($handle, $data);
        fclose($handle);

        // uvolnenie pointera
        $file = null;
    }

    /**
     * @Route("uct/dp/hlavny", name="dp_hlavny_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getZoznamAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->getZoznam();

        return $this->createApiResponse($zoznam);
    }

    /**
     * @Route("uct/dp/aktivita", name="dp_aktivita_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getAktivitaAction()
    {
        $em = $this->getDoctrine()->getManager();

        $upload = $em->getRepository('AppBundle:Uctovnictvo\DP\Upload')
            ->findActivityAll();

        return $this->createApiResponse([
            'upload_vsetky' => $upload,
            'udaje_vsetky' => null
        ]);
    }

    /**
     * @Route("uct/dp/aktivita/{id}", name="dp_aktivita_hlavny_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getAktivitaByHlavnyAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $upload = $em->getRepository('AppBundle:Uctovnictvo\DP\Upload')
            ->findActivityByHlavny($id);

        return $this->createApiResponse([
            'upload_hlavny' => $upload,
            'udaje_hlavny' => null
        ]);
    }

    /**
     * @Route("uct/dp/hlavny/{id}", name="dp_hlavny_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getHlavnyAction(Hlavny $hlavny)
    {
        /*$hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->find($hlavny);*/

        $apiModel = $this->createHlavnyApiModel($hlavny);

        return $this->createApiResponse($apiModel);
    }

    private function createHlavnyApiModel(Hlavny $hlavny)
    {
        $em = $this->getDoctrine()->getManager();

        $id = $hlavny->getId();

        $model = new HlavnyApiModel();
        $model->id = $id;
        $model->datum = $hlavny->getDatum();
        $model->zmenene = $hlavny->getZmenene();
        $model->druh = $hlavny->getDruh();
        $model->predchadzajuci = $hlavny->getPredchadzajuci();
        $model->riadne = $hlavny->getRiadneId();
        $model->obdobie = $hlavny->getObdobie();
        $model->podane = $hlavny->getPodane();
        $model->vytvoril = $hlavny->getVytvoril();
        $model->upravil = $hlavny->getUpravil();
        $model->poznamka = $hlavny->getPoznamka();

        $upload = $em->getRepository("AppBundle:Uctovnictvo\DP\Upload");

        $upload_alr = $upload->getLastUploadedALR($id);
        $upload_ddokl = $upload->getLastUploadedDDOKL($id);
        $upload_prilohy = $upload->findPrilohyByHlavny($id);

        $model->upload['alr'] = $upload_alr;         // predbežné hlásenie - S_ALR
        $model->upload['ddokl'] = $upload_ddokl;     // daňové doklady - ZFC_DDOKL
        $model->upload['prilohy'] = $upload_prilohy; // ostatné prílohy

        return $model;
    }

    /**
     * @Route("uct/dp/moznosti/{id}", name="dp_moznosti", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getMoznostiAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $druhy = $em->getRepository('AppBundle:Uctovnictvo\DP\Druh')
            ->getDruhy();

        $predchadzajuce = $em->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->getPredchadzajuce($id);

        $moznosti = [];

        foreach ($druhy as $druh) {
            $moznosti['druh'][] = $druh;
        }

        foreach ($predchadzajuce as $predchadzajuci) {
            $moznosti['predchadzajuci'][] = $predchadzajuci;
        }

        return $this->createApiResponse($moznosti);
    }

    /**
     * @Route("uct/dp/znaky-dane", name="dp_znaky-dane_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getZnakyDaneAction()
    {
        $em = $this->getDoctrine()->getManager();

        $vstup = $em->getRepository('AppBundle:Uctovnictvo\DP\ZnakDaneVstup')
            ->findAllSorted();

        $vystup = $em->getRepository('AppBundle:Uctovnictvo\DP\ZnakDaneVystup')
            ->findAllSorted();

        return $this->createApiResponse([
            'vstup' => $vstup,
            'vystup' => $vystup
        ]);
    }

    /**
     * @Route("uct/dp/vstup/{id}", name="dp_vstup_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getVstupAction($id)
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Vstup_Z');

        $zmenene = $repository->findZmeneneByHlavny($id);
        $povodne = $repository->findPovodneByHlavny($id);

        $data = [];


        foreach ($zmenene as $zmeneny) {
            $data['zmenene'][] = $this->createDokladVstupZApiModel($zmeneny);
        }

        foreach ($povodne as $povodny) {
            $data['povodne'][] = $this->createDokladVstupZApiModel($povodny);
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("uct/dp/vystup/{id}", name="dp_vystup_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getVystupAction($id)
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Vystup_Z');

        $zmenene = $repository->findZmeneneByHlavny($id);
        $povodne = $repository->findPovodneByHlavny($id);

        $data = [];

        foreach ($zmenene as $zmeneny) {
            $data['zmenene'][] = $this->createDokladVystupZApiModel($zmeneny);
        }

        foreach ($povodne as $povodny) {
            $data['povodne'][] = $this->createDokladVystupZApiModel($povodny);
        }

        return $this->createApiResponse($data);
    }

    // VIEW
    private function createDokladVstupZApiModel(Vstup_Z $vstup_z)
    {
        $model = new DokladApiModel();

        $model->id = $vstup_z->getId();
        $model->znak = $vstup_z->getZnak();
        $model->doklad = $vstup_z->getDoklad();
        $model->referencia = $vstup_z->getReferencia();
        $model->obchodny_partner = $vstup_z->getObchodnyPartner();
        $model->icdph = $vstup_z->getIcdph();
        $model->druh_dokladu = $vstup_z->getDruhDokladu();
        $model->datum_dokladu = $vstup_z->getDatumDokladu();
        $model->datum_uctovania = $vstup_z->getDatumUctovania();
        $model->suma_bez_dph = $vstup_z->getSumaBezDph();
        $model->dph = $vstup_z->getDph();
        $model->suma_s_dph = $vstup_z->getSumaSDph();
        $model->zmenene = $vstup_z->getZmenene();
        $model->tag = $vstup_z->getTag();

        return $model;
    }

    // VIEW
    private function createDokladVystupZApiModel(Vystup_Z $vystup_z)
    {
        $model = new DokladApiModel();

        $model->id = $vystup_z->getId();
        $model->znak = $vystup_z->getZnak();
        $model->doklad = $vystup_z->getDoklad();
        $model->referencia = $vystup_z->getReferencia();
        $model->obchodny_partner = $vystup_z->getObchodnyPartner();
        $model->icdph = $vystup_z->getIcdph();
        $model->druh_dokladu = $vystup_z->getDruhDokladu();
        $model->datum_dokladu = $vystup_z->getDatumDokladu();
        $model->datum_uctovania = $vystup_z->getDatumUctovania();
        $model->suma_bez_dph = $vystup_z->getSumaBezDph();
        $model->dph = $vystup_z->getDph();
        $model->suma_s_dph = $vystup_z->getSumaSDph();
        $model->zmenene = $vystup_z->getZmenene();
        $model->tag = $vystup_z->getTag();

        return $model;
    }

    /**
     * @Route("uct/dp/sumarizacia/{id}", name="dp_sumarizacia_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getSumarizaciaAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $sumarizacia_s = $em->getRepository('AppBundle:Uctovnictvo\DP\Sumarizacia')
            ->findByHlavny($id);
        $sumarizacia_p = null;

        $predchadzajuci = $em->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->findPredchadzajuci($id);

        if ($predchadzajuci !== null) {
            $id_p = $predchadzajuci['predchadzajuci'];
            $sumarizacia_p = $em->getRepository('AppBundle:Uctovnictvo\DP\Sumarizacia')
                ->findByHlavny($id_p);
        }

        return $this->createApiResponse([
            'sucasny' => $sumarizacia_s,
            'predchadzajuci' => $sumarizacia_p
        ]);
    }

    /**
     * @Route("uct/dp/hlavny", name="dp_hlavny_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function createHlavnyAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $druh = $em->getRepository('AppBundle:Uctovnictvo\DP\Druh')
            ->find( $data['druh'] );
        $obdobie = new \DateTime($data['obdobie']);
        $user = $em->getRepository('AppBundle:App\User')
            ->find( $this->getUser()->getId() );

        $novy = new Hlavny();

        $novy->setDruh($druh);
        $novy->setObdobie($obdobie);
        $novy->setVytvoril($user);
        $novy->setPoznamka("Poznámky ...");

        $em->persist($novy);
        $em->flush();

        return $this->createApiResponse($novy);
    }

    /**
     * @Route("uct/dp/doklad", name="dp_doklad_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function createDokladAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $vstup_repo = $em->getRepository('AppBundle:Uctovnictvo\DP\Vstup_Z');
        $vystup_repo = $em->getRepository('AppBundle:Uctovnictvo\DP\Vystup_Z');

        $hlavny = $em->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->find( $data['hlavny'] );
        $znak = $data['znak'];
        $druh = $data['druh'];
        $referencia = $data['referencia'];
        $datumDokladu = new \DateTime($data['datumDokladu']);
        $datumUctovania = new \DateTime($data['datumUctovania']);
        $sumaBezDph = $data['sumaBezDph'];
        $dph = $data['dph'];
        $sumaSDph = $data['sumaSDph'];

        switch ($data['zaradenie']) {
            case 1:
                $doklad = new Vstup();

                $doklad->setHlavny($hlavny);
                $doklad->setZnak($znak);
                $doklad->setDruhDokladu($druh);
                $doklad->setReferencia($referencia);
                $doklad->setDatumDokladu($datumDokladu);
                $doklad->setDatumUctovania($datumUctovania);
                $doklad->setSumaBezDPH($sumaBezDph);
                $doklad->setDPH($dph);
                $doklad->setSumaSDPH($sumaSDph);
                $doklad->setVytvoril($user);

                $em->persist($doklad);
                $em->flush();

                $id = $doklad->getId();
                $this->logCreateActivity($id, 'AppBundle:Uctovnictvo\DP\Vstup');

                $zmenene = $vstup_repo->findZmeneneById("99" . $id);
                $povodne = $vstup_repo->findPovodneById($id);

                $response['zmenene'] = $this->createDokladVstupZApiModel($zmenene[0]);
                $response['povodne'] = $this->createDokladVstupZApiModel($povodne[0]);

                break;
            case 2:
                $doklad = new Vystup();

                $doklad->setHlavny($hlavny);
                $doklad->setZnak($znak);
                $doklad->setDruhDokladu($druh);
                $doklad->setReferencia($referencia);
                $doklad->setDatumDokladu($datumDokladu);
                $doklad->setDatumUctovania($datumUctovania);
                $doklad->setSumaBezDPH($sumaBezDph);
                $doklad->setDPH($dph);
                $doklad->setSumaSDPH($sumaSDph);
                $doklad->setVytvoril($user);

                $em->persist($doklad);
                $em->flush();

                $id = $doklad->getId();
                $this->logCreateActivity($id, 'AppBundle:Uctovnictvo\DP\Vystup');

                $zmenene = $vystup_repo->findZmeneneById("99" . $id);
                $povodne = $vystup_repo->findPovodneById($id);

                $response['zmenene'] = $this->createDokladVystupZApiModel($zmenene[0]);
                $response['povodne'] = $this->createDokladVystupZApiModel($povodne[0]);

                break;
            default:
                $doklad = null;
                $response = null;
                break;
        }

        if ($doklad !== null) {
            $em->persist($doklad);
            $em->flush();
        }

        return $this->createApiResponse($response);
    }

    /**
     * @Route("uct/dp/hlavny/{id}", name="dp_hlavny_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function updateHlavnyAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $hlavny = $em->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->find($id);

        $userId = $this->getUser()->getId();
        $upravil = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $hlavny->setUpravil($upravil);
        $hlavny->setZmenene(new \DateTime());

        $data = json_decode($request->getContent(), true);
        if (array_key_exists('podane', $data)) {
            if ($data['podane'] !== null) {
                $hlavny->setPodane(new \DateTime($data['podane']));
            } else {
                $hlavny->setPodane(null);
            }
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Uctovnictvo\DP\Hlavny',
            HlavnyType::class,
            $request
        );
    }

    /**
     * @Route("uct/dp/xml/{id}", name="dp_export", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function exportXML($id)
    {
        $em = $this->getDoctrine()->getManager();
        $sum = $em->getRepository('AppBundle:Uctovnictvo\DP\Sumarizacia');

        $icdph = 2020285245;
        $urad = 'pre vybrané daňové subjekty';
        $nazov = 'Bratislavská teplárenská, a.s.';
        $ulica = 'Turbínová';
        $cislo = 3;
        $psc = 82905;
        $obec = 'Bratislava';
        $telefon = '025737184';
        $email = 'dejovaa@batas.sk';

        $datum = date('d.m.Y');

        $r2 = 0;
        $r3 = $this->checkArray($sum->findR3_4($id), 'z');
        $r4 = $this->checkArray($sum->findR3_4($id), 'd');
        $r5 = $this->checkArray($sum->findR5_6($id), 'z');
        $r6 = $this->checkArray($sum->findR5_6($id), 'd');
        $r7 = $this->checkArray($sum->findR7_8($id), 'z');
        $r8 = $this->checkArray($sum->findR7_8($id), 'd');
        $r9 = $this->checkArray($sum->findR9_10($id), 'z');
        $r10 = $this->checkArray($sum->findR9_10($id), 'd');
        $r11 = $this->checkArray($sum->findR11_12($id), 'z');
        $r12 = $this->checkArray($sum->findR11_12($id), 'd');
        $r14 = 0;
        $r15 = $this->checkArray($sum->findR15($id), 'z');
        $r18 = 0;
        $r19 = $r2 + $r4 + $r6 + $r8 + $r10 + $r12 + $r14 + $r18;
        $r20 = $this->checkArray($sum->findR20($id), 'd');
        $r21 = $this->checkArray($sum->findR21($id), 'd');
        $r22 = $this->checkArray($sum->findR22($id), 'd');
        $r23 = $this->checkArray($sum->findR23($id), 'd');
        $r26 = $this->checkArray($sum->findR26_27($id), 'z');
        $r27 = $this->checkArray($sum->findR26_27($id), 'd');
        $r28 = $this->checkArray($sum->findR28($id), 'd');
        $r29 = 0;
        $r30 = 0;
        $r31 = null;
        $r32 = null;
        $r33 = null;
        $r34 = 0;

        $filename =  'DPH form.391.xml';

        $fileContent = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n"
            ."<dokument>\r\n"
            ."<hlavicka>\r\n"
            ."<identifikacneCislo>\r\n"
            ."<kodStatu>SK</kodStatu>\r\n"
            ."<cislo>$icdph</cislo>\r\n"
            ."</identifikacneCislo>\r\n"
            ."<dic></dic>\r\n"
            ."<danovyUrad>$urad</danovyUrad>\r\n"
            ."<nevzniklaPov>0</nevzniklaPov>\r\n"
            ."<typDP>\r\n"
            ."<rdp>1</rdp>\r\n"
            ."<odp>0</odp>\r\n"
            ."<ddp>0</ddp>\r\n"
            ."<datumZisteniaDdp></datumZisteniaDdp>\r\n"
            ."</typDP>\r\n"
            ."<osoba>\r\n"
            ."<platitel>1</platitel>\r\n"
            ."<registrovana>0</registrovana>\r\n"
            ."<inaPovinna>0</inaPovinna>\r\n"
            ."<zdanitelna>0</zdanitelna>\r\n"
            ."<zastupca>0</zastupca>\r\n"
            ."<zastupca69aa>0</zastupca69aa>\r\n"
            ."</osoba>\r\n"
            ."<zdanObd>\r\n"
            ."<mesiac></mesiac>\r\n"
            ."<stvrtrok></stvrtrok>\r\n"
            ."<rok></rok>\r\n"
            ."</zdanObd>\r\n"
            ."<meno>\r\n"
            ."<riadok>$nazov</riadok>\r\n"
            ."</meno>\r\n"
            ."<adresa>\r\n"
            ."<ulica>$ulica</ulica>\r\n"
            ."<cislo>$cislo</cislo>\r\n"
            ."<psc>$psc</psc>\r\n"
            ."<obec>$obec</obec>\r\n"
            ."<telefon>$telefon</telefon>\r\n"
            ."<email>$email</email>\r\n"
            ."</adresa>\r\n"
            ."<opravnenaOsoba>\r\n"
            ."<menoPriezvisko></menoPriezvisko>\r\n"
            ."<telefon></telefon>\r\n"
            ."<email></email>\r\n"
            ."</opravnenaOsoba>\r\n"
            ."<datumVyhlasenia>$datum</datumVyhlasenia>\r\n"
            ."</hlavicka>\r\n"
            ."<telo>\r\n"
            ."<r01></r01>\r\n"
            ."<r02>$r2</r02>\r\n"
            ."<r03>$r3</r03>\r\n"
            ."<r04>$r4</r04>\r\n"
            ."<r05>$r5</r05>\r\n"
            ."<r06>$r6</r06>\r\n"
            ."<r07>$r7</r07>\r\n"
            ."<r08>$r8</r08>\r\n"
            ."<r09>$r9</r09>\r\n"
            ."<r10>$r10</r10>\r\n"
            ."<r11>$r11</r11>\r\n"
            ."<r12>$r12</r12>\r\n"
            ."<r13></r13>\r\n"
            ."<r14>$r14</r14>\r\n"
            ."<r15>$r15</r15>\r\n"
            ."<r16></r16>\r\n"
            ."<r17></r17>\r\n"
            ."<r18>$r18</r18>\r\n"
            ."<r19>$r19</r19>\r\n"
            ."<r20>$r20</r20>\r\n"
            ."<r21>$r21</r21>\r\n"
            ."<r22>$r22</r22>\r\n"
            ."<r23>$r23</r23>\r\n"
            ."<r24></r24>\r\n"
            ."<r25></r25>\r\n"
            ."<r26>$r26</r26>\r\n"
            ."<r27>$r27</r27>\r\n"
            ."<r28>$r28</r28>\r\n"
            ."<r29></r29>\r\n"
            ."<r30></r30>\r\n"
            ."<r31></r31>\r\n"
            ."<splneniePodmienok>0</splneniePodmienok>\r\n"
            ."<r32></r32>\r\n"
            ."<r33></r33>\r\n"
            ."<r34></r34>\r\n"
            ."<r35></r35>\r\n"
            ."<r36></r36>\r\n"
            ."<r37></r37>\r\n"
            ."<r38></r38>\r\n"
            ."</telo>\r\n"
            ."</dokument>";

        $response = new Response($fileContent);

        $disposition = $response->headers->makeDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );

        $response->headers->set('Content-Disposition', $disposition);

        return $response;
    }

    private function checkArray($array, $stlpec)
    {
        switch ($stlpec) {
            case 'z': $stlpec = 'zaklad'; break;
            case 'd': $stlpec = 'dan'; break;
        }

        return array_key_exists(0, $array) ? $array[0][$stlpec] : 0;
    }
}