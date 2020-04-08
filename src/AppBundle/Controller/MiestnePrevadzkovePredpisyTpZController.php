<?php

namespace AppBundle\Controller;

class MiestnePrevadzkovePredpisyTpZController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesMPP();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_MPP_TPZ')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('prev/miestne-prevadzkove-predpisy-tpz/index.html.twig', [
            'name' => null
        ]);
    }
}
