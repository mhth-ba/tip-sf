<?php

namespace AppBundle\Controller;

class HlaseniaPMController extends BaseController
{
    public function showAction()
    {
        return $this->render('hlasenia-pm/show.html.twig');
    }
}
