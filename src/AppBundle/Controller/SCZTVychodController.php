<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\SCZT\VychodVykonApiModel;
use AppBundle\Entity\Dispecing\SCZT\VychodVykon;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SCZTVychodController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/sczt-vychod/index.twig');
    }

    /**
     * @Route("disp/scztv/vykon", name="sczt_vychod_vykon_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getVychodVykon()
    {
        $dateTo = new \DateTime();
        $dateTo->add(new \DateInterval('PT3H'));
        $dateFrom = new \DateTime();
        $dateFrom->sub(new \DateInterval('P4D'));

        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\VychodVykon');

        $plan = $repository->getPlan($dateTo, $dateFrom);
        $zdroje = $repository->getZdroje($dateTo, $dateFrom);
        $ost = $repository->getOST($dateTo, $dateFrom);
        $komunikacia = $repository->getPocetKomunikujucich($dateTo, $dateFrom);
        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        $maxVykon = $repository->getMaxVykon($dateTo, $dateFrom);

        $plan_models = [];
        $zdroje_models = [];
        $ost_models = [];
        $komunikacia_models = [];
        $teplota_models = [];

        foreach ($plan as $plan_riadok) {
            $plan_models[] = $this->createVychodVykonApiModel($plan_riadok);
        }

        foreach ($zdroje as $zdroje_riadok) {
            $zdroje_models[] = $this->createVychodVykonApiModel($zdroje_riadok);
        }

        foreach ($ost as $ost_riadok) {
            $ost_models[] = $this->createVychodVykonApiModel($ost_riadok);
        }

        foreach ($komunikacia as $komunikacia_riadok) {
            $komunikacia_models[] = $this->createVychodVykonApiModel($komunikacia_riadok);
        }

        foreach ($teplota as $teplota_riadok) {
            $teplota_models[] = $this->createVychodVykonApiModel($teplota_riadok);
        }

        return $this->createApiResponse([
            'plan' => $plan_models,
            'zdroje' => $zdroje_models,
            'ost' => $ost_models,
            'komunikacia' => $komunikacia_models,
            'teplota' => $teplota_models,
            'max' => $maxVykon[0]
        ]);
    }

    private function createVychodVykonApiModel(VychodVykon $vychodVykon)
    {
        $model = new VychodVykonApiModel();

        $datum = $vychodVykon->getDatum();

        $model->datum = ($datum->getTimestamp() + $datum->getOffset()) * 1000;
        $model->hodnota = $vychodVykon->getHodnota();

        return $model;
    }
}