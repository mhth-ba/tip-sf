<?php

namespace AppBundle\Controller;

use AppBundle\Api\Kontroling\KonstantyApiModel;
use AppBundle\Api\Kontroling\SCT\DelenieNakladovApiModel;
use AppBundle\Api\Kontroling\SCT\DodaneTeploApiModel;
use AppBundle\Api\Kontroling\SCT\HlavnyApiModel;
use AppBundle\Api\Kontroling\SCT\KotolnaParametreApiModel;
use AppBundle\Api\Kontroling\SCT\KotolnaPlatnostApiModel;
use AppBundle\Api\Kontroling\SCT\KotolnaUdajeApiModel;
use AppBundle\Api\Kontroling\SCT\PoznamkyApiModel;
use AppBundle\Api\Kontroling\SCT\VyrobaElektrinyApiModel;
use AppBundle\Api\Kontroling\SCT\ZemnyPlynApiModel;
use AppBundle\Entity\App\ActivityLog;
use AppBundle\Entity\Kontroling\SCT\Hlavny;
use AppBundle\Entity\Kontroling\SCT\DelenieNakladov;
use AppBundle\Entity\Kontroling\SCT\DodaneTeplo;
use AppBundle\Entity\Kontroling\SCT\Konstanty;
use AppBundle\Entity\Kontroling\SCT\Kotolna;
use AppBundle\Entity\Kontroling\SCT\KotolnaParametre;
use AppBundle\Entity\Kontroling\SCT\KotolnaPlatnost;
use AppBundle\Entity\Kontroling\SCT\KotolnaUdaje;
use AppBundle\Entity\Kontroling\SCT\Poznamky;
use AppBundle\Entity\Kontroling\SCT\Upload;
use AppBundle\Entity\Kontroling\SCT\VyrobaElektriny;
use AppBundle\Entity\Kontroling\SCT\ZemnyPlyn;
use AppBundle\Form\Type\Kontroling\SCT\HlavnyType;
use AppBundle\Form\Type\Kontroling\SCT\DelenieNakladovType;
use AppBundle\Form\Type\Kontroling\SCT\KonstantyType;
use AppBundle\Form\Type\Kontroling\SCT\KotolnaParametreType;
use AppBundle\Form\Type\Kontroling\SCT\KotolnaType;
use AppBundle\Form\Type\Kontroling\SCT\KotolnaUdajeType;
use AppBundle\Form\Type\Kontroling\SCT\VyrobaElektrinyType;
use AppBundle\Form\Type\Kontroling\SCT\ZemnyPlynType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class SkutocnaCenaTeplaController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesSCT();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_SCT_MNG')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('kont/skutocna-cena-tepla/index.html.twig', [
            'name' => null
        ]);
    }

    /**
     * @Route("kont/sct/upload", name="sct_upload", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function uploadFileAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $hlavny_id = $data['id'];
        $uploadtype_id = $data['uploadtype'];
        $original = $data['original'];
        $filename = $data['filename'];

        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($hlavny_id);
        $uploadtype = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\UploadType')
            ->find($uploadtype_id);

        $upload = new Upload();

        $upload->setHlavny($hlavny);
        $upload->setUpload($uploadtype);
        $upload->setOriginal($original);
        $upload->setSubor($filename);

        $em = $this->getDoctrine()->getManager();
        $em->persist($upload);
        $em->flush();

//        throw new Exception('Nastala neočakávaná chyba');

        $fs = new Filesystem();

        $dir = $this->get('kernel')->getProjectDir().'/web/uploads';

        switch ($uploadtype_id) {
            case 2:
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/linked-servers/DT__1.xlsx'
                );
                /*$this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\SCT\Upload')
                    ->uploadDodaneTeplo($hlavny_id);*/
                sleep(8);
                break;
            case 3:
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/linked-servers/SN__1.xlsx'
                );
                /*$this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\SCT\Upload')
                    ->uploadSkutocneNaklady($hlavny_id);*/
                sleep(8);
                break;
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("kont/sct/download/{id}", name="sct_download", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function downloadFileAction($id)
    {
        $upload = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Upload')
            ->find($id);

        $sub = 'kontroling';
        $file = $upload->getSubor();
        $orig = $upload->getOriginal();

        return $this->downloadFile($sub, $file, $orig);
    }

    /**
     * @Route("kont/sct/kotolne", name="sct_kotolne_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function createKotolnaAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Kontroling\SCT\Kotolna');

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $hlavnyId = $data['id'];
        $userId = $this->getUser()->getId();

        $nova = $repository->createKotolna($hlavnyId, $userId);
        $kotolnaId = $nova[0]->getId(); // ID novej kotolne

        $models = [];

        $models['kotolna'] = $nova[0];

        $parametre = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaParametre')
            ->findParametreByKotolna($kotolnaId);

        $udaje = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaUdaje')
            ->findUdajeByKotolna($kotolnaId);

        $platnost = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaPlatnost')
            ->findPlatnostByHlavny($hlavnyId);

        foreach ($parametre as $parameter) {
            $models['parametre'][] = $this->createKotolnaParametreApiModel($parameter);
        }

        foreach ($udaje as $udaj) {
            $models['udaje'] = $this->createKotolnaUdajeApiModel($udaj);
        }

        foreach ($platnost as $plati) {
            $models['platnost'] = $this->createKotolnaPlatnostApiModel($plati);
        }

        return $this->createApiResponse($models);
    }

    /**
     * @Route("kont/sct/opravnenia", name="sct_opravnenia", options={"expose"=true})
     * @Method("GET")
     */
    public function getOpravneniaAction(UserInterface $user)
    {
        $guid = $user->getId();

        $grants = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Grant')
            ->findGrantedRolesToUser($guid);

        $roles = [];
        foreach ($grants as $grant) {
            $roles[] = $grant->getRoles()->getRole();
        }

        return $this->createApiResponse($roles);
    }

    /**
     * @Route("kont/sct/moznosti", name="sct_moznosti", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function getMoznostiAction()
    {
        $em = $this->getDoctrine()->getManager();

        $stavy = $em->getRepository('AppBundle:Kontroling\Stav')
            ->getStavy();

        $prepojenia = $em->getRepository('AppBundle:Kontroling\NCT\Hlavny')
            ->getVsetky();

        $moznosti = [];

        foreach ($stavy as $stav) {
            $moznosti['stav'][] = $stav;
        }

        foreach ($prepojenia as $nct) {
            $moznosti['prepojenie'][] = $nct;
        }

        return $this->createApiResponse($moznosti);
    }

    /**
     * @Route("kont/sct/hlavny", name="sct_hlavny_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getZoznamAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->getZoznam();

        $models = [];
        foreach ($zoznam as $hlavny) {
            $models[] = $this->createHlavnyApiModel($hlavny);
        }

        return $this->createApiResponse($models);
    }

    /**
     * @Route("kont/sct/hlavny/{id}", name="sct_hlavny_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getHlavnyAction(Hlavny $hlavny)
    {
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
        $model->nct = $hlavny->getNct();
        $model->stav = $hlavny->getStav();
        $model->nazov = $hlavny->getNazov();
        $model->rok = $hlavny->getRok();
        $model->vytvoril = $hlavny->getVytvoril();
        $model->upravil = $hlavny->getUpravil();
        $model->poznamka = $hlavny->getPoznamka();

        $upload = $em->getRepository('AppBundle:Kontroling\SCT\Upload');

        $upload_dt = $upload->getLastUploadedDodaneTeplo($id);
        $upload_sn = $upload->getLastUploadedSkutocneNaklady($id);

        $model->upload['dt'] = $upload_dt; // dodane teplo
        $model->upload['sn'] = $upload_sn; // skutocne naklady

        $selfUrl = $this->generateUrl(
            'sct_hlavny_get',
            ['id' => $id]
        );
        $dodaneTeploUrl = $this->generateUrl(
            'sct_dodane-teplo_get',
            ['id' => $id]
        );

        $model->addLink('_self', $selfUrl);
        $model->addLink('_dodaneTeplo', $dodaneTeploUrl);

        return $model;
    }

    /**
     * @Route("kont/sct/poznamky/{id}", name="sct_poznamky_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getPoznamkyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Poznamky')
            ->getPoznamky($id);

        $models = [];
        foreach ($polozky as $poznamka) {
            $models[] = $this->createPoznamkyApiModel($poznamka);
        }

        return $this->createApiResponse($models);
    }

    private function createPoznamkyApiModel(Poznamky $poznamky)
    {
        $model = new PoznamkyApiModel();

        $model->id = $poznamky->getId();
        $model->datum = $poznamky->getDatum();
//        $model->hlavny = $poznamky->getHlavny();
        $model->karta = $poznamky->getKarta();
        $model->poznamka = $poznamky->getPoznamka();

        return $model;
    }

    /**
     * @Route("kont/sct/konstanty/{id}", name="sct_konstanty_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getKonstantyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Konstanty')
            ->getKonstanty($id);

        $models = [];
        foreach ($polozky as $konstanta) {
            $models[] = $this->createKonstantyApiModel($konstanta);
        }

        return $this->createApiResponse($models);
    }

    private function createKonstantyApiModel(Konstanty $konstanty)
    {
        $model = new KonstantyApiModel();

        $model->id = $konstanty->getId();
//        $model->datum = $konstanty->getDatum();
//        $model->hlavny = $konstanty->getHlavny();
        $model->polozka = $konstanty->getPolozka();
        $model->hodnota = $konstanty->getHodnota();

        return $model;
    }

    /**
     * @Route("kont/sct/dodane-teplo/{id}", name="sct_dodane-teplo_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getDodaneTeploAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\DodaneTeplo')
            ->getDodaneTeplo($id);

        $models = [];
        foreach ($polozky as $dodaneTeplo) {
            $models[] = $this->createDodaneTeploApiModel($dodaneTeplo);
        }

        return $this->createApiResponse($models);
    }

    private function createDodaneTeploApiModel(DodaneTeplo $dodaneTeplo)
    {
        $model = new DodaneTeploApiModel();
        $model->id = $dodaneTeplo->getId();
        $model->datum = $dodaneTeplo->getDatum();
        $model->platne = $dodaneTeplo->getPlatne();
//        $model->hlavny = $dodaneTeplo->getHlavny();
        $model->zdroj = $dodaneTeplo->getZdroj();
        $model->v_kwh = $dodaneTeplo->getVychodKwh();
        $model->v_kw = $dodaneTeplo->getVychodKw();
        $model->z_kwh = $dodaneTeplo->getZapadKwh();
        $model->z_kw = $dodaneTeplo->getZapadKw();

        $selfUrl = $this->generateUrl(
            'sct_dodane-teplo_get',
            ['id' => $dodaneTeplo->getId()]
        );
        $model->addLink('_self', $selfUrl);

        return $model;
    }

    /**
     * @Route("kont/sct/vyroba-elektriny/{id}", name="sct_vyroba-elektriny_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getVyrobaElektrinyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\VyrobaElektriny')
            ->getVyrobaElektriny($id);

        $models = [];
        foreach ($polozky as $vyrobaElektriny) {
            $models[] = $this->createVyrobaElektrinyApiModel($vyrobaElektriny);
        }

        return $this->createApiResponse($models);
    }

    private function createVyrobaElektrinyApiModel(VyrobaElektriny $vyrobaElektriny)
    {
        $model = new VyrobaElektrinyApiModel();
        $model->id = $vyrobaElektriny->getId();
        $model->datum = $vyrobaElektriny->getDatum();
//        $model->hlavny = $vyrobaElektriny->getHlavny();
        $model->polozka = $vyrobaElektriny->getPolozka();
        $model->tpv = $vyrobaElektriny->getTpv();
        $model->tpz = $vyrobaElektriny->getTpz();

        return $model;
    }

    /**
     * @Route("kont/sct/delenie-nakladov/{id}", name="sct_delenie-nakladov_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getDelenieNakladovAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\DelenieNakladov')
            ->getDelenieNakladov($id);

        $models = [];
        foreach ($polozky as $delenieNakladov) {
            $models[] = $this->createDelenieNakladovApiModel($delenieNakladov);
        }

        return $this->createApiResponse($models);
    }

    private function createDelenieNakladovApiModel(DelenieNakladov $delenieNakladov)
    {
        $model = new DelenieNakladovApiModel();
        $model->id = $delenieNakladov->getId();
        $model->datum = $delenieNakladov->getDatum();
//        $model->hlavny = $delenieNakladov->getHlavny();
        $model->polozka = $delenieNakladov->getPolozka();
        $model->tpv = $delenieNakladov->getTpv();
        $model->tpz = $delenieNakladov->getTpz();

        return $model;
    }

    /**
     * @Route("kont/sct/kotolne/{id}", name="sct_kotolne_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getKotolneAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $kotolne = $em->getRepository('AppBundle:Kontroling\SCT\Kotolna')
            ->findKotolne();

        $parametre = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaParametre')
            ->findAll();

        $udaje = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaUdaje')
            ->findUdajeByHlavny($id);

        $platnost = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaPlatnost')
            ->findPlatnostByHlavny($id);

        $models = [];

        foreach ($kotolne as $kotolna) {
            $models['kotolne'][] = $kotolna;
        }

        foreach ($parametre as $parameter) {
            $models['parametre'][] = $this->createKotolnaParametreApiModel($parameter);
        }

        foreach ($udaje as $udaj) {
            $models['udaje'][] = $this->createKotolnaUdajeApiModel($udaj);
        }

        foreach ($platnost as $plati) {
            $models['platnost'][] = $this->createKotolnaPlatnostApiModel($plati);
        }

        return $this->createApiResponse($models);
    }

    private function createKotolnaParametreApiModel(KotolnaParametre $kotolnaParametre)
    {
        $model = new KotolnaParametreApiModel();

        $model->id = $kotolnaParametre->getId();
        $model->datum = $kotolnaParametre->getDatum();
        $model->kotolna = $kotolnaParametre->getKotolna();
        $model->hlavny = $kotolnaParametre->getHlavny();
        $model->polozka = $kotolnaParametre->getPolozka();
        $model->hodnota = $kotolnaParametre->getHodnota();

        return $model;
    }

    private function createKotolnaUdajeApiModel(KotolnaUdaje $kotolnaUdaje)
    {
        $model = new KotolnaUdajeApiModel();

        $model->id = $kotolnaUdaje->getId();
        $model->datum = $kotolnaUdaje->getDatum();
        $model->kotolna = $kotolnaUdaje->getKotolna();
//        $model->hlavny = $kotolnaUdaje->getHlavny();
        $model->m3 = $kotolnaUdaje->getM3();
        $model->mwh = $kotolnaUdaje->getMwh();
        $model->nbsd = $kotolnaUdaje->getNbsd();
        $model->sd = $kotolnaUdaje->getSd();
        $model->pdm = $kotolnaUdaje->getPdm();
        $model->kwh = $kotolnaUdaje->getKwh();

        return $model;
    }

    private function createKotolnaPlatnostApiModel(KotolnaPlatnost $kotolnaPlatnost)
    {
        $model = new KotolnaPlatnostApiModel();

        $model->id = $kotolnaPlatnost->getId();
        $model->datum = $kotolnaPlatnost->getDatum();
        $model->kotolna = $kotolnaPlatnost->getKotolna();
//        $model->hlavny = $kotolnaPlatnost->getHlavny();
        $model->plati = $kotolnaPlatnost->getPlati();

        return $model;
    }

    /**
     * @Route("kont/sct/zemny-plyn/{id}", name="sct_zemny-plyn_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getZemnyPlynAction($id)
    {
        // vychod | zapad | juh | kotolne
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\ZemnyPlyn');

        $vychod = $repository->getVychod($id);

        $zapad = $repository->getZapad($id);

        $juh = $repository->getJuh($id);

        $kotolne = $repository->getKotolne($id);

        $vychod_models = [];
        $zapad_models = [];
        $juh_models = [];
        $kotolne_models = [];

        foreach ($vychod as $vychod_riadok) {
            $vychod_models[] = $this->createZemnyPlynApiModel($vychod_riadok);
        }

        foreach ($zapad as $zapad_riadok) {
            $zapad_models[] = $this->createZemnyPlynApiModel($zapad_riadok);
        }

        foreach ($juh as $juh_riadok) {
            $juh_models[] = $this->createZemnyPlynApiModel($juh_riadok);
        }

        foreach ($kotolne as $kotolne_riadok) {
            $kotolne_models[] = $this->createZemnyPlynApiModel($kotolne_riadok);
        }

        return $this->createApiResponse([
            'vychod' => $vychod_models,
            'zapad' => $zapad_models,
            'juh' => $juh_models,
            'kotolne' => $kotolne_models
        ]);
    }

    private function createZemnyPlynApiModel(ZemnyPlyn $zemnyPlyn)
    {
        $model = new ZemnyPlynApiModel();

        $model->id = $zemnyPlyn->getId();
        $model->datum = $zemnyPlyn->getDatum();
//        $model->hlavny = $zemnyPlyn->getHlavny();
//        $model->zdroj = $zemnyPlyn->getZdroj();
        $model->mesiac = $zemnyPlyn->getMesiac();
        $model->objem_m3 = $zemnyPlyn->getObjemM3();
        $model->objem_mwh = $zemnyPlyn->getObjemMwh();
        $model->fmso = $zemnyPlyn->getFmso();
        $model->fmsp = $zemnyPlyn->getFmsp();
        $model->fmsd = $zemnyPlyn->getFmsd();
        $model->vsd = $zemnyPlyn->getVsd();
        $model->dan_mwh = $zemnyPlyn->getDanMwh();
        $model->dan_eur = $zemnyPlyn->getDanEur();
        $model->pdm = $zemnyPlyn->getPdm();

        return $model;
    }

    /**
     * @Route("kont/sct/hlavny/{id}", name="sct_hlavny_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateHlavnyAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $hlavny = $em->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $userId = $this->getUser()->getId();
        $upravil = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $hlavny->setUpravil($upravil);
        $hlavny->setZmenene(new \DateTime());

        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\Hlavny',
            HlavnyType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/konstanty/{id}", name="sct_konstanty_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateKonstantyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\Konstanty',
            KonstantyType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/vyroba-elektriny/{id}", name="sct_vyroba-elektriny_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateVyrobaElektrinyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\VyrobaElektriny',
            VyrobaElektrinyType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/delenie-nakladov/{id}", name="sct_delenie-nakladov_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateDelenieNakladovAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\DelenieNakladov',
            DelenieNakladovType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/kotolna/{id}", name="sct_kotolna_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateKotolnaAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\Kotolna',
            KotolnaType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/kotolna/parameter/{id}", name="sct_parameter-kotolne_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateParameterKotolneAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\KotolnaParametre',
            KotolnaParametreType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/kotolna/udaj/{id}", name="sct_udaj-kotolne_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateUdajKotolneAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\KotolnaUdaje',
            KotolnaUdajeType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/zemny-plyn/{id}", name="sct_zemny-plyn_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateZemnyPlynAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\ZemnyPlyn',
            ZemnyPlynType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/kotolna/{id}", name="sct_kotolna_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function deleteKotolnaAction($id, Request $request)
    {
        return $this->deleteFromDatabase(
            $id,
            'AppBundle:Kontroling\SCT\Kotolna',
            $request
        );
    }
}