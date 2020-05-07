<?php

namespace AppBundle\Controller;

use AppBundle\Api\Efektivnost\DPP\DodavkaApiModel;
use AppBundle\Api\Efektivnost\DPP\ElektrinaApiModel;
use AppBundle\Api\Efektivnost\DPP\HlavnyApiModel;
use AppBundle\Api\Efektivnost\DPP\KonstantyApiModel;
use AppBundle\Api\Efektivnost\DPP\ObjednavkaApiModel;
use AppBundle\Api\Efektivnost\DPP\PrognozaApiModel;
use AppBundle\Api\Efektivnost\DPP\UploadApiModel;
use AppBundle\Api\UserApiModel;
use AppBundle\Entity\App\User;
use AppBundle\Entity\Efektivnost\DPP\Dodavka;
use AppBundle\Entity\Efektivnost\DPP\Elektrina;
use AppBundle\Entity\Efektivnost\DPP\Hlavny;
use AppBundle\Entity\Efektivnost\DPP\Konstanty;
use AppBundle\Entity\Efektivnost\DPP\Objednavka;
use AppBundle\Entity\Efektivnost\DPP\Prognoza;
use AppBundle\Entity\Efektivnost\DPP\Upload;
use AppBundle\Form\Type\Efektivnost\DPP\DodavkaType;
use AppBundle\Form\Type\Efektivnost\DPP\ElektrinaType;
use AppBundle\Form\Type\Efektivnost\DPP\KonstantyType;
use AppBundle\Form\Type\Efektivnost\DPP\ObjednavkaType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class DennyPlanPrevadzkyController extends BaseController
{
    public function indexAction()
    {
        return $this->render('ee/denny-plan-prevadzky/index.html.twig');
    }

    /**
     * @Route("ee/dpp/upload", name="dpp_upload", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DPP')")
     */
    public function uploadFileAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $em = $this->getDoctrine()->getManager();

        $datum = $data['datum'];
        $original = $data['original'];
        $filename = $data['filename'];

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $fs = new Filesystem();
        $dir = $this->get('kernel')->getProjectDir().'/web/uploads';

        $fs->copy(
            $dir.'/efektivnost/'.$filename,
            $dir.'/efektivnost/DPP.xml'
        );

        $process = $em->getRepository('AppBundle:Efektivnost\DPP\Hlavny')
            ->uploadDennyPlanPrevadzky($datum, $userId);

        $hlavnyId = $process[0]->getId(); // ID noveho hlavneho zaznamu

        $hlavny = $em->getRepository('AppBundle:Efektivnost\DPP\Hlavny')
            ->find($hlavnyId);

        $apiModel = $this->createHlavnyApiModel($hlavny);

        /*$hlavny = new Hlavny();
        $hlavny->setDen(new \DateTime($datum));
        $hlavny->setVytvoril($user);
        $em->persist($hlavny);
        $em->flush();

        $hlavny_id = $hlavny->getId();*/

        $upload = new Upload();
        $upload->setHlavny($hlavny);
        $upload->setOriginal($original);
        $upload->setSubor($filename);
        $em->persist($upload);
        $em->flush();

        return $this->createApiResponse([
            'data' => $data,
            'hlavny' => $apiModel
        ]);
    }

    /**
     * @Route("ee/dpp/download/{id}", name="dpp_download", options={"expose"=true})
     * @Method("GET")
     */
    public function downloadFileAction($id)
    {
        $upload = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Efektivnost\DPP\Upload')
            ->find($id);

        $sub = 'efektivnost';
        $file = $upload->getSubor();
        $orig = $upload->getOriginal();

        return $this->downloadFile($sub, $file, $orig, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    /**
     * @Route("ee/dpp/opravnenia", name="dpp_opravnenia", options={"expose"=true})
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
     * @Route("ee/dpp/denny-plan-prevadzky", name="dpp_denny-plan-prevadzky_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamAction()
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Efektivnost\DPP\Hlavny');

        if ($this->get('security.authorization_checker')->isGranted('ROLE_DPP')) {
            $zoznam = $repository->getZoznamEditor();
        } else {
            $zoznam = $repository->getZoznam();
        }

        $models = [];
        foreach ($zoznam as $dennyPlanPrevadzky) {
            $models[] = $this->createHlavnyApiModel($dennyPlanPrevadzky);
        }

        return $this->createApiResponse($models);
    }

    /**
     * @Route("ee/dpp/denny-plan-prevadzky/{id}", name="dpp_denny-plan-prevadzky_get", options={"expose"=true})
     * @Method("GET")
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
        $model->den = $hlavny->getDen();
        //$model->vytvoril = $hlavny->getVytvoril();
        $model->vytvoril = $this->createUserApiModel(
            $hlavny->getVytvoril()
        );

        $upload =  $em->getRepository('AppBundle:Efektivnost\DPP\Upload');

        //$upload_dpp = $upload->getLastUploadedDennyPlanPrevadzky($id);
        $upload_dpp = $this->createUploadApiModel(
            $upload->getLastUploadedDennyPlanPrevadzky($id)
        );

        $model->upload['dpp'] = $upload_dpp;

        return $model;
    }

    private function createUploadApiModel(Upload $upload)
    {
        $model = new UploadApiModel();

        $model->id = $upload->getId();
        $model->datum = $upload->getDatum();
        $model->original = $upload->getOriginal();
        $model->subor = $upload->getSubor();

        return $model;
    }

    private function createUserApiModel(User $user)
    {
        $model = new UserApiModel();

        $model->id = $user->getId();
        $model->fullname = $user->getFullname();
        $model->mail = $user->getMail();
        $model->title = $user->getTitle();

        return $model;
    }

    /**
     * @Route("ee/dpp/konstanty/{id}", name="dpp_konstanty_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getKonstantyAction($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Efektivnost\DPP\Konstanty')
            ->getKonstanty($id);

        $models = [];
        foreach ($polozky as $konstanty) {
            $models[] = $this->createKonstantyApiModel($konstanty);
        }

        return $this->createApiResponse($models);
    }

    private function createKonstantyApiModel(Konstanty $konstanty)
    {
        $model = new KonstantyApiModel();
        $model->id = $konstanty->getId();
        $model->datum = $konstanty->getDatum();
        $model->vykon_max_tpv = $konstanty->getVykonMaxTpv();
        $model->vykon_max_tpz = $konstanty->getVykonMaxTpz();
        $model->krivka_vychod = $konstanty->getKrivkaVychod();
        $model->krivka_zapad = $konstanty->getKrivkaZapad();
        $model->vyhrevnost_zp = $konstanty->getVyhrevnostZp();
        $model->ucinnost_tpv = $konstanty->getUcinnostTpv();
        $model->ucinnost_vhj = $konstanty->getUcinnostVhj();
        $model->ucinnost_tpz = $konstanty->getUcinnostTpz();
        $model->dmm_tpv = $konstanty->getDmmTpv();
        $model->dmm_vhj = $konstanty->getDmmVhj();
        $model->dmm_tpz = $konstanty->getDmmTpz();
        $model->dmm_limit = $konstanty->getDmmLimit();
        $model->ppc_min = $konstanty->getPpcMin();
        $model->ppc_max = $konstanty->getPpcMax();
        $model->slovnaft_min = $konstanty->getSlovnaftMin();
        $model->slovnaft_max = $konstanty->getSlovnaftMax();
        $model->ppc_para = $konstanty->getPpcPara();
        $model->ppc_zmluva = $konstanty->getPpcZmluva();
        $model->ppc_hv = $konstanty->getPpcHv();

        return $model;
    }

    /**
     * @Route("ee/dpp/objednavka/{id}", name="dpp_objednavka_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getObjednavkaAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $polozkyObjednavka = $em
            ->getRepository('AppBundle:Efektivnost\DPP\Objednavka')
            ->getObjednavka($id);

        $models = [];
        foreach ($polozkyObjednavka as $objednavka) {
            $models[] = $this->createObjednavkaApiModel($objednavka);
        }

        return $this->createApiResponse([
            'objednavka' => $models
        ]);
    }

    private function createObjednavkaApiModel(Objednavka $objednavka)
    {
        $model = new ObjednavkaApiModel();
        $model->id = $objednavka->getId();
        $model->zdroj = $objednavka->getZdroj();
        $model->h0 = $objednavka->getH0();
        $model->h1 = $objednavka->getH1();
        $model->h2 = $objednavka->getH2();
        $model->h3 = $objednavka->getH3();
        $model->h4 = $objednavka->getH4();
        $model->h5 = $objednavka->getH5();
        $model->h6 = $objednavka->getH6();
        $model->h7 = $objednavka->getH7();
        $model->h8 = $objednavka->getH8();
        $model->h9 = $objednavka->getH9();
        $model->h10 = $objednavka->getH10();
        $model->h11 = $objednavka->getH11();
        $model->h12 = $objednavka->getH12();
        $model->h13 = $objednavka->getH13();
        $model->h14 = $objednavka->getH14();
        $model->h15 = $objednavka->getH15();
        $model->h16 = $objednavka->getH16();
        $model->h17 = $objednavka->getH17();
        $model->h18 = $objednavka->getH18();
        $model->h19 = $objednavka->getH19();
        $model->h20 = $objednavka->getH20();
        $model->h21 = $objednavka->getH21();
        $model->h22 = $objednavka->getH22();
        $model->h23 = $objednavka->getH23();

        return $model;
    }

    /**
     * @Route("ee/dpp/dodavka/{id}", name="dpp_dodavka_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getDodavkaAction($id)
    {
        $polozkyDodavka = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Efektivnost\DPP\Dodavka')
            ->getDodavka($id);

        $models = [];
        foreach ($polozkyDodavka as $dodavka) {
            $models[] = $this->createDodavkaApiModel($dodavka);
        }

        return $this->createApiResponse([
            'dodavka' => $models
        ]);
    }

    private function createDodavkaApiModel(Dodavka $dodavka)
    {
        $model = new DodavkaApiModel();

        $model->id = $dodavka->getId();
        $model->zdroj = $dodavka->getZdroj();
        $model->h0 = $dodavka->getH0();
        $model->h1 = $dodavka->getH1();
        $model->h2 = $dodavka->getH2();
        $model->h3 = $dodavka->getH3();
        $model->h4 = $dodavka->getH4();
        $model->h5 = $dodavka->getH5();
        $model->h6 = $dodavka->getH6();
        $model->h7 = $dodavka->getH7();
        $model->h8 = $dodavka->getH8();
        $model->h9 = $dodavka->getH9();
        $model->h10 = $dodavka->getH10();
        $model->h11 = $dodavka->getH11();
        $model->h12 = $dodavka->getH12();
        $model->h13 = $dodavka->getH13();
        $model->h14 = $dodavka->getH14();
        $model->h15 = $dodavka->getH15();
        $model->h16 = $dodavka->getH16();
        $model->h17 = $dodavka->getH17();
        $model->h18 = $dodavka->getH18();
        $model->h19 = $dodavka->getH19();
        $model->h20 = $dodavka->getH20();
        $model->h21 = $dodavka->getH21();
        $model->h22 = $dodavka->getH22();
        $model->h23 = $dodavka->getH23();
        $model->spolu = $dodavka->getSpolu();

        return $model;
    }

    /**
     * @Route("ee/dpp/elektrina/{id}", name="dpp_elektrina_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getElektrinaAction($id)
    {
        $polozkyElektrina = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Efektivnost\DPP\Elektrina')
            ->getElektrina($id);

        $models = [];
        foreach ($polozkyElektrina as $elektrina) {
            $models[] = $this->createElektrinaApiModel($elektrina);
        }

        return $this->createApiResponse([
            'elektrina' => $models
        ]);
    }

    private function createElektrinaApiModel(Elektrina $elektrina)
    {
        $model = new ElektrinaApiModel();

        $model->id = $elektrina->getId();
        $model->zdroj = $elektrina->getZdroj();
        $model->h0 = $elektrina->getH0();
        $model->h1 = $elektrina->getH1();
        $model->h2 = $elektrina->getH2();
        $model->h3 = $elektrina->getH3();
        $model->h4 = $elektrina->getH4();
        $model->h5 = $elektrina->getH5();
        $model->h6 = $elektrina->getH6();
        $model->h7 = $elektrina->getH7();
        $model->h8 = $elektrina->getH8();
        $model->h9 = $elektrina->getH9();
        $model->h10 = $elektrina->getH10();
        $model->h11 = $elektrina->getH11();
        $model->h12 = $elektrina->getH12();
        $model->h13 = $elektrina->getH13();
        $model->h14 = $elektrina->getH14();
        $model->h15 = $elektrina->getH15();
        $model->h16 = $elektrina->getH16();
        $model->h17 = $elektrina->getH17();
        $model->h18 = $elektrina->getH18();
        $model->h19 = $elektrina->getH19();
        $model->h20 = $elektrina->getH20();
        $model->h21 = $elektrina->getH21();
        $model->h22 = $elektrina->getH22();
        $model->h23 = $elektrina->getH23();
        $model->spolu = $elektrina->getSpolu();

        return $model;
    }

    /**
     * @Route("ee/dpp/konstanty/{id}", name="dpp_konstanty_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DPP')")
     */
    public function updateKonstantyAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $konstanty = $em->getRepository('AppBundle:Efektivnost\DPP\Konstanty')
            ->find($id);

        if (!$konstanty) {
            throw $this->createNotFoundException(sprintf(
                'Záznam o konštantách s id %s sa nenašiel',
                $id
            ));
        }

        $form = $this->createForm(KonstantyType::class, $konstanty);
        $this->processForm($request, $form);

        if (!$form->isValid()) {
            $this->createApiResponse($form->getErrors(), 400);
        }

        $em->persist($konstanty);
        $em->flush();

        //$metadata = $em->getClassMetadata('AppBundle:Efektivnost\DPP\Konstanty');
        //$this->logUpdateActivity($metadata, $request);

        return $this->createApiResponse($konstanty, 200);
    }

    /**
     * @Route("ee/dpp/objednavka/{id}", name="dpp_objednavka_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DPP')")
     */
    public function updateObjednavkaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $objednavka = $em->getRepository('AppBundle:Efektivnost\DPP\Objednavka')
            ->find($id);

        if (!$objednavka) {
            throw $this->createNotFoundException(sprintf(
                'Záznam o objednávke s id %s sa nenašiel',
                $id
            ));
        }

        $form = $this->createForm(ObjednavkaType::class, $objednavka);
        $this->processForm($request, $form);

        if (!$form->isValid()) {
            $this->createApiResponse($form->getErrors(), 400);
        }

        $em->persist($objednavka);
        $em->flush();

        //$metadata = $em->getClassMetadata('AppBundle:Efektivnost\DPP\Objednavka');
        //$this->logUpdateActivity($metadata, $request);

        return $this->createApiResponse($objednavka, 200);
    }

    /**
     * @Route("ee/dpp/dodavka/{id}", name="dpp_dodavka_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DPP')")
     */
    public function updateDodavkaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $dodavka = $em->getRepository('AppBundle:Efektivnost\DPP\Dodavka')
            ->find($id);

        if (!$dodavka) {
            throw $this->createNotFoundException(sprintf(
                'Záznam o dodávke s id %s sa nenašiel',
                $id
            ));
        }

        $form = $this->createForm(DodavkaType::class, $dodavka);
        $this->processForm($request, $form);

        if (!$form->isValid()) {
            $this->createApiResponse($form->getErrors(), 400);
        }

        $em->persist($dodavka);
        $em->flush();

        //$metadata = $em->getClassMetadata('AppBundle:Efektivnost\DPP\Objednavka');
        //$this->logUpdateActivity($metadata, $request);

        return $this->createApiResponse($dodavka, 200);
    }

    /**
     * @Route("ee/dpp/elektrina/{id}", name="dpp_elektrina_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DPP')")
     */
    public function updateElektrinaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $elektrina = $em->getRepository('AppBundle:Efektivnost\DPP\Elektrina')
            ->find($id);

        if (!$elektrina) {
            throw $this->createNotFoundException(sprintf(
                'Záznam o elektrine s id %s sa nenašiel',
                $id
            ));
        }

        $form = $this->createForm(ElektrinaType::class, $elektrina);
        $this->processForm($request, $form);

        if (!$form->isValid()) {
            $this->createApiResponse($form->getErrors(), 400);
        }

        $em->persist($elektrina);
        $em->flush();

        //$metadata = $em->getClassMetadata('AppBundle:Efektivnost\DPP\Objednavka');
        //$this->logUpdateActivity($metadata, $request);

        return $this->createApiResponse($elektrina, 200);
    }
}