<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class ProjektyController extends BaseController
{
    public function indexAction()
    {
        return $this->render('projekty/index.html.twig');
    }

    /**
     * @Route("projekty/projekty", name="projekty_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getProjektyAction()
    {
        $em = $this->getDoctrine()->getManager();

        // PROJEKTY
        $projekty = $em->getRepository('AppBundle:Projekty\Projekty')
            ->findProjekty();
        $terminy = $em->getRepository('AppBundle:Projekty\Terminy')
            ->findTerminy();
        $ciastkove = $em->getRepository('AppBundle:Projekty\Ciastkove')
            ->findCiastkove();
        $zmenove = $em->getRepository('AppBundle:Projekty\Zmenove')
            ->findZmenove();

        // OPERATIVNE ULOHY
        $ulohy = $em->getRepository('AppBundle:Projekty\Ulohy')
            ->findUlohy();

        return $this->createApiResponse([
            'projekty' => $projekty,
            'terminy' => $terminy,
            'ciastkove' => $ciastkove,
            'zmenove' => $zmenove,

            'ulohy' => $ulohy
        ]);
    }
}
