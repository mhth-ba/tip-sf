<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\VCO\PrehladGrafApiModel;
use AppBundle\Api\Dispecing\VCO\VychladenieApiModel;
use AppBundle\Api\Dispecing\VCO\VychladenieOSTApiModel;
use AppBundle\Api\Dispecing\VCO\VychladenieOSTGrafApiModel;
use AppBundle\Entity\Dispecing\VCO\PrehladA;
use AppBundle\Entity\Dispecing\VCO\Vychladenie;
use Doctrine\DBAL\DriverManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class VychladenieOSTController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/vychladenie-ost/index.html.twig');
    }

    /**
     * @Route("disp/vco/zoznam", name="vco_zoznam_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamObdobiAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\VCO\Vychladenie')
            ->getZoznamObdobi();

        $obdobia = [];

        $roky = [];
        foreach ($zoznam as $polozka) {
            $roky[] = $polozka['rok'];
        }

        $unique_roky = array_unique($roky);
        foreach ($unique_roky as $rok) {

            foreach ($zoznam as $obdobie) {
                if ($obdobie['rok'] === $rok) {
                    $obdobia[$rok][] = $obdobie;
                }
            }
        }

        return $this->createApiResponse($obdobia);
    }

    /**
     * @Route("disp/vco/vychladenie", name="vco_vychladenie-prehlad_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getVychladeniePrehladAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $rok = $data['rok'];
        $mesiac = $data['mesiac'];

        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\VCO\Vychladenie')
            ->getVychladenieByRokMesiac($rok, $mesiac);

        $prehlad = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\VCO\PrehladA')
            ->getPrehlad($rok, $mesiac);

        $models = [];
        foreach ($polozky as $vychladenie) {
            $models[] = $this->createVychladenieApiModel($vychladenie);
        }

        $graf = [];
        foreach ($prehlad as $polozka) {
            $graf[] = $this->createPrehladGrafApiModel($polozka);
        }

        return $this->createApiResponse([
            'tabulka' => $models,
            'prehlad' => $prehlad,
            'graf' => $graf
        ]);
    }

    private function createVychladenieApiModel(Vychladenie $vychladenie)
    {
        $model = new VychladenieApiModel();
        $model->om = $vychladenie->getOm();
        $model->ost = $vychladenie->getOst();
        $model->mp = $vychladenie->getMp();
        $model->odberatel = $vychladenie->getOdberatel();
        $model->adresa = $vychladenie->getAdresa();
        $model->tarifa = $vychladenie->getTarifa();
        $model->prvyDen = $vychladenie->getPrvyDen()->getTimestamp();
        $model->poslednyDen = $vychladenie->getPoslednyDen()->getTimestamp();
        $model->spotrebaEnergie = $vychladenie->getSpotrebaEnergie();
        $model->spotrebaObjemu = $vychladenie->getSpotrebaObjemu();
        $model->vychladenie = $vychladenie->getVychladenie();
        $model->vplyv = $vychladenie->getVplyv();

        return $model;
    }

    private function createPrehladGrafApiModel(PrehladA $prehladA)
    {
        $model = new PrehladGrafApiModel();
        $model->name = $prehladA->getHranica();
        $model->y = $prehladA->getPocetOm();

        return $model;
    }

    /**
     * @Route("disp/vco/ost", name="vco_vychladenie-ost_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getVychladenieOSTAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $ost = $data['ost'];
        $odberatel = $data['odberatel'];
        $adresa = $data['adresa'];

        $polozky_tabulka = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\VCO\Vychladenie')
            ->getVychladenieByOST($ost);

        $sql = "EXECUTE [Dispecing].[OST_Vychladenie_Detail] @OST = ?";
        $sqlParams = array($ost);
        $conn = $this->getDoctrine()->getConnection();
        $polozky_graf = $conn->execProcedureWithResultSet($sql, $sqlParams);

        $tabulka = [];
        foreach ($polozky_tabulka as $vychladenie) {
            $tabulka[] = $this->createVychladenieOSTApiModel($vychladenie);
        }

        $graf = [];
        foreach ($polozky_graf as $ix => $resultSet) {
            foreach ($resultSet as $vychladenie) {
                $graf[$ix][] = $this->createVychladenieOSTGrafApiModel($vychladenie);
            }
        }

        return $this->createApiResponse([
            'ost' => $ost,
            'odberatel' => $odberatel,
            'adresa' => $adresa,
            'tabulka' => $tabulka,
            'graf' => $graf
        ]);
    }

    private function createVychladenieOSTApiModel(Vychladenie $vychladenie)
    {
        $model = new VychladenieOSTApiModel();
        $model->om = $vychladenie->getOm();
        $model->mp = $vychladenie->getMp();
        $model->tarifa = $vychladenie->getTarifa();
        $model->rok = $vychladenie->getRok();
        $model->mesiac = $vychladenie->getMesiac();
        $model->prvyDen = $vychladenie->getPrvyDen()->getTimestamp();
        $model->poslednyDen = $vychladenie->getPoslednyDen()->getTimestamp();
        $model->teplo = $vychladenie->getSpotrebaEnergie();
        $model->prietok = $vychladenie->getSpotrebaObjemu();
        $model->vychladenie = $vychladenie->getVychladenie();
        $model->vplyv = $vychladenie->getVplyv();

        return $model;
    }

    private function createVychladenieOSTGrafApiModel($vychladenie)
    {
        $model = new VychladenieOSTGrafApiModel();

        $datum = new \DateTime($vychladenie['DateIndex']);
        $datum = $datum->getTimestamp();

        $model->datum = $datum;

        $model->teplotaAvg = $vychladenie['Priemerna'];
        $model->teplotaMin = $vychladenie['Najnizsia'];
        $model->teplotaMax = $vychladenie['Najvyssia'];

        $model->om = $vychladenie['OM'];
        $model->mp = $vychladenie['MP'];
        $model->meranie = $vychladenie['Tarifa'];
        $model->energia = $vychladenie['ConsumeEnergy'];
        $model->objem = $vychladenie['ConsumeVolume'];
        $model->vychladenie = $vychladenie['Cooling'];
        $model->vplyv = $vychladenie['Impact'];

        return $model;
    }
}
