<?php

namespace AppBundle\Controller;

class MiestnePrevadzkovePredpisyVhJController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesVCT();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_MPP_VHJ')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('prev/miestne-prevadzkove-predpisy-vhj/index.html.twig', [
            'name' => null
        ]);
    }
}
