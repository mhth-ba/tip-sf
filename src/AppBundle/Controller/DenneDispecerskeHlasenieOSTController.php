<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class DenneDispecerskeHlasenieOSTController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/ddh-ost/index.html.twig');
    }

    /**
     * @Route("disp/ddh-ost/hlavicka/{date}", name="ddh_ost_hlavicka_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getHlavickaAction($date)
    {
        // Convert the date parameter into a DateTime object.
        try {
            $dateObj = new \DateTime($date);
        } catch (\Exception $e) {
            // If the date is invalid, return an API model with null properties.
            $apiModel = new \AppBundle\Api\Dispecing\DDH\OSTHlavnyApiModel();
            return $this->createApiResponse($apiModel);
        }

        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\OSTHlavny');
        $ostHlavny = $repository->findOneBy(['datum' => $dateObj]);

        $apiModel = new \AppBundle\Api\Dispecing\DDH\OSTHlavnyApiModel();
        if ($ostHlavny) {
            $apiModel->id = $ostHlavny->getId();
            $apiModel->datum = $ostHlavny->getDatum();
            $apiModel->dispecer_1 = $ostHlavny->getDispecer1();
            $apiModel->dispecer_2 = $ostHlavny->getDispecer2();
            $apiModel->poruchovka_1 = $ostHlavny->getPoruchovka1();
            $apiModel->poruchovka_2 = $ostHlavny->getPoruchovka2();
            $apiModel->teplota_letisko = $ostHlavny->getTeplotaLetisko();
            $apiModel->teplota_tpv = $ostHlavny->getTeplotaTpv();
            $apiModel->teplota_tpz = $ostHlavny->getTeplotaTpz();
            $apiModel->doplnovanie_tpv = $ostHlavny->getDoplnovanieTpv();
            $apiModel->doplnovanie_tpz = $ostHlavny->getDoplnovanieTpz();
        }
        // If no record is found, the API model's properties remain null.
        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("disp/ddh-ost/hlavicka/{id}", name="ddh_ost_hlavicka_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updateHlavickaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $hlavicka = $em->getRepository('AppBundle:Dispecing\DDH\OSTHlavny')->find($id);

        if (!$hlavicka) {
            throw $this->createNotFoundException(sprintf('Hlavný záznam s id %s sa nenašiel', $id));
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\OSTHlavny',
            \AppBundle\Form\Type\Dispecing\DDH\OSTHlavnyType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-prevadzka", name="ddh_ost_prace_na_ost_prevadzka_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getPraceNaOSTPrevadzkaListAction(Request $request)
    {
        $hlavnyId = $request->query->get('hlavny_id');
        if (!$hlavnyId) {
            throw new BadRequestHttpException('Missing hlavny_id parameter.');
        }

        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka');
        $entries = $repository->getByHlavnyId($hlavnyId);

        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new \AppBundle\Api\Dispecing\DDH\PraceNaOSTPrevadzkaApiModel();
            $model->id = $entry->getId();
            $model->ost = $entry->getOST();
            $model->datum_cas_zaciatok = $entry->getDatumCasZaciatok();
            $model->datum_cas_ukoncenia = $entry->getDatumCasUkoncenia();
            $model->vplyv_na_dodavku = $entry->getVplyvNaDodavku();
            $model->vyvod = $entry->getVyvod();
            $model->poznamka = $entry->getPoznamka();
            $model->stav = $entry->getStav();
            $model->vybavuje = $entry->getVybavuje();
            $model->priloha = $entry->getPriloha();
            $model->valid = $entry->getValid();
            $apiModels[] = $model;
        }
        return $this->createApiResponse($apiModels);
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-prevadzka", name="ddh_ost_prace_na_ost_prevadzka_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createPraceNaOSTPrevadzkaAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['hlavny_id'])) {
            throw new BadRequestHttpException('Missing hlavny_id');
        }

        $em = $this->getDoctrine()->getManager();
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\OSTHlavny')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $prac = new \AppBundle\Entity\Dispecing\DDH\PraceNaOSTPrevadzka();
        $prac->setHlavny($hlavny);
        // Other fields remain null.
        $em->persist($prac);
        $em->flush();

        $apiModel = new \AppBundle\Api\Dispecing\DDH\PraceNaOSTPrevadzkaApiModel();
        $apiModel->id = $prac->getId();
        // All other fields are null.
        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-prevadzka/{id}", name="ddh_ost_prace_na_ost_prevadzka_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updatePraceNaOSTPrevadzkaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $praca = $em->getRepository('AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka')->find($id);
        if (!$praca) {
            throw $this->createNotFoundException(sprintf('Práca na OST - prevádzka s id %s sa nenašla', $id));
        }

        // Convert the "datum_cas_zaciatok" field if it is a numeric timestamp:
        if ($praca->getDatumCasZaciatok() && is_numeric($praca->getDatumCasZaciatok())) {
            // Create DateTime object from Unix timestamp (ensure proper timezone if needed)
            $praca->setDatumCasZaciatok(new \DateTime('@' . $praca->getDatumCasZaciatok()));
        }

        // keep it null if it is not a numeric timestamp

        // Convert the "datum_cas_ukoncenia" field similarly:
        if ($praca->getDatumCasUkoncenia() && is_numeric($praca->getDatumCasUkoncenia())) {
            $praca->setDatumCasUkoncenia(new \DateTime('@' . $praca->getDatumCasUkoncenia()));
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka',
            \AppBundle\Form\Type\Dispecing\DDH\PraceNaOSTPrevadzkaType::class,
            $request
        );
    }

}
