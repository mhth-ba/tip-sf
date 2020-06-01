<?php

namespace AppBundle\Controller;

use AppBundle\Api\AktivitaApiModel;
use AppBundle\Api\GrantApiModel;
use AppBundle\Api\Kontroling\NakupTeplaApiModel;
use AppBundle\Api\Kontroling\NormativneMnozstvoApiModel;
use AppBundle\Api\Kontroling\VCT\ForecastDodavkyTeplaVariantApiModel;
use AppBundle\Api\Kontroling\VCT\ForecastNormativnehoMnozstvaVariantApiModel;
use AppBundle\Api\Kontroling\VCT\ForecastOcakavanychNakladovVariantApiModel;
use AppBundle\Api\Kontroling\VCT\HlavnyApiModel;
use AppBundle\Api\Kontroling\VCT\OcakavanaDodavkaApiModel;
use AppBundle\Api\Kontroling\VCT\OcakavaneNakladyApiModel;
use AppBundle\Api\Kontroling\VCT\OcakavaneNakladyVariantyApiModel;
use AppBundle\Api\Kontroling\VCT\PoznamkyApiModel;
use AppBundle\Api\Kontroling\VCT\PriemernaCenaZemnehoPlynuApiModel;
use AppBundle\Api\Kontroling\VCT\SkutocneNakladyApiModel;
use AppBundle\Api\Kontroling\VCT\VariantApiModel;
use AppBundle\Api\Kontroling\VCT\ZemnyPlynApiModel;
use AppBundle\Api\Kontroling\VCT\ZemnyPlynVariantyApiModel;
use AppBundle\Api\Kontroling\VypocetBuniekApiModel;
use AppBundle\Api\RoleApiModel;
use AppBundle\Api\UserApiModel;
use AppBundle\Entity\App\ActivityLog;
use AppBundle\Entity\App\Grant;
use AppBundle\Entity\App\Role;
use AppBundle\Entity\App\User;
use AppBundle\Entity\Kontroling\VCT\Hlavny;
use AppBundle\Entity\Kontroling\VCT\NakupTepla;
use AppBundle\Entity\Kontroling\VCT\NormativneMnozstvo;
use AppBundle\Entity\Kontroling\VCT\OcakavanaDodavka;
use AppBundle\Entity\Kontroling\VCT\OcakavaneNaklady;
use AppBundle\Entity\Kontroling\VCT\OcakavaneNakladyVarianty;
use AppBundle\Entity\Kontroling\VCT\Poznamky;
use AppBundle\Entity\Kontroling\VCT\SkutocneNaklady;
use AppBundle\Entity\Kontroling\VCT\Upload;
use AppBundle\Entity\Kontroling\VCT\Variant;
use AppBundle\Form\Type\GrantType;
use AppBundle\Form\Type\Kontroling\VCT\HlavnyType;
use AppBundle\Form\Type\Kontroling\VCT\NakupTeplaType;
use AppBundle\Form\Type\Kontroling\VCT\NormativneMnozstvoType;
use AppBundle\Form\Type\Kontroling\VCT\OcakavaneNakladyType;
use AppBundle\Form\Type\Kontroling\VCT\OcakavaneNakladyVariantyType;
use AppBundle\Form\Type\Kontroling\VCT\SkutocneNakladyType;
use AppBundle\Form\Type\Kontroling\VCT\VariantType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class VyhodnotenieCenyTeplaController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesVCT();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_VCT_MNG')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('kont/vyhodnotenie-ceny-tepla/index.html.twig', [
            'name' => null
        ]);
    }

    /**
     * @Route("kont/vct/upload", name="vct_upload", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_VCT_KONT')")
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
            ->getRepository('AppBundle:Kontroling\VCT\Hlavny')
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

        $this->logCreateActivity($upload->getId(), 'AppBundle:Kontroling\VCT\Upload');

//        throw new Exception('Nastala neočakávaná chyba');

        $fs = new Filesystem();

        $dir = $this->get('kernel')->getProjectDir().'/web/uploads';

        switch ($uploadtype_id) {
            case 1: // vlastny subor (ulozisko priloh, exportov, podkladov...)
                break;
            case 5: // dodavka tepla (ocakavana)
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/kontroling/ODT.xml'
                );
                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\VCT\Upload')
                    ->uploadOcakavanaDodavka($hlavny_id);
                break;
            case 6: // skutocne naklady (1-X)
                $fs->copy(
                    $dir.'/kontroling/'.$filename,
                    $dir.'/kontroling/SN(1-X).xml'
                );
                $this->getDoctrine()->getManager()
                    ->getRepository('AppBundle:Kontroling\VCT\Upload')
                    ->uploadSkutocneNaklady($hlavny_id);
                break;
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("kont/vct/download/{id}", name="vct_download", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function downloadFileAction($id)
    {
        $upload = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\Upload')
            ->find($id);

        $sub = 'kontroling';
        $file = $upload->getSubor();
        $orig = $upload->getOriginal();

        return $this->downloadFile($sub, $file, $orig, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    /**
     * @Route("kont/vct/hlavny", name="vct_hlavny_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function createHlavnyAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Kontroling\VCT\Hlavny');

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $rok = $data['rok'];
        $mesiac = $data['mesiac'];
        $userId = $this->getUser()->getId();

        $novy = $repository->createHlavny($rok, $mesiac, $userId);
        $hlavnyId = $novy[0]->getId(); // ID noveho hlavneho zaznamu

        $this->logCreateActivity($hlavnyId, 'AppBundle:Kontroling\VCT\Hlavny');

        $hlavny = $repository->find($hlavnyId);

        $apiModel = $this->createHlavnyApiModel($hlavny);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("kont/vct/variant", name="vct_variant_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function createVariantAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Kontroling\VCT\Variant');

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $hlavny_id = $data['hlavny'];

        $novy = $repository->createVariant($hlavny_id);
        $variantId = $novy[0]->getId(); // ID noveho variantu

        $this->logCreateActivity($variantId, 'AppBundle:Kontroling\VCT\Variant');

        $variant = $repository->find($variantId);

        $apiModel = $this->createVariantApiModel($variant);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("kont/vct/pristupy", name="vct_pristup_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_VCT_ADMIN')")
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

        $grant = $em->getRepository('AppBundle:App\Grant')
            ->findOneBy(['id' => $pristup->getId()]);

        $grant->setUser($userId);
        $grant->setRole($roleId);

        return $this->createApiResponse($this->createGrantApiModel($grant));
    }

    /**
     * @Route("kont/vct/opravnenia", name="vct_opravnenia", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
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
     * @Route("kont/vct/pristupy", name="vct_pristupy", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getPristupyAction()
    {
        $grants = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Grant')
            ->findGrantedRolesVCT();

        $grants_arr = [];
        foreach ($grants as $grant) {
            $grants_arr[] = $this->createGrantApiModel($grant);
        }

        return $this->createApiResponse($grants_arr);
    }

    /**
     * @Route("kont/vct/moznosti", name="vct_moznosti", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getMoznostiAction()
    {
        $em = $this->getDoctrine()->getManager();

        $stavy = $em->getRepository('AppBundle:Kontroling\Stav')
            ->getStavy();

        $prepojenia_nct = $em->getRepository('AppBundle:Kontroling\NCT\Hlavny')
            ->findFinalne();

        $prepojenia_sct = $em->getRepository('AppBundle:Kontroling\SCT\Hlavny')
            ->findPouzitelne();

        $pouzivatelia = $em->getRepository('AppBundle:App\User')
            ->findUsers();

        $role = $em->getRepository('AppBundle:App\Role')
            ->findRolesVCT();

        $moznosti = [];

        foreach ($stavy as $stav) {
            $moznosti['stav'][] = $stav;
        }

        foreach ($prepojenia_nct as $nct) {
            $moznosti['prepojenie_nct'][] = $nct;
        }

        foreach ($prepojenia_sct as $sct) {
            $moznosti['prepojenie_sct'][] = $sct;
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

    private function createRoleApiModel(Role $role)
    {
        $model = new RoleApiModel();

        $model->id = $role->getId();
        $model->name = $role->getName();
        $model->role = $role->getRole();
        $model->description = $role->getDescription();

        return $model;
    }

    private function createGrantApiModel(Grant $grant)
    {
        $model = new GrantApiModel();

        $model->id = $grant->getId();
        $model->createdAt = $grant->getCreatedAt();
        $model->modifiedAt = $grant->getModifiedAt();
        $model->user = $this->createUserApiModel(
            $this->getDoctrine()->getManager()
                ->getRepository('AppBundle:App\User')
                ->findOneBy(['id' => $grant->getUser()])
        );
        $model->role = $this->createRoleApiModel(
            $this->getDoctrine()->getManager()
                ->getRepository('AppBundle:App\Role')
                ->findOneBy(['id' => $grant->getRole()])
        );

        return $model;
    }

    /**
     * @Route("kont/vct/aktivita", name="vct_aktivita", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getAktivitaAction()
    {
        $aktivita = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\ActivityLog')
            ->findKontVCTUserActivityAll();

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
     * @Route("kont/vct/hlavny", name="vct_hlavny_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getZoznamAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\Hlavny')
            ->getZoznam();

        $models = [];
        foreach ($zoznam as $hlavny) {
            $models[] = $this->createHlavnyApiModel($hlavny);
        }

        return $this->createApiResponse($models);
    }

    /**
     * @Route("kont/vct/hlavny/{id}", name="vct_hlavny_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
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
        $model->sct = $hlavny->getSct();
        $model->stav = $hlavny->getStav();
        $model->nazov = $hlavny->getNazov();
        $model->rok = $hlavny->getRok();
        $model->mesiac = $hlavny->getMesiac();
        $model->vytvoril = $hlavny->getVytvoril();
        $model->upravil = $hlavny->getUpravil();
        $model->poznamka = $hlavny->getPoznamka();

        $upload = $em->getRepository('AppBundle:Kontroling\VCT\Upload');

        $upload_odt = $upload->getLastUploadedOcakavanaDodavka($id);
        $upload_sn = $upload->getLastUploadedSkutocneNaklady($id);

        $model->upload['odt'] = $upload_odt; // ocakavana dodavka tepla
        $model->upload['sn'] = $upload_sn;   // skutocne naklady (1-X)

        return $model;
    }

    /**
     * @Route("kont/vct/varianty/{id}", name="vct_varianty_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getVariantyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\Variant')
            ->findByHlavny($id);

        $models = [];
        foreach ($polozky as $item) {
            $models[] = $this->createVariantApiModel($item);
        }

        return $this->createApiResponse($models);
    }

    private function createVariantApiModel(Variant $variant)
    {
        $model = new VariantApiModel();

        $model->id = $variant->getId();
        $model->datum = $variant->getDatum();
        $model->vychod = $variant->getVychod();
        $model->zapad = $variant->getZapad();

        return $model;
    }

    /**
     * @Route("kont/vct/poznamky/{id}", name="vct_poznamky_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getPoznamkyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\Poznamky')
            ->findByHlavny($id);

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
        $model->karta = $poznamky->getKarta();
        $model->poznamka = $poznamky->getPoznamka();

        return $model;
    }

    // TODO get subory action

    /**
     * @Route("kont/vct/ocakavana-dodavka/{id}", name="vct_ocakavana-dodavka_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getOcakavanaDodavkaAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\OcakavanaDodavka')
            ->getOcakavanaDodavka($id);

        $models = [];
        foreach ($polozky as $ocakavanaDodavka) {
            $models[] = $this->createOcakavanaDodavkaApiModel($ocakavanaDodavka);
        }

        return $this->createApiResponse($models);
    }

    private function createOcakavanaDodavkaApiModel(OcakavanaDodavka $ocakavanaDodavka)
    {
        $model = new OcakavanaDodavkaApiModel();

        $model->id = $ocakavanaDodavka->getId();
        $model->datum = $ocakavanaDodavka->getDatum();
        $model->platne = $ocakavanaDodavka->getPlatne();
        $model->zdroj = $ocakavanaDodavka->getZdroj();
        $model->p_kwh = $ocakavanaDodavka->getPlanKwh();
        $model->p_kw = $ocakavanaDodavka->getPlanKw();
        $model->s_kwh = $ocakavanaDodavka->getSkutKwh();
        $model->s_kw = $ocakavanaDodavka->getSkutKw();
        $model->px_kwh = $ocakavanaDodavka->getPlanxKwh();
        $model->px_kw = $ocakavanaDodavka->getPlanxKw();
        $model->r_kwh = $ocakavanaDodavka->getRokKwh();
        $model->r_kw = $ocakavanaDodavka->getRokKw();

        return $model;
    }

    /**
     * @Route("kont/vct/normativne-mnozstvo/{id}", name="vct_normativne-mnozstvo_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getNormativneMnozstvoAction($id)
    {
        // vychod | juh | zapad
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\NormativneMnozstvo');

        $vychod = $repository->getVychod($id);
        $zapad = $repository->getZapad($id);

        // varianty
        /*$sql = "EXECUTE [Kontroling].[SCT_NormativneMnozstvo_Kotolne_SP] @ID = ?";
        $sqlParams = array($id);
        $conn = $this->getDoctrine()->getConnection();
        $polozky = $conn->execProcedureWithResultSet($sql, $sqlParams);*/


        $data = [
            'vychod' => array(),
            'zapad' => array(),
            'varianty' => array()
        ];

        foreach ($vychod as $tpv) {
            $data['vychod'][] = $this->createNormativneMnozstvoApiModel($tpv);
        }

        foreach ($zapad as $tpz) {
            $data['zapad'][] = $this->createNormativneMnozstvoApiModel($tpz);
        }

        /*foreach ($polozky[0] as $variant) {
            $data['varianty'][] = $this->createNormativneMnozstvoKotolneApiModel($variant);
        }*/

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

    /**
     * @Route("kont/vct/nakup-tepla/{id}", name="vct_nakup-tepla_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getNakupTeplaAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\NakupTepla')
            ->getOcakavaneNakladyNaNakupTepla($id);

        $models = [];
        foreach ($polozky as $item) {
            $models[] = $this->createNakupTeplaApiModel($item);
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
     * @Route("kont/vct/skutocne-naklady/{id}", name="vct_skutocne-naklady_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getSkutocneNakladyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\SkutocneNaklady')
            ->getSkutocneNaklady($id);

        $models = [];
        foreach ($polozky as $item) {
            $models[] = $this->createSkutocneNakladyApiModel($item);
        }

        return $this->createApiResponse($models);
    }

    private function createSkutocneNakladyApiModel(SkutocneNaklady $skutocneNaklady)
    {
        $model = new SkutocneNakladyApiModel();

        $model->id = $skutocneNaklady->getId();
        $model->datum = $skutocneNaklady->getDatum();
        $model->ucet = $skutocneNaklady->getUcet();
        $model->zadane = $skutocneNaklady->getZadane();

        return $model;
    }

    /**
     * @Route("kont/vct/ocakavane-naklady/{id}", name="vct_ocakavane-naklady_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getOcakavaneNakladyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\OcakavaneNaklady')
            ->getOcakavaneNaklady($id);

        $models = [];
        foreach ($polozky as $item) {
            $models[] = $this->createOcakavaneNakladyApiModel($item);
        }

        return $this->createApiResponse($models);
    }

    private function createOcakavaneNakladyApiModel(OcakavaneNaklady $ocakavaneNaklady)
    {
        $model = new OcakavaneNakladyApiModel();

        $model->id = $ocakavaneNaklady->getId();
        $model->datum = $ocakavaneNaklady->getDatum();
        $model->ucet = $ocakavaneNaklady->getUcet();
        $model->hodnota = $ocakavaneNaklady->getHodnota();

        return $model;
    }

    /**
     * @Route("kont/vct/ocakavane-naklady-varianty/{id}", name="vct_ocakavane-naklady-varianty_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getOcakavaneNakladyVariantyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\VCT\OcakavaneNakladyVarianty')
            ->getOcakavaneNakladyVarianty($id);

        $models = [];
        foreach ($polozky as $item) {
            $models[] = $this->createOcakavaneNakladyVariantyApiModel($item);
        }

        return $this->createApiResponse($models);
    }

    private function createOcakavaneNakladyVariantyApiModel(OcakavaneNakladyVarianty $varianty)
    {
        $model = new OcakavaneNakladyVariantyApiModel();

        $model->id = $varianty->getId();
        $model->datum = $varianty->getDatum();
        $model->variant = $varianty->getVariant();
        $model->ucet = $varianty->getUcet();
        $model->hodnota = $varianty->getHodnota();

        return $model;
    }

    /**
     * @Route("kont/vct/vypocet-buniek/{id}", name="vct_vypocet-buniek_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_VCT_MNG')")
     */
    public function getVypocetBuniekAction($id)
    {
        $sql_vb = "EXECUTE [Kontroling].[VCT_VypocetBuniek_SP] @ID = ?";
        $sql_var = "EXECUTE [Kontroling].[VCT_VypocetVariantov_SP] @ID = ?";
        $sql_zp = "EXECUTE [Kontroling].[VCT_ZemnyPlyn_SP] @ID = ?";
        //$sql_vc = "EXECUTE [Kontroling].[SCT_VyvojCeny] @ID = ?";

        $sqlParams = array($id);
        $conn = $this->getDoctrine()->getConnection();

        $polozky_vb = $conn->execProcedureWithResultSet($sql_vb, $sqlParams);
        $polozky_var = $conn->execProcedureWithResultSet($sql_var, $sqlParams);
        $polozky_zp = $conn->execProcedureWithResultSet($sql_zp, $sqlParams);
        ///$polozky_vc = $conn->execProcedureWithResultSet($sql_vc, $sqlParams);

        $bunky = [];
        foreach ($polozky_vb[0] as $bunka) {
            $bunky[] = $this->createVypocetBuniekApiModel($bunka);
        }

        $varianty = [];
        $varianty['FDT'] = [];
        $varianty['FNM'] = [];
        $varianty['FON'] = [];
        foreach ($polozky_var[0] as $item) {
            // forecast dodavka tepla
            $varianty['FDT'][] = $this->createForecastDodavkyTeplaVariantApiModel($item);
        }

        foreach ($polozky_var[1] as $item) {
            // forecast normativneho mnozstva
            $varianty['FNM'][] = $this->createForecastNormativnehoMnozstvaVariantApiModel($item);
        }

        foreach ($polozky_var[2] as $item) {
            // forecast ocakavanych nakladov
            $varianty['FON'][] = $this->createForecastOcakavanychNakladovVariantApiModel($item);
        }

        $plyn['spotreba']['skutocnost'] = [];
        foreach ($polozky_zp[0] as $item) {
            $plyn['spotreba']['skutocnost'][] = $this->createZemnyPlynApiModel($item);
        }

        $plyn['spotreba']['plan'] = [];
        foreach ($polozky_zp[1] as $item) {
            $plyn['spotreba']['plan'][] = $this->createZemnyPlynApiModel($item);
        }

        $plyn['cena']['skutocnost'] = [];
        foreach ($polozky_zp[2] as $item) {
            $plyn['cena']['skutocnost'][] = $this->createPriemernaCenaZemnehoPlynuApiModel($item);
        }

        $plyn['cena']['ocakavana'] = [];
        foreach ($polozky_zp[3] as $item) {
            $plyn['cena']['ocakavana'][] = $this->createPriemernaCenaZemnehoPlynuApiModel($item);
        }

        $plyn['spotreba']['varianty'] = [];
        foreach ($polozky_zp[4] as $item) {
            $plyn['spotreba']['varianty'][] = $this->createZemnyPlynVariantyApiModel($item);
        }

        $graf = [];
        /*foreach ($polozky_vc[0] as $cena) {
            $graf[] = $cena;
        }*/

        return $this->createApiResponse([
            'bunky' => $bunky,
            'varianty' => $varianty,
            'plyn' => $plyn
        ]);
    }

    private function createVypocetBuniekApiModel($riadok)
    {
        $model = new VypocetBuniekApiModel();

        $model->id = $riadok['ID'];
        $model->hodnota = $riadok['Hodnota'];

        return $model;
    }

    private function createForecastDodavkyTeplaVariantApiModel($item)
    {
        $model = new ForecastDodavkyTeplaVariantApiModel();

        $model->id = $item['ID'];
        $model->vychod_percento = $item['Vychod_Percento'];
        $model->zapad_percento = $item['Zapad_Percento'];
        $model->vychod_kwh = $item['Vychod_kWh'];
        $model->vychod_kw = $item['Vychod_kW'];
        $model->zapad_kwh = $item['Zapad_kWh'];
        $model->zapad_kw = $item['Zapad_kW'];
        $model->spolu_kwh = $item['Spolu_kWh'];
        $model->spolu_kw = $item['Spolu_kW'];

        return $model;
    }

    private function createForecastNormativnehoMnozstvaVariantApiModel($item)
    {
        $model = new ForecastNormativnehoMnozstvaVariantApiModel();

        $model->id = $item['ID'];
        $model->vychod_percento = $item['Vychod_Percento'];
        $model->zapad_percento = $item['Zapad_Percento'];
        $model->vychod_forecast = $item['Vychod_Forecast'];
        $model->vychod_vystup = $item['Vychod_Vystup'];
        $model->vychod_normativne = $item['Vychod_Normativne'];
        $model->zapad_forecast = $item['Zapad_Forecast'];
        $model->zapad_vystup = $item['Zapad_Vystup'];
        $model->zapad_normativne = $item['Zapad_Normativne'];

        return $model;
    }

    private function createForecastOcakavanychNakladovVariantApiModel($item)
    {
        $model = new ForecastOcakavanychNakladovVariantApiModel();

        $model->id = $item['ID'];
        $model->vychod_percento = $item['Vychod_Percento'];
        $model->zapad_percento = $item['Zapad_Percento'];
        $model->zp = $item['ZP'];
        $model->ntvz = $item['NTVZ'];
        $model->vnct = $item['VNCT'];
        $model->dmt = $item['DMT'];
        $model->vzct = $item['VZCT'];
        $model->ntfz = $item['NTFZ'];
        $model->fnpzct = $item['FNPZCT'];
        $model->fzct = $item['FZCT'];

        return $model;
    }

    private function createZemnyPlynApiModel($item)
    {
        $model = new ZemnyPlynApiModel();

        $model->zdroj = $item['Zdroj'];
        $model->mesiac = $item['Mesiac'];
        $model->mwh = $item['MWh'];
        $model->celkove = $item['Celkove'];
        $model->cena = $item['Cena'];

        return $model;
    }

    private function createZemnyPlynVariantyApiModel($item)
    {
        $model = new ZemnyPlynVariantyApiModel();

        $model->id = $item['ID'];
        $model->vychod_percento = $item['Vychod_Percento'];
        $model->zapad_percento = $item['Zapad_Percento'];
        $model->vychod_mwh_kr = $item['Vychod_MWh_KR'];
        $model->vychod_mwh_cr = $item['Vychod_MWh_CR'];
        $model->vychod_naklady_kr = $item['Vychod_Naklady_KR'];
        $model->vychod_naklady_cr = $item['Vychod_Naklady_CR'];
        $model->vychod_cena_kr = $item['Vychod_Cena_KR'];
        $model->vychod_cena_cr = $item['Vychod_Cena_CR'];
        $model->zapad_mwh_kr = $item['Zapad_MWh_KR'];
        $model->zapad_mwh_cr = $item['Zapad_MWh_CR'];
        $model->zapad_naklady_kr = $item['Zapad_Naklady_KR'];
        $model->zapad_naklady_cr = $item['Zapad_Naklady_CR'];
        $model->zapad_cena_kr = $item['Zapad_Cena_KR'];
        $model->zapad_cena_cr = $item['Zapad_Cena_CR'];

        return $model;
    }

    private function createPriemernaCenaZemnehoPlynuApiModel($item)
    {
        $model = new PriemernaCenaZemnehoPlynuApiModel();

        $model->zdroj = $item['Zdroj'];
        $model->mwh = $item['MWh'];
        $model->celkove = $item['Celkove'];
        $model->cena = $item['Cena'];

        return $model;
    }

    /**
     * @Route("kont/vct/hlavny/{id}", name="vct_hlavny_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateHlavnyAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $hlavny = $em->getRepository('AppBundle:Kontroling\VCT\Hlavny')
            ->find($id);

        $userId = $this->getUser()->getId();
        $upravil = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        // zmena stavu na "dokončený"
        //   -> uložiť vypočítané hodnoty natrvalo do tabuľky VCT_FinalnyVypocet
        //   -> uložiť vypočítané zložky ceny tepla do tabuľky VCT_CenaTepla (variabil, fix, celkova)
        /*if (array_key_exists("stav", $data)) {
            if ($data['stav'] == 1) {
                $sql_fv = "EXECUTE [Kontroling].[VCT_FinalnyVypocet_Ulozit] @ID = ?";
                $sql_ct = "EXECUTE [Kontroling].[VCT_CenaTepla_Ulozit] @ID = ?";

                $sqlParams = array($id);
                $conn = $this->getDoctrine()->getConnection();

                $conn->execProcedureWithResultSet($sql_fv, $sqlParams);
                $conn->execProcedureWithResultSet($sql_ct, $sqlParams);
            }
        }*/

        $hlavny->setUpravil($upravil);
        $hlavny->setZmenene(new \DateTime());

        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\Hlavny',
            HlavnyType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/variant/{id}", name="vct_variant_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateVariantAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\Variant',
            VariantType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/pristup/{id}", name="vct_pristup_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_ADMIN')")
     */
    public function updatePristupAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $this->updateDatabase(
            $id,
            'AppBundle:App\Grant',
            GrantType::class,
            $request
        );

        $pristup = $em->getRepository('AppBundle:App\Grant')
            ->find($id);

        return $this->createApiResponse($this->createGrantApiModel($pristup), 200);
    }

    /**
     * @Route("kont/vct/normativne-mnozstvo/{id}", name="vct_normativne-mnozstvo_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateNormativneMnozstvoAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\NormativneMnozstvo',
            NormativneMnozstvoType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/nakup-tepla/{id}", name="vct_nakup-tepla_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateNakupTeplaAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\NakupTepla',
            NakupTeplaType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/skutocne-naklady/{id}", name="vct_skutocne-naklady_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateSkutocneNakladyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\SkutocneNaklady',
            SkutocneNakladyType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/ocakavane-naklady/{id}", name="vct_ocakavane-naklady_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateOcakavaneNakladyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\OcakavaneNaklady',
            OcakavaneNakladyType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/ocakavane-naklady-varianty/{id}", name="vct_ocakavane-naklady-varianty_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function updateOcakavaneNakladyVariantyAction($id, Request $request)
    {
        return $this->updateDatabase(
            $id,
            'AppBundle:Kontroling\VCT\OcakavaneNakladyVarianty',
            OcakavaneNakladyVariantyType::class,
            $request
        );
    }

    /**
     * @Route("kont/vct/variant/{id}", name="vct_variant_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_VCT_KONT')")
     */
    public function deleteVariantAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Kontroling\VCT\Variant');

        $repository->deleteVariant($id);

        $metadata = $em->getClassMetadata('AppBundle:Kontroling\VCT\Variant');

        $this->logDeleteActivity($metadata, $id);

        return $this->createApiResponse(null, 204);
    }

    /**
     * @Route("kont/vct/pristup/{id}", name="vct_pristup_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_VCT_ADMIN')")
     */
    public function deletePristupAction($id, Request $request)
    {
        return $this->deleteFromDatabase(
            $id,
            'AppBundle:App\Grant',
            $request
        );
    }
}
