<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\SCZT\VychodVykonApiModel;
use AppBundle\Api\Dispecing\SCZT\VychodZdrojeApiModel;
use AppBundle\Entity\Dispecing\SCZT\VychodVykon;
use AppBundle\Entity\Dispecing\SCZT\VychodZdroje;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SCZTVychodController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/sczt-vychod/index.twig');
    }

    /**
     * @Route("disp/scztv/vykon", name="sczt_vychod_vykon_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getVychodVykonAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $obdobie = $this->getObdobie($data);

        $dateFrom = $obdobie['from'];
        $dateTo = $obdobie['to'];

        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\VychodVykon');

        $plan = $repository->getPlan($dateTo, $dateFrom);
        $zdroje = $repository->getZdroje($dateTo, $dateFrom);
        $ost = $repository->getOST($dateTo, $dateFrom);
        $komunikacia = $repository->getPocetKomunikujucich($dateTo, $dateFrom);
        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        $extremy_vykon = $repository->getExtremesVykon($dateTo, $dateFrom);
        $extremy_teplota = $repository->getExtremesTeplota($dateTo, $dateFrom);
        $extremy_komunikacia = $repository->getExtremesKomunikacia($dateTo, $dateFrom);

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
            'extremy_vykon' => $extremy_vykon[0],
            'extremy_teplota' => $extremy_teplota[0],
            'extremy_komunikacia' => $extremy_komunikacia[0]
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

    /**
     * @Route("disp/scztv/zdroje", name="sczt_vychod_zdroje_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getVychodZdrojeAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $obdobie = $this->getObdobie($data);

        $dateFrom = $obdobie['from'];
        $dateTo = $obdobie['to'];

        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\VychodZdroje');

        $ppc = $repository->getPPC($dateTo, $dateFrom);
        $tpv = $repository->getTpV($dateTo, $dateFrom);
        $slovnaft = $repository->getSlovnaft($dateTo, $dateFrom);
        $vhj = $repository->getVhJ($dateTo, $dateFrom);
        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        $maxVykon = $repository->getMaxVykon($dateTo, $dateFrom);

        $ppc_models = [];
        $tpv_models = [];
        $slovnaft_models = [];
        $vhj_models = [];
        $teplota_models = [];

        foreach ($ppc as $ppc_riadok) {
            $ppc_models[] = $this->createVychodZdrojeApiModel($ppc_riadok);
        }

        foreach ($tpv as $tpv_riadok) {
            $tpv_models[] = $this->createVychodZdrojeApiModel($tpv_riadok);
        }

        foreach ($slovnaft as $slovnaft_riadok) {
            $slovnaft_models[] = $this->createVychodZdrojeApiModel($slovnaft_riadok);
        }

        foreach ($vhj as $vhj_riadok) {
            $vhj_models[] = $this->createVychodZdrojeApiModel($vhj_riadok);
        }

        foreach ($teplota as $teplota_riadok) {
            $teplota_models[] = $this->createVychodZdrojeApiModel($teplota_riadok);
        }

        return $this->createApiResponse([
            'ppc' => $ppc_models,
            'tpv' => $tpv_models,
            'slovnaft' => $slovnaft_models,
            'vhj' => $vhj_models,
            'teplota' => $teplota_models,
            'max' => $maxVykon[0]
        ]);
    }

    private function createVychodZdrojeApiModel(VychodZdroje $vychodZdroje)
    {
        $model = new VychodZdrojeApiModel();

        $datum = $vychodZdroje->getDatum();

        $model->datum = ($datum->getTimestamp() + $datum->getOffset()) * 1000;
        $model->hodnota = $vychodZdroje->getHodnota();

        return $model;
    }

    private function getObdobie($data)
    {
        $kalendar = $data['kalendar'];
        $start = null;
        $end = null;

        if ($kalendar === true) {
            $start = $data['start'] . " 00:00:00";
            $end =  $data['end'] . " 23:59:59";

            $dateFrom = \DateTime::createFromFormat('Y-m-d H:i:s', $start);
            $dateTo = \DateTime::createFromFormat('Y-m-d H:i:s', $end);
        } else {
            $dateFrom = new \DateTime();
            $dateFrom->sub(new \DateInterval('P4D')); // minus 4 dni
            $dateTo = new \DateTime();
            $dateTo->add(new \DateInterval('PT3H')); // plus 3 hodiny
        }

        return array(
            'from' => $dateFrom,
            'to' => $dateTo
        );
    }
}