<?php

namespace AppBundle\Controller;

use AppBundle\Api\Meranie\ANM\AnalyzyApiModel;
use AppBundle\Entity\Meranie\ANM\Analyzy;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class AnalyzyNotifikacieMeraniController extends BaseController
{
    public function indexAction()
    {
        return $this->render('smo/analyzy-notifikacie-merani/index.html.twig');
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
        $model->kat = $analyzy->getKat();

        return $model;
    }
}