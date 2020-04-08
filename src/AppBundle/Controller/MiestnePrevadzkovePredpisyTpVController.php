<?php

namespace AppBundle\Controller;

class MiestnePrevadzkovePredpisyTpVController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesVCT();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_MPP_TPV')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('prev/miestne-prevadzkove-predpisy-tpv/index.html.twig', [
            'name' => null
        ]);
    }
}
