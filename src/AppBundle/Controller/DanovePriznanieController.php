<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Uctovnictvo\DP\Hlavny;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

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
     * @Route("uct/dp/sumarizacia/{id}", name="dp_sumarizacia_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function getSumarizaciaAction($id)
    {
        $sumarizacia = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Uctovnictvo\DP\Sumarizacia')
            ->findByHlavny($id);

        return $this->createApiResponse($sumarizacia);
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

    /**
     * @Route("uct/dp/xml/{id}", name="dp_download", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_DP_UCT')")
     */
    public function downloadXml($id)
    {
        $em = $this->getDoctrine()->getManager();
        $sum = $em->getRepository('AppBundle:Uctovnictvo\DP\Sumarizacia');

        $r3 = $this->checkArray($sum->findR3_4($id), 'z');
        $r4 = $this->checkArray($sum->findR3_4($id), 'd');
        $r5 = $this->checkArray($sum->findR5_6($id), 'z');
        $r6 = $this->checkArray($sum->findR5_6($id), 'd');
        $r7 = $this->checkArray($sum->findR7_8($id), 'z');
        $r8 = $this->checkArray($sum->findR7_8($id), 'd');
        $r9 = $this->checkArray($sum->findR9_10($id), 'z');
        $r10 = $this->checkArray($sum->findR9_10($id), 'd');
        $r15 = $this->checkArray($sum->findR15($id), 'z');
        $r20 = $this->checkArray($sum->findR20($id), 'd');
        $r21 = $this->checkArray($sum->findR21($id), 'd');
        $r22 = $this->checkArray($sum->findR22($id), 'd');
        $r23 = $this->checkArray($sum->findR23($id), 'd');
        $r26 = $this->checkArray($sum->findR26_27($id), 'z');
        $r27 = $this->checkArray($sum->findR26_27($id), 'd');
        $r28 = $this->checkArray($sum->findR28($id), 'd');

        $filename =  'dph.xml';

        $fileContent = "<?xml version=\"1.0\" encoding=\"utf-8\"?>
<dokument>
<hlavicka>
<identifikacneCislo>
<kodStatu>SK</kodStatu>
<cislo></cislo>
</identifikacneCislo>
<dic></dic>
<danovyUrad></danovyUrad>
<nevzniklaPov>0</nevzniklaPov>
<typDP>
<rdp>1</rdp>
<odp>0</odp>
<ddp>0</ddp>
<datumZisteniaDdp></datumZisteniaDdp>
</typDP>
<osoba>
<platitel>1</platitel>
<registrovana>0</registrovana>
<inaPovinna>0</inaPovinna>
<zdanitelna>0</zdanitelna>
<zastupca>0</zastupca>
</osoba>
<zdanObd>
<mesiac></mesiac>
<stvrtrok></stvrtrok>
<rok></rok>
</zdanObd>
<meno>
<riadok></riadok>
<riadok></riadok>
<riadok></riadok>
</meno>
<adresa>
<ulica></ulica>
<cislo></cislo>
<psc></psc>
<obec></obec>
<tel>
<predcislie></predcislie>
<cislo></cislo>
</tel>
<fax>
<predcislie></predcislie>
<cislo></cislo>
</fax>
</adresa>
<opravnenaOsoba>
<menoPriezvisko></menoPriezvisko>
<tel>
<predcislie></predcislie>
<cislo></cislo>
</tel>
</opravnenaOsoba>
<datumVyhlasenia>14.01.2019</datumVyhlasenia>
</hlavicka>
<telo>
<r01></r01>
<r02></r02>
<r03>$r3</r03>
<r04>$r4</r04>
<r05>$r5</r05>
<r06>$r6</r06>
<r07>$r7</r07>
<r08>$r8</r08>
<r09>$r9</r09>
<r10>$r10</r10>
<r11></r11>
<r12></r12>
<r13></r13>
<r14></r14>
<r15>$r15</r15>
<r16></r16>
<r17></r17>
<r18></r18>
<r19></r19>
<r20>$r20</r20>
<r21>$r21</r21>
<r22>$r22</r22>
<r23>$r23</r23>
<r24></r24>
<r25></r25>
<r26>$r26</r26>
<r27>$r27</r27>
<r28>$r28</r28>
<r29></r29>
<r30></r30>
<r31></r31>
<splneniePodmienok>0</splneniePodmienok>
<r32></r32>
<r33></r33>
<r34></r34>
<r35></r35>
<r36></r36>
<r37></r37>
<r38></r38>
</telo>
</dokument>";

        $response = new Response($fileContent);

        $disposition = $response->headers->makeDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );

        $response->headers->set('Content-Disposition', $disposition);

        return $response;
    }

    private function checkArray($array, $stlpec)
    {
        switch ($stlpec) {
            case 'z': $stlpec = 'zaklad'; break;
            case 'd': $stlpec = 'dan'; break;
        }

        return array_key_exists(0, $array) ? $array[0][$stlpec] : null;
    }
}