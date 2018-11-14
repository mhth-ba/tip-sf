<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\SCZT\VykonApiModel;
use AppBundle\Api\Dispecing\SCZT\Zdroje1hApiModel;
use AppBundle\Api\Dispecing\SCZT\ZdrojeApiModel;
use AppBundle\Entity\Dispecing\SCZT\ZapadVykon;
use AppBundle\Entity\Dispecing\SCZT\ZapadZdroje;
use AppBundle\Entity\Dispecing\SCZT\ZapadZdroje1h;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SCZTZapadController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/sczt-zapad/index.html.twig');
    }

    /**
     * @Route("disp/scztz/vykon", name="sczt_zapad_vykon_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getZapadVykonAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $obdobie = $this->getObdobie($data);

        $dateFrom = $obdobie['from'];
        $dateTo = $obdobie['to'];

        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\ZapadVykon');

        $plan = $repository->getPlan($dateTo, $dateFrom);
        $termis = $repository->getTermis($dateTo, $dateFrom);
        //$termis_ost = $repository->getTermisOST($dateTo, $dateFrom);
        //$termis_pocasie = $repository->getTermisPocasie($dateTo, $dateFrom);
        $zdroje = $repository->getZdroje($dateTo, $dateFrom);
        //$ost = $repository->getOST($dateTo, $dateFrom);
        //$komunikacia = $repository->getPocetKomunikujucich($dateTo, $dateFrom);
        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        //$extremy_vykon = $repository->getExtremesVykon($dateTo, $dateFrom);
        //$extremy_teplota = $repository->getExtremesTeplota($dateTo, $dateFrom);
        //$extremy_komunikacia = $repository->getExtremesKomunikacia($dateTo, $dateFrom);

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

        /*foreach ($termis_ost as $termis_ost_riadok) {
            $termis_ost_models[] = $this->createVykonApiModel($termis_ost_riadok);
        }*/

        /*foreach ($termis_pocasie as $termis_pocasie_riadok) {
            $termis_pocasie_models[] = $this->createVykonApiModel($termis_pocasie_riadok);
        }*/

        foreach ($zdroje as $zdroje_riadok) {
            $zdroje_models[] = $this->createVykonApiModel($zdroje_riadok);
        }

        /*foreach ($ost as $ost_riadok) {
            $ost_models[] = $this->createVykonApiModel($ost_riadok);
        }*/

        /*foreach ($komunikacia as $komunikacia_riadok) {
            $komunikacia_models[] = $this->createVykonApiModel($komunikacia_riadok);
        }*/

        foreach ($teplota as $teplota_riadok) {
            $teplota_models[] = $this->createVykonApiModel($teplota_riadok);
        }

        return $this->createApiResponse([
            'plan' => $plan_models,
            'termis' => $termis_models,
            //'termis_ost' => $termis_ost_models,
            //'termis_pocasie' => $termis_pocasie_models,
            'zdroje' => $zdroje_models,
            //'ost' => $ost_models,
            //'komunikacia' => $komunikacia_models,
            'teplota' => $teplota_models,
            //'extremy_vykon' => $extremy_vykon[0],
            //'extremy_teplota' => $extremy_teplota[0],
            //'extremy_komunikacia' => $extremy_komunikacia[0]
        ]);
    }

    private function createVykonApiModel(ZapadVykon $zapadVykon)
    {
        $model = new VykonApiModel();

        $model->datum = $zapadVykon->getDatum() * 1000;
        $model->hodnota = $zapadVykon->getHodnota();

        return $model;
    }

    /**
     * @Route("disp/scztz/zdroje", name="sczt_zapad_zdroje_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getZapaddZdrojeAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $obdobie = $this->getObdobie($data);

        $dateFrom = $obdobie['from'];
        $dateTo = $obdobie['to'];

        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\ZapadZdroje');

        $tpz = $repository->getTpZ($dateTo, $dateFrom);
        $cw = $repository->getCW($dateTo, $dateFrom);
        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        
        $hk1 = $repository->getHK1($dateTo, $dateFrom);
        $hk3 = $repository->getHK3($dateTo, $dateFrom);
        $k6 = $repository->getK6($dateTo, $dateFrom);
        $tg1 = $repository->getTG1($dateTo, $dateFrom);

        $tpz_models = [];
        $cw_models = [];
        $teplota_models = [];
        
        $hk1_models = [];
        $hk3_models = [];
        $k6_models = [];
        $tg1_models = [];

        foreach ($tpz as $ppc_riadok) {
            $tpz_models[] = $this->createZdrojeApiModel($ppc_riadok);
        }

        foreach ($cw as $tpv_riadok) {
            $cw_models[] = $this->createZdrojeApiModel($tpv_riadok);
        }

        foreach ($teplota as $teplota_riadok) {
            $teplota_models[] = $this->createZdrojeApiModel($teplota_riadok);
        }

        foreach ($hk1 as $hk1_riadok) {
            $hk1_models[] = $this->createZdrojeApiModel($hk1_riadok);
        }

        foreach ($hk3 as $hk3_riadok) {
            $hk3_models[] = $this->createZdrojeApiModel($hk3_riadok);
        }

        foreach ($k6 as $k6_riadok) {
            $k6_models[] = $this->createZdrojeApiModel($k6_riadok);
        }

        foreach ($tg1 as $tg1_riadok) {
            $tg1_models[] = $this->createZdrojeApiModel($tg1_riadok);
        }

        $zdroje_1h = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\SCZT\ZapadZdroje1h');

        $tpz_1h = $zdroje_1h->getTpZ($dateTo, $dateFrom);
        $cw_1h = $zdroje_1h->getCW($dateTo, $dateFrom);
        $teplota_1h = $zdroje_1h->getTeplota($dateTo, $dateFrom);

        $tpz_1h_models = [];
        $cw_1h_models = [];
        $teplota_1h_models = [];

        foreach ($tpz_1h as $tpz_1h_riadok) {
            $tpz_1h_models[] = $this->createZdroje1hApiModel($tpz_1h_riadok);
        }

        foreach ($cw_1h as $cw_1h_riadok) {
            $cw_1h_models[] = $this->createZdroje1hApiModel($cw_1h_riadok);
        }

        foreach ($teplota_1h as $teplota_1h_riadok) {
            $teplota_1h_models[] = $this->createZdroje1hApiModel($teplota_1h_riadok);
        }

        return $this->createApiResponse([
            'tpz' => $tpz_models,
            'cw' => $cw_models,
            'teplota' => $teplota_models,
            
            'hk1' => $hk1_models,
            'hk3' => $hk3_models,
            'k6' => $k6_models,
            'tg1' => $tg1_models,
            
            'tpz_1h' => $tpz_1h_models,
            'cw_1h' => $cw_1h_models,
            'teplota_1h' => $teplota_1h_models
        ]);
    }

    private function createZdrojeApiModel(ZapadZdroje $zapadZdroje)
    {
        $model = new ZdrojeApiModel();

        $model->datum = $zapadZdroje->getDatum() * 1000;
        $model->hodnota = $zapadZdroje->getHodnota();

        return $model;
    }

    private function createZdroje1hApiModel(ZapadZdroje1h $zapadZdroje1h)
    {
        $model = new Zdroje1hApiModel();
        
        $model->hodina = $zapadZdroje1h->getHodina() * 1000;
        $model->priemer = $zapadZdroje1h->getPriemer();
        
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
            $dateFrom->sub(new \DateInterval('P1D')); // minus 1 den
            $dateTo = new \DateTime();
            $dateTo->add(new \DateInterval('PT18H')); // plus 18 hodín
        }

        return array(
            'from' => $dateFrom,
            'to' => $dateTo
        );
    }
}
