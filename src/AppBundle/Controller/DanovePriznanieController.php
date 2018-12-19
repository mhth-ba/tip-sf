<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Uctovnictvo\DP\Hlavny;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class DanovePriznanieController extends BaseController
{
    public function indexAction()
    {
        $roles = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Role')
            ->findRolesDP();

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_DP_UCT')) {
            return $this->render('access-denied.html.twig', [
                'roles' => $roles
            ]);
        }

        return $this->render('uct/danove-priznanie/index.html.twig');
    }

    /**
     * @Route("uct/dp/hlavny", name="dp_hlavny_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getZoznamAction()
    {
        $zoznam = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->getZoznam();

        return $this->createApiResponse($zoznam);
    }

    /**
     * @Route("uct/dp/hlavny/{id}", name="dp_hlavny_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getHlavnyAction(Hlavny $hlavny)
    {
        $hlavny = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Hlavny')
            ->find($hlavny);

        return $this->createApiResponse($hlavny);
    }

    /**
     * @Route("uct/dp/znaky-dane", name="dp_znaky-dane_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getZnakyDaneAction()
    {
        $em = $this->getDoctrine()->getManager();

        $vstup = $em->getRepository('AppBundle:Uctovnictvo\DP\ZnakDaneVstup')
            ->findAllSorted();

        $vystup = $em->getRepository('AppBundle:Uctovnictvo\DP\ZnakDaneVystup')
            ->findAllSorted();

        return $this->createApiResponse([
            'vstup' => $vstup,
            'vystup' => $vystup
        ]);
    }

    /**
     * @Route("uct/dp/vstup/{id}", name="dp_vstup_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getVstupAction($id)
    {
        $vstup = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Vstup')
            ->findByHlavny($id);

        return $this->createApiResponse($vstup);
    }

    /**
     * @Route("uct/dp/vystup/{id}", name="dp_vystup_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getVystupAction($id)
    {
        $vstup = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Vystup')
            ->findByHlavny($id);

        return $this->createApiResponse($vstup);
    }

    /**
     * @Route("uct/dp/predbezne-hlasenie/{id}", name="dp_predbezne-hlasenie_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getPredbezneHlasenieAction($id)
    {
        $ph = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\PredbezneHlasenie')
            ->findByHlavny($id);

        return $this->createApiResponse($ph);
    }

    /**
     * @Route("uct/dp/danove-doklady/{id}", name="dp_danove-doklady_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getDanoveDoklady($id)
    {
        $dd = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\DanoveDoklady')
            ->findByHlavny($id);

        return $this->createApiResponse($dd);
    }
}