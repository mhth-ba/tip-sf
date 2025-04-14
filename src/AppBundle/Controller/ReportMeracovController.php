<?php

namespace AppBundle\Controller;

use AppBundle\Api\Meranie\RM\HlavnyApiModel;
use AppBundle\Api\Meranie\RM\ReportApiModel;
use AppBundle\Entity\Meranie\RM\Hlavny;
use AppBundle\Entity\Meranie\RM\Report;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class ReportMeracovController extends BaseController
{
    public function indexAction()
    {
        return $this->render('smo/report-meracov/index.html.twig');
    }

    /**
     * @Route("smo/rm/zoznam", name="rm_report_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Meranie\RM\Hlavny')
            ->getZoznam();

        $models = [];
        foreach ($zoznam as $hlavny) {
            $models[] = $this->createHlavnyApiModel($hlavny);
        }

        return $this->createApiResponse($models);
    }

    private function createHlavnyApiModel(Hlavny $hlavny)
    {
        $model = new HlavnyApiModel();

        $model->id = $hlavny->getId();
        $model->datum = $hlavny->getDatum()->getTimestamp();

        return $model;
    }

    /**
     * @Route("smo/rm/report/{id}", name="rm_report_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getReportAction($id)
    {
        $report = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Meranie\RM\Report')
            ->getReport($id);

        $models = [];
        foreach ($report as $polozka) {
            $models[] = $this->createReportApiModel($polozka);
        }

        return $this->createApiResponse($models);
    }

    private function createReportApiModel(Report $report)
    {
        $model = new ReportApiModel();

        $model->kategoria = $report->getKategoria();
        $model->pocet = $report->getPocet();

        return $model;
    }
}
