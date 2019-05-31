<?php

namespace AppBundle\Controller;

use AppBundle\Api\Meranie\ANM\AnalyzyApiModel;
use AppBundle\Api\Meranie\ANM\VyluceneApiModel;
use AppBundle\Entity\Meranie\ANM\Analyzy;
use AppBundle\Entity\Meranie\ANM\Vylucene;
use AppBundle\Entity\Meranie\ANM\Vylucene_T;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class AnalyzyNotifikacieMeraniController extends BaseController
{
    public function indexAction()
    {
        return $this->render('smo/analyzy-notifikacie-merani/index.html.twig');
    }

    /**
     * @Route("smo/anm/opravnenia", name="anm_opravnenia", options={"expose"=true})
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
     * @Route("smo/anm/analyzy", name="anm_analyzy_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getAnalyzyAction()
    {
        $analyzy = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Meranie\ANM\Analyzy')
            ->findAll();

        $data = [
            'analyzy' => array()
        ];

        foreach ($analyzy as $a) {
            $data['analyzy'][] = $this->createAnalyzyApiModel($a);
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("smo/anm/vylucene", name="anm_vylucene_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_ANM')")
     */
    public function getVyluceneAction()
    {
        $vylucene = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Meranie\ANM\Vylucene')
            ->findAllOrderByKategoria();

        $data = [
            'vylucene' => array()
        ];

        foreach ($vylucene as $v) {
            $data['vylucene'][] = $this->createVyluceneApiModel($v);
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("smo/anm/prehlad", name="anm_prehlad_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_ANM')")
     */
    public function getPrehladAction()
    {
        $em = $this->getDoctrine()->getManager();

        $kategorie = $em->getRepository('AppBundle:Meranie\ANM\PrehladKategoria')
            ->findAll();
        $poznamky = $em->getRepository('AppBundle:Meranie\ANM\PrehladPoznamka')
            ->findAll();

        $data = [
            'kategorie' => array(),
            'poznamky' => array()
        ];

        foreach ($kategorie as $k) {
            $data['kategorie'][] = $k;
        }

        foreach ($poznamky as $p) {
            $data['poznamky'][] = $p;
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("smo/anm/vylucene", name="anm_vylucene_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_ANM')")
     */
    public function createVyluceneAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $datum = new \DateTime($data['datum']);

        $vylucene = new Vylucene_T();

        $vylucene->setVytvoril($user);
        $vylucene->setMp($data['mp']);
        $vylucene->setKategoria($data['kategoria']);
        $vylucene->setOdlozene($datum);
        $vylucene->setPoznamka($data['poznamka']);

        $em->persist($vylucene);
        $em->flush();

        $id = $vylucene->getId();
        $this->logCreateActivity($id, 'AppBundle:Meranie\ANM\Vylucene');

        $vylucene = $em->getRepository('AppBundle:Meranie\ANM\Vylucene')
            ->find($id);

        $response = $this->createVyluceneApiModel($vylucene);

        return $this->createApiResponse($response);
    }

    /**
     * @Route("smo/anm/vylucene/{id}", name="anm_vylucene_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_ANM')")
     */
    public function deleteVyluceneAction($id, Request $request)
    {
        return $this->deleteFromDatabase(
            $id,
            'AppBundle:Meranie\ANM\Vylucene_T',
            $request
        );
    }

    private function createAnalyzyApiModel(Analyzy $analyzy)
    {
        $model = new AnalyzyApiModel();

        $model->id = $analyzy->getId();
        $model->logTime = $analyzy->getLogTime();
        $model->readTime = $analyzy->getReadTime();
        $model->modul = $analyzy->getModul();
        $model->device = $analyzy->getDevice();
        $model->balance = $analyzy->getBalance();
        $model->unit = $analyzy->getUnit();
        $model->energy = $analyzy->getEnergy();
        $model->volume = $analyzy->getVolume();
        $model->power = $analyzy->getPower();
        $model->flow = $analyzy->getFlow();
        $model->output = $analyzy->getOutput();
        $model->return = $analyzy->getReturn();
        $model->delta = $analyzy->getDelta();
        $model->om = $analyzy->getOm();
        $model->ost = $analyzy->getOst();
        $model->adresa = $analyzy->getAdresa();
        $model->odberatel = $analyzy->getOdberatel();
        $model->tarifa = $analyzy->getTarifa();
        $model->vc = $analyzy->getVc();
        $model->mj = $analyzy->getMj();
        $model->kategoria = $analyzy->getKategoria();

        return $model;
    }

    private function createVyluceneApiModel(Vylucene $vylucene)
    {
        $model = new VyluceneApiModel();

        $model->id = $vylucene->getId();
        $model->datum = $vylucene->getDatum();
        $model->vytvoril = $vylucene->getVytvoril();
        $model->om = $vylucene->getOm();
        $model->ost = $vylucene->getOst();
        $model->mp = $vylucene->getMp();
        $model->adresa = $vylucene->getAdresa();
        $model->odberatel = $vylucene->getOdberatel();
        $model->vc = $vylucene->getVc();
        $model->tarifa = $vylucene->getTarifa();
        $model->mj = $vylucene->getMj();
        $model->kategoria = $vylucene->getKategoria();
        $model->odlozene = $vylucene->getOdlozene();
        $model->poznamka = $vylucene->getPoznamka();

        return $model;
    }
}