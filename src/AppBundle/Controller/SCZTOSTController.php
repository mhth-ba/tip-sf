<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\SCZT\VykonApiModel;
use AppBundle\Entity\Dispecing\SCZT\VychodVykon;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SCZTOSTController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/sczt-ost/index.html.twig');
    }

    /**
     * @Route("disp/scztost/vychod", name="sczt_ost_vychod_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getVychodAction(Request $request)
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

        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        $vlastne_vykon = $repository->getOSTVlastneVykon($dateTo, $dateFrom);
        $cudzie_vykon = $repository->getOSTCudzieVykon($dateTo, $dateFrom);
        $vlastne_prenos = $repository->getOSTVlastnePrenos($dateTo, $dateFrom);
        $cudzie_prenos = $repository->getOSTCudziePrenos($dateTo, $dateFrom);

        $data = [
            'pocasie_skutocnost' => array(),
            'vlastne_vykon' => array(),
            'cudzie_vykon' => array(),
            'vlastne_prenos' => array(),
            'cudzie_prenos' => array()
        ];

        foreach ($teplota as $pocasie) {
            $data['pocasie_skutocnost'][] = $this->createVykonApiModel($pocasie);
        }

        foreach ($vlastne_vykon as $vv) {
            $data['vlastne_vykon'][] = $this->createVykonApiModel($vv);
        }

        foreach ($cudzie_vykon as $cv) {
            $data['cudzie_vykon'][] = $this->createVykonApiModel($cv);
        }

        foreach ($vlastne_prenos as $vp) {
            $data['vlastne_prenos'][] = $this->createVykonApiModel($vp);
        }

        foreach ($cudzie_prenos as $cp) {
            $data['cudzie_prenos'][] = $this->createVykonApiModel($cp);
        }

        return $this->createApiResponse($data);
    }

    /**
     * @Route("disp/scztost/zapad", name="sczt_ost_zapad_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getZapadAction(Request $request)
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

        $teplota = $repository->getTeplota($dateTo, $dateFrom);
        $vlastne_vykon = $repository->getOSTVlastneVykon($dateTo, $dateFrom);
        $cudzie_vykon = $repository->getOSTCudzieVykon($dateTo, $dateFrom);
        $vlastne_prenos = $repository->getOSTVlastnePrenos($dateTo, $dateFrom);
        $cudzie_prenos = $repository->getOSTCudziePrenos($dateTo, $dateFrom);

        $data = [
            'pocasie_skutocnost' => array(),
            'vlastne_vykon' => array(),
            'cudzie_vykon' => array(),
            'vlastne_prenos' => array(),
            'cudzie_prenos' => array()
        ];

        foreach ($teplota as $pocasie) {
            $data['pocasie_skutocnost'][] = $this->createVykonApiModel($pocasie);
        }

        foreach ($vlastne_vykon as $vv) {
            $data['vlastne_vykon'][] = $this->createVykonApiModel($vv);
        }

        foreach ($cudzie_vykon as $cv) {
            $data['cudzie_vykon'][] = $this->createVykonApiModel($cv);
        }

        foreach ($vlastne_prenos as $vp) {
            $data['vlastne_prenos'][] = $this->createVykonApiModel($vp);
        }

        foreach ($cudzie_prenos as $cp) {
            $data['cudzie_prenos'][] = $this->createVykonApiModel($cp);
        }

        return $this->createApiResponse($data);
    }

    private function createVykonApiModel($vychodVykon)
    {
        $model = new VykonApiModel();

        $model->datum = $vychodVykon->getDatum() * 1000;
        $model->hodnota = $vychodVykon->getHodnota();

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