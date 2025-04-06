<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class DenneDispecerskeHlasenieOSTController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/ddh-ost/index.html.twig');
    }

    /**
     * @Route("disp/ddh-ost/hlavicka", name="ddh_ost_hlavicka_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getHlavickaAction(Request $request)
    {

        return $this->createApiResponse([
            'hlavicka' => 'hlavicka',
            'datum' => '01.01.2025',
        ]);
    }
}
