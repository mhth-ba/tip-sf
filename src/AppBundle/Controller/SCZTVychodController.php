<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\SCZT\VykonApiModel;
use AppBundle\Api\Dispecing\SCZT\Zdroje1hApiModel;
use AppBundle\Api\Dispecing\SCZT\ZdrojeApiModel;
use AppBundle\Entity\Dispecing\SCZT\VychodVykon;
use AppBundle\Entity\Dispecing\SCZT\VychodZdroje;
use AppBundle\Entity\Dispecing\SCZT\VychodZdroje1h;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SCZTVychodController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/sczt-vychod/index.html.twig');
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
        $termis = $repository->getTermis($dateTo, $dateFrom);
        $termis_ost = $repository->getTermisOST($dateTo, $dateFrom);
        $termis_pocasie = $repository->getTermisPocasie($dateTo, $dateFrom);
        $zdroje = $repository->getZdroje($dateTo, $dateFrom);
        $ost = $repository->getOST($dateTo, $dateFrom);
        $komunikacia = $repository->getPocetKomunikujucich($dateTo, $dateFrom);
        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        //$extremy_vykon = $repository->getExtremesVykon($dateTo, $dateFrom);
        //$extremy_teplota = $repository->getExtremesTeplota($dateTo, $dateFrom);
        $extremy_komunikacia = $repository->getExtremesKomunikacia($dateTo, $dateFrom);

        $plan_models = [];
        $termis_models = [];
        $termis_ost_models = [];
        $termis_pocasie_models = [];
        $zdroje_models = [];
        $ost_models = [];
        $komunikacia_models = [];
        $teplota_models = [];

        foreach ($plan as $plan_riadok) {
            $plan_models[] = $this->createVykonApiModel($plan_riadok);
        }

        foreach ($termis as $termis_riadok) {
            $termis_models[] = $this->createVykonApiModel($termis_riadok);
        }

        foreach ($termis_ost as $termis_ost_riadok) {
            $termis_ost_models[] = $this->createVykonApiModel($termis_ost_riadok);
        }

        foreach ($termis_pocasie as $termis_pocasie_riadok) {
            $termis_pocasie_models[] = $this->createVykonApiModel($termis_pocasie_riadok);
        }

        foreach ($zdroje as $zdroje_riadok) {
            $zdroje_models[] = $this->createVykonApiModel($zdroje_riadok);
        }

        foreach ($ost as $ost_riadok) {
            $ost_models[] = $this->createVykonApiModel($ost_riadok);
        }

        foreach ($komunikacia as $komunikacia_riadok) {
            $komunikacia_models[] = $this->createVykonApiModel($komunikacia_riadok);
        }

        foreach ($teplota as $teplota_riadok) {
            $teplota_models[] = $this->createVykonApiModel($teplota_riadok);
        }

        return $this->createApiResponse([
            'plan' => $plan_models,
            'termis' => $termis_models,
            'termis_ost' => $termis_ost_models,
            'termis_pocasie' => $termis_pocasie_models,
            'zdroje' => $zdroje_models,
            'ost' => $ost_models,
            'komunikacia' => $komunikacia_models,
            'teplota' => $teplota_models,
            //'extremy_vykon' => $extremy_vykon[0],
            //'extremy_teplota' => $extremy_teplota[0],
            'extremy_komunikacia' => $extremy_komunikacia[0]
        ]);
    }

    private function createVykonApiModel(VychodVykon $vychodVykon)
    {
        $model = new VykonApiModel();

        $model->datum = $vychodVykon->getDatum() * 1000;
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
            $ppc_models[] = $this->createZdrojeApiModel($ppc_riadok);
        }

        foreach ($tpv as $tpv_riadok) {
            $tpv_models[] = $this->createZdrojeApiModel($tpv_riadok);
        }
        foreach ($slovnaft as $slovnaft_riadok) {
            $slovnaft_models[] = $this->createZdrojeApiModel($slovnaft_riadok);
        }
        foreach ($vhj as $vhj_riadok) {
            $vhj_models[] = $this->createZdrojeApiModel($vhj_riadok);
        }
        foreach ($teplota as $teplota_riadok) {
            $teplota_models[] = $this->createZdrojeApiModel($teplota_riadok);
        }

        $zdroje_1h = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\VychodZdroje1h');
        
        $ppc_1h = $zdroje_1h->getPPC($dateTo, $dateFrom);
        $tpv_1h = $zdroje_1h->getTpV($dateTo, $dateFrom);
        $slovnaft_1h = $zdroje_1h->getSlovnaft($dateTo, $dateFrom);
        $vhj_1h = $zdroje_1h->getVhJ($dateTo, $dateFrom);
        $teplota_1h = $zdroje_1h->getTeplota($dateTo, $dateFrom);
        
        $ppc_1h_models = [];
        $tpv_1h_models = [];
        $slovnaft_1h_models = [];
        $vhj_1h_models = [];
        $teplota_1h_models = [];

        foreach ($ppc_1h as $ppc_1h_riadok) {
            $ppc_1h_models[] = $this->createZdroje1hApiModel($ppc_1h_riadok);
        }

        foreach ($tpv_1h as $tpv_1h_riadok) {
            $tpv_1h_models[] = $this->createZdroje1hApiModel($tpv_1h_riadok);
        }

        foreach ($slovnaft_1h as $slovnaft_1h_riadok) {
            $slovnaft_1h_models[] = $this->createZdroje1hApiModel($slovnaft_1h_riadok);
        }

        foreach ($vhj_1h as $vhj_1h_riadok) {
            $vhj_1h_models[] = $this->createZdroje1hApiModel($vhj_1h_riadok);
        }

        foreach ($teplota_1h as $teplota_1h_riadok) {
            $teplota_1h_models[] = $this->createZdroje1hApiModel($teplota_1h_riadok);
        }

        return $this->createApiResponse([
            'ppc' => $ppc_models,
            'tpv' => $tpv_models,
            'slovnaft' => $slovnaft_models,
            'vhj' => $vhj_models,
            'teplota' => $teplota_models,
            'max' => $maxVykon[0],
            
            'ppc_1h' => $ppc_1h_models,
            'tpv_1h' => $tpv_1h_models,
            'slovnaft_1h' => $slovnaft_1h_models,
            'vhj_1h' => $vhj_1h_models,
            'teplota_1h' => $teplota_1h_models
        ]);
    }

    private function createZdrojeApiModel(VychodZdroje $vychodZdroje)
    {
        $model = new ZdrojeApiModel();

        $model->datum = $vychodZdroje->getDatum() * 1000;
        $model->hodnota = $vychodZdroje->getHodnota();

        return $model;
    }

    private function createZdroje1hApiModel(VychodZdroje1h $vychodZdroje1h)
    {
        $model = new Zdroje1hApiModel();
        
        $model->hodina = $vychodZdroje1h->getHodina() * 1000;
        $model->priemer = $vychodZdroje1h->getPriemer();
        
        return $model;
    }

    /**
     * @Route("disp/scztv/zariadenia", name="sczt_vychod_zariadenia_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getVychodZariadeniaAction()
    {
        $zariadenia = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\VychodZariadenia')
            ->find(1);

        return $this->createApiResponse($zariadenia);
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
            $dateFrom = new \DateTime("today");
//            $dateFrom = new \DateTime();
//            $dateFrom->sub(new \DateInterval('P1D')); // minus 1 den
            $dateTo = new \DateTime();
            $dateTo->add(new \DateInterval('PT18H')); // plus 18 hodín
        }

        return array(
            'from' => $dateFrom,
            'to' => $dateTo
        );
    }
}