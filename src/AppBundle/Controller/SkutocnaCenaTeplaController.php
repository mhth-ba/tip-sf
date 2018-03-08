<?php

namespace AppBundle\Controller;

use AppBundle\Api\Kontroling\SCT\DodaneTeploApiModel;
use AppBundle\Api\Kontroling\SCT\SkutocnaCenaTeplaApiModel;
use AppBundle\Entity\Kontroling\SCT\CenaTepla;
use AppBundle\Entity\Kontroling\SCT\DodaneTeplo;
use AppBundle\Entity\Kontroling\SCT\Upload;
use AppBundle\Form\Type\CenaTeplaType;
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
            ->getRepository('AppBundle:Kontroling\SCT\CenaTepla')
            ->find($hlavny_id);
        $uploadtype = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\UploadType')
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
     * @Route("kont/sct/cena-tepla", name="sct_cena-tepla_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getZoznamAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\CenaTepla')
            ->getZoznam();

        $models = [];
        foreach ($zoznam as $cenaTepla) {
            $models[] = $this->createCenaTeplaApiModel($cenaTepla);
        }

        return $this->createApiResponse($models);
    }

    /**
     * @Route("kont/sct/cena-tepla/{id}", name="sct_cena-tepla_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_SCT_MNG')")
     */
    public function getCenaTeplaAction(CenaTepla $cenaTepla)
    {
        $apiModel = $this->createCenaTeplaApiModel($cenaTepla);

        return $this->createApiResponse($apiModel);
    }

    private function createCenaTeplaApiModel(CenaTepla $cenaTepla)
    {
        $model = new SkutocnaCenaTeplaApiModel();
        $model->id = $cenaTepla->getId();
        $model->datum = $cenaTepla->getDatum();
        $model->zmenene = $cenaTepla->getZmenene();
        $model->stav = $cenaTepla->getStav();
        $model->nazov = $cenaTepla->getNazov();
        $model->rok = $cenaTepla->getRok();
        $model->vytvoril = $cenaTepla->getVytvoril();
        $model->upravil = $cenaTepla->getUpravil();
        $model->poznamka = $cenaTepla->getPoznamka();

        $upload_dt = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Upload')
            ->getLastUploadedDodaneTeplo($cenaTepla->getId());

        $upload_sn = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\SCT\Upload')
            ->getLastUploadedSkutocneNaklady($cenaTepla->getId());

        $model->upload['dt'] = $upload_dt; // dodane teplo
        $model->upload['sn'] = $upload_sn; // skutocne naklady

        $selfUrl = $this->generateUrl(
            'sct_cena-tepla_get',
            ['id' => $cenaTepla->getId()]
        );
        $dodaneTeploUrl = $this->generateUrl(
            'sct_dodane-teplo_get',
            ['id' => $cenaTepla->getId()]
        );

        $model->addLink('_self', $selfUrl);
        $model->addLink('_dodaneTeplo', $dodaneTeploUrl);

        return $model;
    }

    /**
     * @Route("kont/sct/cena-tepla/{id}", name="sct_cena-tepla_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_SCT_KONT')")
     */
    public function updateCenaTeplaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $cenaTepla = $em->getRepository('AppBundle:Kontroling\SCT\CenaTepla')
            ->find($id);

        if (!$cenaTepla) {
            throw $this->createNotFoundException(sprintf(
                'Cena tepla s id %s sa nenašla',
                $id
            ));
        }

        $userId = $this->getUser()->getId();
        $upravil = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $cenaTepla->setUpravil($upravil);
        $cenaTepla->setZmenene(new \DateTime());

        $form = $this->createForm(CenaTeplaType::class, $cenaTepla);
        $this->processForm($request, $form);

        if (!$form->isValid()) {
            $this->createApiResponse($form->getErrors(), 400);
        }

        $em->persist($cenaTepla);
        $em->flush();

        return $this->createApiResponse($cenaTepla, 200);
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
        //$model->datum = $dodaneTeplo->getDatum();
        //$model->platne = $dodaneTeplo->getPlatne();
        //$model->hlavny = $dodaneTeplo->getHlavny();
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
}