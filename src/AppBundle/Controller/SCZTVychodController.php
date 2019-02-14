<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\SCZT\VykonApiModel;
use AppBundle\Api\Dispecing\SCZT\Zdroje1hApiModel;
use AppBundle\Api\Dispecing\SCZT\ZdrojeApiModel;
use AppBundle\Entity\Dispecing\SCZT\VychodDiferencnyTlak;
use AppBundle\Entity\Dispecing\SCZT\VychodPrietok;
use AppBundle\Entity\Dispecing\SCZT\VychodVykon;
use AppBundle\Entity\Dispecing\SCZT\VychodVystupnaTeplota;
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

        $data = [];

        $em = $this->getDoctrine()->getManager();

        // 10 minutovy interval
        $zdroje_vykon_repository = $em->getRepository('AppBundle:Dispecing\SCZT\VychodZdroje');
        $zdroje_teplota_repository = $em->getRepository('AppBundle:Dispecing\SCZT\VychodVystupnaTeplota');
        $zdroje_diferencny_repository = $em->getRepository('AppBundle:Dispecing\SCZT\VychodDiferencnyTlak');
        $zdroje_prietok_repository = $em->getRepository('AppBundle:Dispecing\SCZT\VychodPrietok');

        $ppc_vykon_10min = $zdroje_vykon_repository->getPPC($dateTo, $dateFrom);
        $tpv_vykon_10min = $zdroje_vykon_repository->getTpV($dateTo, $dateFrom);
        $slovnaft_vykon_10min = $zdroje_vykon_repository->getSlovnaft($dateTo, $dateFrom);
        $vhj_vykon_10min = $zdroje_vykon_repository->getVhJ($dateTo, $dateFrom);
        $vonkajsia_teplota_10min = $zdroje_vykon_repository->getTeplota($dateTo, $dateFrom);
        $maxVykon = $zdroje_vykon_repository->getMaxVykon($dateTo, $dateFrom);
        
        $ppc_teplota_skutocnost_10min = $zdroje_teplota_repository->getPPCSkutocnost($dateTo, $dateFrom);
        $ppc_teplota_predikcia_10min = $zdroje_teplota_repository->getPPCPredikcia($dateTo, $dateFrom);
        $tpv_teplota_skutocnost_10min = $zdroje_teplota_repository->getTpVSkutocnost($dateTo, $dateFrom);
        $tpv_teplota_predikcia_10min = $zdroje_teplota_repository->getTpVPredikcia($dateTo, $dateFrom);
        $slovnaft_teplota_skutocnost_10min = $zdroje_teplota_repository->getSlovnaftSkutocnost($dateTo, $dateFrom);
        $slovnaft_teplota_predikcia_10min = $zdroje_teplota_repository->getSlovnaftPredikcia($dateTo, $dateFrom);
        $vhj_teplota_skutocnost_10min = $zdroje_teplota_repository->getVhJSkutocnost($dateTo, $dateFrom);
        $vhj_teplota_predikcia_10min = $zdroje_teplota_repository->getVhJPredikcia($dateTo, $dateFrom);

        $ppc_diferencny_skutocnost_10min = $zdroje_diferencny_repository->getPPCSkutocnost($dateTo, $dateFrom);
        $ppc_diferencny_predikcia_10min = $zdroje_diferencny_repository->getPPCPredikcia($dateTo, $dateFrom);
        $tpv_diferencny_skutocnost_10min = $zdroje_diferencny_repository->getTpVSkutocnost($dateTo, $dateFrom);
        $tpv_diferencny_predikcia_10min = $zdroje_diferencny_repository->getTpVPredikcia($dateTo, $dateFrom);
        $slovnaft_diferencny_skutocnost_10min = $zdroje_diferencny_repository->getSlovnaftSkutocnost($dateTo, $dateFrom);
        $slovnaft_diferencny_predikcia_10min = $zdroje_diferencny_repository->getSlovnaftPredikcia($dateTo, $dateFrom);
        $vhj_diferencny_skutocnost_10min = $zdroje_diferencny_repository->getVhJSkutocnost($dateTo, $dateFrom);
        $vhj_diferencny_predikcia_10min = $zdroje_diferencny_repository->getVhJPredikcia($dateTo, $dateFrom);

        $ppc_prietok_skutocnost_10min = $zdroje_prietok_repository->getPPCSkutocnost($dateTo, $dateFrom);
        $ppc_prietok_predikcia_10min = $zdroje_prietok_repository->getPPCPredikcia($dateTo, $dateFrom);
        $tpv_prietok_skutocnost_10min = $zdroje_prietok_repository->getTpVSkutocnost($dateTo, $dateFrom);
        $tpv_prietok_predikcia_10min = $zdroje_prietok_repository->getTpVPredikcia($dateTo, $dateFrom);
        $slovnaft_prietok_skutocnost_10min = $zdroje_prietok_repository->getSlovnaftSkutocnost($dateTo, $dateFrom);
        $slovnaft_prietok_predikcia_10min = $zdroje_prietok_repository->getSlovnaftPredikcia($dateTo, $dateFrom);
        $vhj_prietok_skutocnost_10min = $zdroje_prietok_repository->getVhJSkutocnost($dateTo, $dateFrom);
        $vhj_prietok_predikcia_10min = $zdroje_prietok_repository->getVhJPredikcia($dateTo, $dateFrom);

        foreach ($ppc_vykon_10min as $item) {
            $data['ppc_vykon_10min'][] = $this->createZdrojeApiModel($item);
        }
        foreach ($tpv_vykon_10min as $item) {
            $data['tpv_vykon_10min'][] = $this->createZdrojeApiModel($item);
        }
        foreach ($slovnaft_vykon_10min as $item) {
            $data['slovnaft_vykon_10min'][] = $this->createZdrojeApiModel($item);
        }
        foreach ($vhj_vykon_10min as $item) {
            $data['vhj_vykon_10min'][] = $this->createZdrojeApiModel($item);
        }
        foreach ($vonkajsia_teplota_10min as $item) {
            $data['vonkajsia_teplota_10min'][] = $this->createZdrojeApiModel($item);
        }

        // tv = teplota vystupna (zo zdroja), dt = diferencny tlak (na zdroji), p = prietok (zo zdroja)
        // sk = skutocnost, pr = predikcia termis
        // 10min = 10 minutovy interval, 1h = 1 hodinovy interval
        foreach ($ppc_teplota_skutocnost_10min as $item) {
            $data['ppc_tv_sk_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($ppc_teplota_predikcia_10min as $item) {
            $data['ppc_tv_pr_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($tpv_teplota_skutocnost_10min as $item) {
            $data['tpv_tv_sk_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($tpv_teplota_predikcia_10min as $item) {
            $data['tpv_tv_pr_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($slovnaft_teplota_skutocnost_10min as $item) {
            $data['slovnaft_tv_sk_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($slovnaft_teplota_predikcia_10min as $item) {
            $data['slovnaft_tv_pr_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($vhj_teplota_skutocnost_10min as $item) {
            $data['vhj_tv_sk_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }
        foreach ($vhj_teplota_predikcia_10min as $item) {
            $data['vhj_tv_pr_10min'][] = $this->createZdrojeTeplotaApiModel($item);
        }

        foreach ($ppc_diferencny_skutocnost_10min as $item) {
            $data['ppc_dt_sk_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($ppc_diferencny_predikcia_10min as $item) {
            $data['ppc_dt_pr_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($tpv_diferencny_skutocnost_10min as $item) {
            $data['tpv_dt_sk_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($tpv_diferencny_predikcia_10min as $item) {
            $data['tpv_dt_pr_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($slovnaft_diferencny_skutocnost_10min as $item) {
            $data['slovnaft_dt_sk_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($slovnaft_diferencny_predikcia_10min as $item) {
            $data['slovnaft_dt_pr_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($vhj_diferencny_skutocnost_10min as $item) {
            $data['vhj_dt_sk_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }
        foreach ($vhj_diferencny_predikcia_10min as $item) {
            $data['vhj_dt_pr_10min'][] = $this->createZdrojeDiferencnyApiModel($item);
        }

        foreach ($ppc_prietok_skutocnost_10min as $item) {
            $data['ppc_p_sk_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($ppc_prietok_predikcia_10min as $item) {
            $data['ppc_p_pr_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($tpv_prietok_skutocnost_10min as $item) {
            $data['tpv_p_sk_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($tpv_prietok_predikcia_10min as $item) {
            $data['tpv_p_pr_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($slovnaft_prietok_skutocnost_10min as $item) {
            $data['slovnaft_p_sk_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($slovnaft_prietok_predikcia_10min as $item) {
            $data['slovnaft_p_pr_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($vhj_prietok_skutocnost_10min as $item) {
            $data['vhj_p_sk_10min'][] = $this->createZdrojePrietokApiModel($item);
        }
        foreach ($vhj_prietok_predikcia_10min as $item) {
            $data['vhj_p_pr_10min'][] = $this->createZdrojePrietokApiModel($item);
        }

        // 1 hodinovy interval
        $zdroje_1h = $em->getRepository('AppBundle:Dispecing\SCZT\VychodZdroje1h');
        
        $ppc_1h = $zdroje_1h->getPPC($dateTo, $dateFrom);
        $tpv_1h = $zdroje_1h->getTpV($dateTo, $dateFrom);
        $slovnaft_1h = $zdroje_1h->getSlovnaft($dateTo, $dateFrom);
        $vhj_1h = $zdroje_1h->getVhJ($dateTo, $dateFrom);
        $teplota_1h = $zdroje_1h->getTeplota($dateTo, $dateFrom);
        
        foreach ($ppc_1h as $item) {
            $data['ppc_vykon_1h'][] = $this->createZdroje1hApiModel($item);
        }
        foreach ($tpv_1h as $item) {
            $data['tpv_vykon_1h'][] = $this->createZdroje1hApiModel($item);
        }
        foreach ($slovnaft_1h as $item) {
            $data['slovnaft_vykon_1h'][] = $this->createZdroje1hApiModel($item);
        }
        foreach ($vhj_1h as $item) {
            $data['vhj_vykon_1h'][] = $this->createZdroje1hApiModel($item);
        }
        foreach ($teplota_1h as $item) {
            $data['vonkajsia_teplota_1h'][] = $this->createZdroje1hApiModel($item);
        }

        $data['max'][] = $maxVykon[0];

        return $this->createApiResponse($data);

        /*return $this->createApiResponse([
            'tpv_10min' => $tpv_10min_models,
            'slovnaft_10min' => $slovnaft_10min_models,
            'vhj_10min' => $vhj_10min_models,
            'teplota_10min' => $teplota_10min_models,
            'max' => $maxVykon[0],

            // tv = teplota vystupna
            // sk = skutocnost, pr = predikcia termis
            'ppc_tv_sk_10min' => $ppc_teplota_skutocnost_10min_models,

            'ppc_1h' => $ppc_1h_models,
            'tpv_1h' => $tpv_1h_models,
            'slovnaft_1h' => $slovnaft_1h_models,
            'vhj_1h' => $vhj_1h_models,
            'teplota_1h' => $teplota_1h_models
        ]);*/
    }

    private function createZdrojeApiModel(VychodZdroje $vychodZdroje)
    {
        $model = new ZdrojeApiModel();

        $model->datum = $vychodZdroje->getDatum() * 1000;
        $model->hodnota = $vychodZdroje->getHodnota();

        return $model;
    }

    private function createZdrojeTeplotaApiModel(VychodVystupnaTeplota $vychodVystupnaTeplota)
    {
        $model = new ZdrojeApiModel();

        $model->datum = $vychodVystupnaTeplota->getDatum() * 1000;
        $model->hodnota = $vychodVystupnaTeplota->getHodnota();

        return $model;
    }

    private function createZdrojeDiferencnyApiModel(VychodDiferencnyTlak $vychodDiferencnyTlak)
    {
        $model = new ZdrojeApiModel();
        
        $model->datum = $vychodDiferencnyTlak->getDatum() * 1000;
        $model->hodnota = $vychodDiferencnyTlak->getHodnota();
        
        return $model;
    }

    private function createZdrojePrietokApiModel(VychodPrietok $vychodPrietok)
    {
        $model = new ZdrojeApiModel();
        
        $model->datum = $vychodPrietok->getDatum() * 1000;
        $model->hodnota = $vychodPrietok->getHodnota();
        
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