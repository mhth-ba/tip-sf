<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\DispecerApiModel;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class DenneDispecerskeHlasenieHVController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/ddh-hv/index.html.twig');
    }

    /**
     * @Route("disp/ddh-hv/opravnenia", name="ddh_hv_opravnenia", options={"expose"=true})
     * @Method("GET")
     */
    public function getOpravneniaAction(UserInterface $user)
    {
        $guid = $user->getId();

        $grants = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:App\Grant')
            ->findGrantedRolesToUser($guid);

        $roles = [];
        foreach ($grants as $grant) {
            $roles[] = $grant->getRoles()->getRole();
        }

        return $this->createApiResponse($roles);
    }

    /**
     * @Route("disp/ddh-hv/dispeceri", name="ddh_hv_dispeceri_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamDispecerovAction()
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\Dispecer');

        $zoznam = $repository->getZoznam();

        $result = [];
        foreach ($zoznam as $dispecer) {
            $model = new DispecerApiModel();
            $model->id = $dispecer->getId();
            $model->meno = $dispecer->getMeno();
            $result[] = $model;
        }

        return $this->createApiResponse($result);
    }

    /**
     * @Route("disp/ddh-hv/hlavicka/{date}", name="ddh_hv_hlavicka_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getHlavickaAction($date)
    {
        // Convert the date parameter into a DateTime object.
        try {
            $dateObj = new \DateTime($date);
        } catch (\Exception $e) {
            // If the date is invalid, return an API model with null properties.
            $apiModel = new \AppBundle\Api\Dispecing\DDH\HVHlavnyApiModel();
            return $this->createApiResponse($apiModel);
        }

        $em = $this->getDoctrine()->getManager();

        // First, find the OST_Hlavny record for the given date
        $ostHlavnyRepository = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST');
        $ostHlavny = $ostHlavnyRepository->findOneBy(['datum' => $dateObj]);

        // If no OST_Hlavny record exists for this date, return an empty model
        if (!$ostHlavny) {
            $apiModel = new \AppBundle\Api\Dispecing\DDH\HVHlavnyApiModel();
            return $this->createApiResponse($apiModel);
        }

        // Now find the HV_Hlavny record associated with this OST_Hlavny record
        $hvHlavnyRepository = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyHV');
        $hvHlavny = $hvHlavnyRepository->findOneBy(['ost_hlavny_id' => $ostHlavny->getId()]);

        // Create the API model
        $apiModel = new \AppBundle\Api\Dispecing\DDH\HVHlavnyApiModel();

        // Set the OST_Hlavny ID regardless of whether a HV_Hlavny record exists
        $apiModel->ost_hlavny_id = $ostHlavny->getId();

        // If HV_Hlavny record exists, set its properties
        if ($hvHlavny) {
            $apiModel->id = $hvHlavny->getId();
            $apiModel->dispecer_1 = $hvHlavny->getDispecer1();
            $apiModel->dispecer_2 = $hvHlavny->getDispecer2();
        }

        // Get the OST_Hlavny data to display as read-only
        $ostModel = new \AppBundle\Api\Dispecing\DDH\OSTHlavnyApiModel();
        $ostModel->id = $ostHlavny->getId();
        $ostModel->datum = $ostHlavny->getDatum();
        $ostModel->poruchovka_1 = $ostHlavny->getPoruchovka1();
        $ostModel->poruchovka_2 = $ostHlavny->getPoruchovka2();
        $ostModel->teplota_letisko = $ostHlavny->getTeplotaLetisko();
        $ostModel->teplota_tpv = $ostHlavny->getTeplotaTpv();
        $ostModel->teplota_tpz = $ostHlavny->getTeplotaTpz();
        $ostModel->doplnovanie_tpv = $ostHlavny->getDoplnovanieTpv();
        $ostModel->doplnovanie_tpz = $ostHlavny->getDoplnovanieTpz();

        // Add the OST_Hlavny data to the response
        $apiModel->ost_data = $ostModel;

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("disp/ddh-hv/hlavicka/{id}", name="ddh_hv_hlavicka_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updateHlavickaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), true);

        // Check if ID was provided
        if (!$id) {
            throw new BadRequestHttpException('ID is required');
        }

        // Try to find an existing HV_Hlavny record
        $hvHlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyHV')->find($id);

        if (!$hvHlavny) {
            // If no record exists but we have ost_hlavny_id, create a new record
            if (isset($data['ost_hlavny_id'])) {
                $ostHlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($data['ost_hlavny_id']);

                if (!$ostHlavny) {
                    throw $this->createNotFoundException(sprintf('OST_Hlavny record with id %s not found', $data['ost_hlavny_id']));
                }

                $hvHlavny = new \AppBundle\Entity\Dispecing\DDH\HlavnyHV();
                $hvHlavny->setOstHlavnyId($ostHlavny->getId());
            } else {
                throw $this->createNotFoundException(sprintf('HV_Hlavny record with id %s not found and no ost_hlavny_id provided', $id));
            }
        }

        // Update the dispecer fields if provided
        if (isset($data['dispecer_1'])) {
            $hvHlavny->setDispecer1($data['dispecer_1']);
        }

        if (isset($data['dispecer_2'])) {
            $hvHlavny->setDispecer2($data['dispecer_2']);
        }

        $em->persist($hvHlavny);
        $em->flush();

        // Log the update activity
        $metadata = $em->getClassMetadata('AppBundle:Dispecing\DDH\HlavnyHV');
        $this->logUpdateActivity($metadata, $request);

        // Create and return the updated API model
        $apiModel = new \AppBundle\Api\Dispecing\DDH\HVHlavnyApiModel();
        $apiModel->id = $hvHlavny->getId();
        $apiModel->ost_hlavny_id = $hvHlavny->getOstHlavnyId();
        $apiModel->dispecer_1 = $hvHlavny->getDispecer1();
        $apiModel->dispecer_2 = $hvHlavny->getDispecer2();

        // Get the OST_Hlavny data to include in the response
        $ostHlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($hvHlavny->getOstHlavnyId());
        if ($ostHlavny) {
            $ostModel = new \AppBundle\Api\Dispecing\DDH\OSTHlavnyApiModel();
            $ostModel->id = $ostHlavny->getId();
            $ostModel->datum = $ostHlavny->getDatum();
            $ostModel->poruchovka_1 = $ostHlavny->getPoruchovka1();
            $ostModel->poruchovka_2 = $ostHlavny->getPoruchovka2();
            $ostModel->teplota_letisko = $ostHlavny->getTeplotaLetisko();
            $ostModel->teplota_tpv = $ostHlavny->getTeplotaTpv();
            $ostModel->teplota_tpz = $ostHlavny->getTeplotaTpz();
            $ostModel->doplnovanie_tpv = $ostHlavny->getDoplnovanieTpv();
            $ostModel->doplnovanie_tpz = $ostHlavny->getDoplnovanieTpz();

            $apiModel->ost_data = $ostModel;
        }

        return $this->createApiResponse($apiModel);
    }
}