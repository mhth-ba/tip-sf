<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ReportMeracovController extends Controller
{
    public function indexAction()
    {
        return $this->render('smo/report-meracov/index.html.twig');
    }
}
