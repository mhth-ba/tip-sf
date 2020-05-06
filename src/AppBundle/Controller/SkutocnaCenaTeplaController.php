<?php

namespace AppBundle\Controller;

use AppBundle\Api\AktivitaApiModel;
use AppBundle\Api\Kontroling\KonstantyApiModel;
use AppBundle\Api\Kontroling\NakupTeplaApiModel;
use AppBundle\Api\Kontroling\NormativneMnozstvoApiModel;
use AppBundle\Api\Kontroling\SCT\DelenieNakladovApiModel;
use AppBundle\Api\Kontroling\SCT\DodaneTeploApiModel;
use AppBundle\Api\Kontroling\SCT\HlavnyApiModel;
use AppBundle\Api\Kontroling\SCT\KotolnaParametreApiModel;
use AppBundle\Api\Kontroling\SCT\KotolnaPlatnostApiModel;
use AppBundle\Api\Kontroling\SCT\KotolnaUdajeApiModel;
use AppBundle\Api\Kontroling\SCT\NormativneMnozstvoKotolneApiModel;
use AppBundle\Api\Kontroling\SCT\OpravneneNakladyKotolneApiModel;
use AppBundle\Api\Kontroling\SCT\PoznamkyApiModel;
use AppBundle\Api\Kontroling\SCT\RegulovanaZlozkaApiModel;
use AppBundle\Api\Kontroling\SCT\SkutocneNakladyApiModel;
use AppBundle\Api\Kontroling\SCT\UploadApiModel;
use AppBundle\Api\Kontroling\SCT\VyrobaElektrinyApiModel;
use AppBundle\Api\Kontroling\SCT\ZemnyPlynApiModel;
use AppBundle\Api\Kontroling\SCT\ZemnyPlynKlucovanieApiModel;
use AppBundle\Api\Kontroling\VypocetBuniekApiModel;
use AppBundle\Api\UserApiModel;
use AppBundle\Entity\App\ActivityLog;
use AppBundle\Entity\App\Grant;
use AppBundle\Entity\App\User;
use AppBundle\Entity\Kontroling\SCT\Hlavny;
use AppBundle\Entity\Kontroling\SCT\DelenieNakladov;
use AppBundle\Entity\Kontroling\SCT\DodaneTeplo;
use AppBundle\Entity\Kontroling\SCT\Konstanty;
use AppBundle\Entity\Kontroling\SCT\KotolnaParametre;
use AppBundle\Entity\Kontroling\SCT\KotolnaPlatnost;
use AppBundle\Entity\Kontroling\SCT\KotolnaUdaje;
use AppBundle\Entity\Kontroling\SCT\NakupTepla;
use AppBundle\Entity\Kontroling\SCT\NormativneMnozstvo;
use AppBundle\Entity\Kontroling\SCT\Poznamky;
use AppBundle\Entity\Kontroling\SCT\RegulovanaZlozka;
use AppBundle\Entity\Kontroling\SCT\SkutocneNaklady;
use AppBundle\Entity\Kontroling\SCT\Upload;
use AppBundle\Entity\Kontroling\SCT\VyrobaElektriny;
use AppBundle\Entity\Kontroling\SCT\ZemnyPlyn;
use AppBundle\Entity\Kontroling\SCT\ZemnyPlynKlucovanie;
use AppBundle\Export\Kontroling\SCT\Priloha13;
use AppBundle\Export\Kontroling\SCT\Priloha14;
use AppBundle\Export\Kontroling\SCT\Priloha15;
use AppBundle\Export\Kontroling\SCT\Priloha16;
use AppBundle\Export\Kontroling\SCT\Priloha17;
use AppBundle\Export\Kontroling\SCT\Priloha18;
use AppBundle\Export\Kontroling\SCT\Priloha19;
use AppBundle\Export\Kontroling\SCT\Priloha20;
use AppBundle\Export\Kontroling\SCT\Priloha21;
use AppBundle\Form\Type\GrantType;
use AppBundle\Form\Type\Kontroling\SCT\HlavnyType;
use AppBundle\Form\Type\Kontroling\SCT\DelenieNakladovType;
use AppBundle\Form\Type\Kontroling\SCT\KonstantyType;
use AppBundle\Form\Type\Kontroling\SCT\KotolnaParametreType;
use AppBundle\Form\Type\Kontroling\SCT\KotolnaType;
use AppBundle\Form\Type\Kontroling\SCT\KotolnaUdajeType;
use AppBundle\Form\Type\Kontroling\SCT\NakupTeplaType;
use AppBundle\Form\Type\Kontroling\SCT\NormativneMnozstvoType;
use AppBundle\Form\Type\Kontroling\SCT\PoznamkyType;
use AppBundle\Form\Type\Kontroling\SCT\RegulovanaZlozkaType;
use AppBundle\Form\Type\Kontroling\SCT\SkutocneNakladyType;
use AppBundle\Form\Type\Kontroling\SCT\VyrobaElektrinyType;
use AppBundle\Form\Type\Kontroling\SCT\ZemnyPlynKlucovanieType;
use AppBundle\Form\Type\Kontroling\SCT\ZemnyPlynType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class SkutocnaCenaTeplaController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesSCT();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_SCT_VYR')) {
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

        $upload->setPlatne(true);
        $upload->setHlavny($hlavny);
        $upload->setUpload($uploadtype);
        $upload->setOriginal($original);
        $upload->setSubor($filename);

        $em = $this->getDoctrine()->getManager();
        $em->persist($upload);
        $em->flush();

        $this->logCreateActivity($upload->getId(), 'AppBundle:Kontroling\SCT\Upload');

//        throw new Exception('Nastala neočakávaná chyba');

        $fs = new Filesystem();

        $dir = $this->get('kernel')->getProjectDir().'/web/uploads';

        switch ($uploadtype_id) {
            case 1: // vlastny subor (ulozisko priloh, exportov, podkladov...)
                break;
            case 2: // dodavka tepla (skutocna)
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/kontroling/DT.xml'
                );
                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\SCT\Upload')
                    ->uploadDodaneTeplo($hlavny_id);
                break;
            case 3: // skutocne naklady (spolocne)
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/kontroling/SN.xml'
                );
                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\SCT\Upload')
                    ->uploadSkutocneNaklady($hlavny_id);
                break;
            case 4: // danove odpisy
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/kontroling/DO.xml'
                );
                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\SCT\Upload')
                    ->uploadDanoveOdpisy($hlavny_id);
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

        return $this->downloadFile($sub, $file, $orig, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    /**
     * @Route("kont/sct/hlavny", name="sct_hlavny_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function createHlavnyAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Kontroling\SCT\Hlavny');

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $rok = $data['rok'];
        $userId = $this->getUser()->getId();

        $novy = $repository->createHlavny($rok, $userId);
        $hlavnyId = $novy[0]->getId(); // ID noveho hlavneho zaznamu

        $this->logCreateActivity($hlavnyId, 'AppBundle:Kontroling\SCT\Hlavny');

        $hlavny = $repository->find($hlavnyId);

        $apiModel = $this->createHlavnyApiModel($hlavny);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("kont/sct/pristupy", name="sct_pristup_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_SCT_ADMIN')")
     */
    public function createPristupAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $userId = $data['user'];
        $roleId = $data['role'];

        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $role = $em->getRepository('AppBundle:App\Role')
            ->find($roleId);

        $pristup = new Grant();

        $pristup->setUsers($user);
        $pristup->setRoles($role);

        $em->persist($pristup);
        $em->flush();

        $this->logCreateActivity($pristup->getId(), 'AppBundle:App\Grant');

        return $this->createApiResponse($pristup);
    }


    /**
     * @Route("kont/sct/kotolne", name="sct_kotolne_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_SCT_KONT')")
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

    // TODO kotolna platnost
    public function modifyKotolnaPlatnostAction()
    {
        return;
    }

    // TODO kotolna primarny rozvod
    public function modifyKotolnaPrimarAction()
    {
        return;
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
     * @Route("kont/sct/pristupy", name="sct_pristupy", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getPristupy()
    {
        $grants = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Grant')
            ->findGrantedRolesSCT();

        return $this->createApiResponse($grants);
    }

    /**
     * @Route("kont/sct/moznosti", name="sct_moznosti", options={"expose"=true})
     * @Method("GET")
     */
    public function getMoznostiAction()
    {
        $em = $this->getDoctrine()->getManager();

        $stavy = $em->getRepository('AppBundle:Kontroling\Stav')
            ->getStavy();

        $prepojenia = $em->getRepository('AppBundle:Kontroling\NCT\Hlavny')
            ->findFinalne();

        $pouzivatelia = $em->getRepository('AppBundle:App\User')
            ->findUsers();

        $role = $em->getRepository('AppBundle:App\Role')
            ->findRolesSCT();

        $moznosti = [];

        foreach ($stavy as $stav) {
            $moznosti['stav'][] = $stav;
        }

        foreach ($prepojenia as $nct) {
            $moznosti['prepojenie'][] = $nct;
        }

        foreach ($pouzivatelia as $pouzivatel) {
            $moznosti['pouzivatelia'][] = $this->createUserApiModel($pouzivatel);
        }

        foreach ($role as $rola) {
            $moznosti['role'][] = $rola;
        }

        return $this->createApiResponse($moznosti);
    }

    private function createUserApiModel(User $user)
    {
        $model = new UserApiModel();

        $model->id = $user->getId();
        $model->username = $user->getUsername();
        $model->fullname = $user->getFullname();
        $model->mail = $user->getMail();
        $model->title = $user->getTitle();
        $model->department = $user->getDepartment();
        $model->phone = $user->getPhone();
        $model->mobile = $user->getMobile();
        $model->office = $user->getOffice();
        $model->company = $user->getCompany();

        return $model;
    }

    /**
     * @Route("kont/sct/aktivita", name="sct_aktivita", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getAktivitaAction()
    {
        $aktivita = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\ActivityLog')
            ->findKontSCTUserActivityAll();

        $data = [];

        foreach ($aktivita as $item) {
            $data[] = $this->createAktivitaApiModel($item);
        }

        return $this->createApiResponse($data);
    }

    private function createAktivitaApiModel(ActivityLog $log)
    {
        $model = new AktivitaApiModel();

        $model->id = $log->getId();
        $model->datum = $log->getDatum();
        $model->schema = $log->getSchema();
        $model->table = $log->getTable();
        $model->column = $log->getColumn();
        $model->row = $log->getRow();
        $model->value = $log->getValue();
        $model->username = $log->getUser()->getUsername();
        $model->fullname = $log->getUser()->getFullname();

        return $model;
    }

    /**
     * @Route("kont/sct/hlavny", name="sct_hlavny_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_VYR')")
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
     * @Security("has_role('ROLE_SCT_VYR')")
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
        $model->nct_dodavka = $hlavny->getNctDodavka();
        $model->nct_cena = $hlavny->getNctCena();
        $model->stav = $hlavny->getStav();
        $model->nazov = $hlavny->getNazov();
        $model->rok = $hlavny->getRok();
        $model->vytvoril = $hlavny->getVytvoril();
        $model->upravil = $hlavny->getUpravil();
        $model->poznamka = $hlavny->getPoznamka();

        $upload = $em->getRepository('AppBundle:Kontroling\SCT\Upload');

        $upload_dt = $upload->getLastUploadedDodaneTeplo($id);
        $upload_sn = $upload->getLastUploadedSkutocneNaklady($id);
        $upload_do = $upload->getLastUploadedDanoveOdpisy($id);

        $model->upload['dt'] = $upload_dt; // dodane teplo
        $model->upload['sn'] = $upload_sn; // skutocne naklady
        $model->upload['do'] = $upload_do; // danove odpisy

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
     * @Route("kont/sct/subory/{id}", name="sct_subory_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getSuboryAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Upload')
            ->findUploadedGeneralFiles($id);

        $data = [];
        foreach ($polozky as $item) {
            $data[] = $this->createSuboryApiModel($item);
        }

        return $this->createApiResponse($data);
    }

    private function createSuboryApiModel(Upload $upload)
    {
        $model = new UploadApiModel();

        $model->id = $upload->getId();
        $model->datum = $upload->getDatum();
        $model->platne = $upload->getPlatne();
        $model->original = $upload->getOriginal();
        $model->subor = $upload->getSubor();

        return $model;
    }

    /**
     * @Route("kont/sct/konstanty/{id}", name="sct_konstanty_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_VYR')")
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
     * @Security("has_role('ROLE_SCT_VYR')")
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
     * @Security("has_role('ROLE_SCT_VYR')")
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
     * @Security("has_role('ROLE_SCT_VYR')")
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
     * @Security("has_role('ROLE_SCT_VYR')")
     */
    public function getKotolneAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $kotolne = $em->getRepository('AppBundle:Kontroling\SCT\Kotolna')
            ->findKotolne();

        $parametre = $em->getRepository('AppBundle:Kontroling\SCT\KotolnaParametre')
            ->findAllParametreOrderByHlavny();

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
        $model->z_kwh = $kotolnaUdaje->getZKwh();
        $model->p_kwh = $kotolnaUdaje->getPKwh();

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
        $model->primar = $kotolnaPlatnost->getPrimar();

        return $model;
    }

    /**
     * @Route("kont/sct/zemny-plyn/{id}", name="sct_zemny-plyn_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_VYR')")
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
     * @Route("kont/sct/zemny-plyn-klucovanie/{id}", name="sct_zemny-plyn-klucovanie_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_VYR')")
     */
    public function getZemnyPlynKlucovanieAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\ZemnyPlynKlucovanie')
            ->getFakturovaneNaklady($id);

        $models = [];
        foreach ($polozky as $zemnyPlynKlucovanie) {
            $models[] = $this->createZemnyPlynKlucovanieApiModel($zemnyPlynKlucovanie);
        }

        return $this->createApiResponse($models);
    }

    private function createZemnyPlynKlucovanieApiModel(ZemnyPlynKlucovanie $zemnyPlynKlucovanie)
    {
        $model = new ZemnyPlynKlucovanieApiModel();

        $model->id = $zemnyPlynKlucovanie->getId();
        $model->datum = $zemnyPlynKlucovanie->getDatum();
//        $model->hlavny = $zemnyPlynKlucovanie->getHlavny();
        $model->polozka = $zemnyPlynKlucovanie->getPolozka();
        $model->suma = $zemnyPlynKlucovanie->getSuma();

        return $model;
    }

    /**
     * @Route("kont/sct/normativne-mnozstvo/{id}", name="sct_normativne-mnozstvo_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getNormativneMnozstvoAction($id)
    {
        // vychod | juh | zapad
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\NormativneMnozstvo');

        $vychod = $repository->getVychod($id);

        $juh = $repository->getJuh($id);

        $zapad = $repository->getZapad($id);

            // Plynove kotolne
            $sql = "EXECUTE [Kontroling].[SCT_NormativneMnozstvo_Kotolne_SP] @ID = ?";
            $sqlParams = array($id);
            $conn = $this->getDoctrine()->getConnection();
            $polozky = $conn->execProcedureWithResultSet($sql, $sqlParams);


        $data = [
            'vychod' => array(),
            'juh' => array(),
            'zapad' => array(),
            'kotolne' => array()
        ];

        foreach ($vychod as $tpv) {
            $data['vychod'][] = $this->createNormativneMnozstvoApiModel($tpv);
        }

        foreach ($juh as $vhj) {
            $data['juh'][] = $this->createNormativneMnozstvoApiModel($vhj);
        }

        foreach ($zapad as $tpz) {
            $data['zapad'][] = $this->createNormativneMnozstvoApiModel($tpz);
        }

        foreach ($polozky[0] as $kotolna) {
            $data['kotolne'][] = $this->createNormativneMnozstvoKotolneApiModel($kotolna);
        }

        return $this->createApiResponse($data);
    }

    private function createNormativneMnozstvoApiModel(NormativneMnozstvo $nm)
    {
        $model = new NormativneMnozstvoApiModel();

        $model->id = $nm->getId();
        $model->datum = $nm->getDatum();
        $model->polozka = $nm->getPolozka();
        $model->hodnota = $nm->getHodnota();
        $model->ucinnost = $nm->getUcinnost();

        return $model;
    }

    private function createNormativneMnozstvoKotolneApiModel($kotolna)
    {
        $model = new NormativneMnozstvoKotolneApiModel();

        $model->id = $kotolna['ID'];
        $model->primar = $kotolna['P'];
        $model->kotolna = $kotolna['Nazov'];
        $model->p_teplo = $kotolna['P_Teplo'];
        $model->p_ucinnost = $kotolna['P_Ucinnost'];
        $model->z_teplo = $kotolna['Z_Teplo'];
        $model->z_ucinnost = $kotolna['Z_Ucinnost'];
        $model->vzp = $kotolna['VZP'];
        $model->pstv = $kotolna['PSTV'];
        $model->nmzp_mwh = $kotolna['NMZP_MWh'];
        $model->nmzp_m3 = $kotolna['NMZP_m3'];

        return $model;
    }

    /**
     * @Route("kont/sct/opravnene-naklady/{id}", name="sct_opravnene-naklady_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getOpravneneNakladyAction($id)
    {
        // Plynove kotolne
        $sql = "EXECUTE [Kontroling].[SCT_OpravneneNaklady_Kotolne_SP] @ID = ?";
        $sqlParams = array($id);
        $conn = $this->getDoctrine()->getConnection();
        $polozky = $conn->execProcedureWithResultSet($sql, $sqlParams);

        $data = [
            'kotolne' => array()
        ];

        foreach ($polozky[0] as $kotolna) {
            $data['kotolne'][] = $this->createOpravneneNakladyKotolneApiModel($kotolna);
        }

        return $this->createApiResponse($data);
    }

    private function createOpravneneNakladyKotolneApiModel($kotolna)
    {
        $model = new OpravneneNakladyKotolneApiModel();

        $model->id = $kotolna['ID'];
        $model->kotolna = $kotolna['Nazov'];
        $model->nmzp_mwh = $kotolna['NMZP_MWh'];
        $model->jczp = $kotolna['JCZP'];
        $model->nn = $kotolna['NN'];
        $model->sfn = $kotolna['SFN'];
        $model->pb = $kotolna['PB'];
        $model->eon = $kotolna['EON'];

        return $model;
    }

    /**
     * @Route("kont/sct/nakup-tepla/{id}", name="sct_nakup-tepla_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getNakupTeplaAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\NakupTepla')
            ->getNakladyNaNakupTepla($id);

        $models = [];
        foreach ($polozky as $nakupTepla) {
            $models[] = $this->createNakupTeplaApiModel($nakupTepla);
        }

        return $this->createApiResponse($models);
    }

    private function createNakupTeplaApiModel(NakupTepla $nakupTepla)
    {
        $model = new NakupTeplaApiModel();

        $model->id = $nakupTepla->getId();
        $model->datum = $nakupTepla->getDatum();
        $model->polozka = $nakupTepla->getPolozka();
        $model->ppc = $nakupTepla->getPpc();
        $model->slovnaft = $nakupTepla->getSlovnaft();
        $model->cw = $nakupTepla->getCw();

        return $model;
    }

    /**
     * @Route("kont/sct/skutocne-naklady/{id}", name="sct_skutocne-naklady_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getSkutocneNakladyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\SkutocneNaklady')
            ->getSkutocneNaklady($id);

        $models = [];
        foreach ($polozky as $skutocneNaklady) {
            $models[] = $this->createSkutocneNakladyApiModel($skutocneNaklady);
        }

        return $this->createApiResponse($models);
    }

    private function createSkutocneNakladyApiModel(SkutocneNaklady $skutocneNaklady)
    {
        $model = new SkutocneNakladyApiModel();

        $model->id = $skutocneNaklady->getId();
        $model->datum = $skutocneNaklady->getDatum();
//        $model->hlavny = $skutocneNaklady->getHlavny();
        $model->ucet = $skutocneNaklady->getUcet();
        $model->polozka = $skutocneNaklady->getPolozka();
        $model->tpv_p = $skutocneNaklady->getTpvP();
        $model->tpv_k = $skutocneNaklady->getTpvK();
        $model->tpz_p = $skutocneNaklady->getTpzP();
        $model->tpz_k = $skutocneNaklady->getTpzK();
        $model->vhj = $skutocneNaklady->getVhj();
        $model->pk = $skutocneNaklady->getPk();
        $model->primar = $skutocneNaklady->getPrimar();
        $model->ost = $skutocneNaklady->getOst();
        $model->sekundar = $skutocneNaklady->getSekundar();
        $model->rezijne = $skutocneNaklady->getRezijne();
        $model->spolu = $skutocneNaklady->getSpolu();

        return $model;
    }

    /**
     * @Route("kont/sct/regulovana-zlozka/{id}", name="sct_regulovana-zlozka_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getRegulovanaZlozkaAction($id)
    {
        $regulovanaZlozka = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\RegulovanaZlozka')
            ->getRegulovanaZlozka($id);

        $model = $this->createRegulovanaZlozkaApiModel($regulovanaZlozka);

        return $this->createApiResponse($model);
    }

    private function createRegulovanaZlozkaApiModel(RegulovanaZlozka $regulovanaZlozka)
    {
        $model = new RegulovanaZlozkaApiModel();

        $model->id = $regulovanaZlozka->getId();
        $model->datum = $regulovanaZlozka->getDatum();
//        $model->hlavny = $regulovanaZlozka->getHlavny();
        $model->prikon = $regulovanaZlozka->getPrikon();
        $model->doLimitu = $regulovanaZlozka->getDoLimitu();
        $model->nadLimit = $regulovanaZlozka->getNadLimit();
        $model->zaklad = $regulovanaZlozka->getZaklad();
        $model->priplatok = $regulovanaZlozka->getPriplatok();
        $model->kdkwnl = $regulovanaZlozka->getKdkwnl();
        $model->rzfn = $regulovanaZlozka->getRzfn();
        $model->pz = $regulovanaZlozka->getPz();
        $model->rzfnapz = $regulovanaZlozka->getRzfnapz();

        return $model;
    }

    /**
     * @Route("kont/sct/vypocet-buniek/{id}", name="sct_vypocet-buniek_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_VYR')")
     */
    public function getVypocetBuniekAction($id)
    {
        $sql_vb = "EXECUTE [Kontroling].[SCT_VypocetBuniek_SP] @ID = ?";
        $sql_vc = "EXECUTE [Kontroling].[SCT_VyvojCeny] @ID = ?";

        $sqlParams = array($id);
        $conn = $this->getDoctrine()->getConnection();

        $polozky_vb = $conn->execProcedureWithResultSet($sql_vb, $sqlParams);
        $polozky_vc = $conn->execProcedureWithResultSet($sql_vc, $sqlParams);

        $bunky = [];
        foreach ($polozky_vb[0] as $bunka) {
            $bunky[] = $this->createVypocetBuniekApiModel($bunka);
        }

        $graf = [];
        foreach ($polozky_vc[0] as $cena) {
            $graf[] = $cena;
        }

        return $this->createApiResponse([
            'bunky' => $bunky,
            'graf' => $graf     // vyvoj ceny tepla BAT v priebehu rokov (graf)
        ]);
    }

    private function createVypocetBuniekApiModel($riadok)
    {
        $model = new VypocetBuniekApiModel();

        $model->id = $riadok['ID'];
        $model->hodnota = $riadok['Hodnota'];

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

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        // zmena stavu na "dokončený"
        //   -> uložiť vypočítané hodnoty natrvalo do tabuľky SCT_FinalnyVypocet
        //   -> uložiť vypočítané zložky ceny tepla do tabuľky SCT_CenaTepla (variabil, fix, celkova)
        if (array_key_exists("stav", $data)) {
            if ($data['stav'] == 1) {
                $sql_fv = "EXECUTE [Kontroling].[SCT_FinalnyVypocet_Ulozit] @ID = ?";
                $sql_ct = "EXECUTE [Kontroling].[SCT_CenaTepla_Ulozit] @ID = ?";

                $sqlParams = array($id);
                $conn = $this->getDoctrine()->getConnection();

                $conn->execProcedureWithResultSet($sql_fv, $sqlParams);
                $conn->execProcedureWithResultSet($sql_ct, $sqlParams);
            }
        }

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
     * @Route("kont/sct/pristup/{id}", name="sct_pristup_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_ADMIN')")
     */
    public function updatePristupAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $pristup = $em->getRepository('AppBundle:App\Grant')
            ->find($id);

        return $this->updateDatabase(
            $id,
            'AppBundle:App\Grant',
            GrantType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/poznamky/{id}", name="sct_poznamky_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updatePoznamkyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\Poznamky',
            PoznamkyType::class,
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
     * @Route("kont/sct/zemny-plyn-klucovanie/{id}", name="sct_zemny-plyn-klucovanie_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateZemnyPlynKlucovanieAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\ZemnyPlynKlucovanie',
            ZemnyPlynKlucovanieType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/normativne-mnozstvo/{id}", name="sct_normativne-mnozstvo_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateNormativneMnozstvoAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\NormativneMnozstvo',
            NormativneMnozstvoType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/nakup-tepla/{id}", name="sct_nakup-tepla_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateNakupTeplaAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\NakupTepla',
            NakupTeplaType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/skutocne-naklady/{id}", name="sct_skutocne-naklady_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateSkutocneNakladyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\SkutocneNaklady',
            SkutocneNakladyType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/regulovana-zlozka/{id}", name="sct_regulovana-zlozka_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateRegulovanaZlozkaAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\SCT\RegulovanaZlozka',
            RegulovanaZlozkaType::class,
            $request
        );
    }

    /**
     * @Route("kont/sct/pristup/{id}", name="sct_pristup_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_SCT_ADMIN')")
     */
    public function deletePristupAction($id, Request $request)
    {
        return $this->deleteFromDatabase(
            $id,
            'AppBundle:App\Grant',
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

    /**
     * @Route("kont/sct/subory/{id}", name="sct_subor_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function deleteSuborAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $subor = $em->getRepository('AppBundle:Kontroling\SCT\Upload')
            ->find($id);

        $subor->setPlatne(false);
        $em->persist($subor);
        $em->flush();

        return $this->markAsDeleted(
            $id,
            'AppBundle:Kontroling\SCT\Upload'
        );
    }

    /**
     * @Route("kont/sct/export-priloha-13/{id}", name="sct_export-13", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha13($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha13();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 13 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-14/{id}", name="sct_export-14", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha14($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha14();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 14 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-15/{id}", name="sct_export-15", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha15($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha15();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 15 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-16/{id}", name="sct_export-16", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha16($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha16();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 16 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-17/{id}", name="sct_export-17", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha17($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha17();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 17 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-18/{id}", name="sct_export-18", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha18($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha18();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 18 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-19/{id}", name="sct_export-19", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha19($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha19();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 19 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-20/{id}", name="sct_export-20", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha20($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha20();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 20 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    /**
     * @Route("kont/sct/export-priloha-21/{id}", name="sct_export-21", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function exportPriloha21($id)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->find($id);

        $rok = $hlavny->getRok();

        $priloha = new Priloha21();
        $priloha->setRok($rok);

        $filename = "SCT Priloha 21 ($rok).xml";
        $fileContent = $priloha->getContent();

        return $this->exportTemplate($filename, $fileContent);
    }

    private function exportTemplate(string $filename, string $fileContent)
    {
        $response = new Response($fileContent);
        $disposition = $response->headers->makeDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );
        $response->headers->set('Content-Disposition', $disposition);
        return $response;
    }
}