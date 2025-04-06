<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class DenneDispecerskeHlasenieHVController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/ddh-hv/index.html.twig');
    }
}
