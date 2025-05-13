<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\DispecerApiModel;
use AppBundle\Entity\Dispecing\DDH\ZmenaNaHVVychod;
use AppBundle\Entity\Dispecing\DDH\ZmenaNaHVZapad;
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
     * @Route("disp/ddh-hv/aktivita", name="ddh_hv_aktivita_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getAktivitaAction()
    {
        $em = $this->getDoctrine()->getManager();

        $aktivita = $em->getRepository('AppBundle:Dispecing\DDH\AuditLog')
            ->findUserActivityAll();

        return $this->createApiResponse([
            'udaje_vsetky' => $aktivita,
        ]);
    }

    /**
     * @Route("disp/ddh-hv/aktivita/{id}", name="ddh_hv_aktivita_hlavny_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getAktivitaByHlavnyAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $aktivita = $em->getRepository('AppBundle:Dispecing\DDH\AuditLog')
            ->findUserActivityByHlavny($id);

        return $this->createApiResponse([
            'udaje_hlavny' => $aktivita,
        ]);
    }

    /**
     * @Route("disp/ddh-hv/aktivita-by-date/{date}", name="ddh_hv_aktivita_by_date_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getAktivitaByDateAction($date)
    {
        $em = $this->getDoctrine()->getManager();

        try {
            $dateObj = new \DateTime($date);
            $aktivita = $em->getRepository('AppBundle:Dispecing\DDH\AuditLog')
                ->findUserActivityByDate($dateObj);

            return $this->createApiResponse([
                'udaje_hlavny' => $aktivita,
            ]);
        } catch (\Exception $e) {
            // If the date is invalid, return an empty array
            return $this->createApiResponse([
                'udaje_hlavny' => [],
            ]);
        }
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

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-vychod/{hlavnyId}", name="ddh_hv_zmena_na_hv_vychod_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZmenaNaHVVychodListAction($hlavnyId)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\ZmenaNaHVVychod');
        $entries = $repository->getByHlavnyId($hlavnyId);

        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new \AppBundle\Api\Dispecing\DDH\HVZmenaNaHVVychodApiModel();
            $model->id = $entry->getId();
            $model->datum_cas = $entry->getDatumCas();
            $model->poznamka = $entry->getPoznamka();

            $apiModels[] = $model;
        }

        return $this->createApiResponse($apiModels);
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-vychod", name="ddh_hv_zmena_na_hv_vychod_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createZmenaNaHVVychodAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['hlavny_id'])) {
            throw new BadRequestHttpException('Missing hlavny_id');
        }

        $em = $this->getDoctrine()->getManager();
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyHV')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $zmena = new ZmenaNaHVVychod();
        $zmena->setHlavny($hlavny);

        // If date and poznamka are provided, set them
        if (isset($data['datum_cas'])) {
            $dateObj = new \DateTime();
            $dateObj->setTimestamp($data['datum_cas']);
            $zmena->setDatumCas($dateObj);
        }

        if (isset($data['poznamka'])) {
            $zmena->setPoznamka($data['poznamka']);
        }

        $em->persist($zmena);
        $em->flush();

        $this->logCreateActivity(
            $zmena->getId(),
            'AppBundle:Dispecing\DDH\ZmenaNaHVVychod'
        );

        $apiModel = new \AppBundle\Api\Dispecing\DDH\HVZmenaNaHVVychodApiModel();
        $apiModel->id = $zmena->getId();
        $apiModel->datum_cas = $zmena->getDatumCas();
        $apiModel->poznamka = $zmena->getPoznamka();

        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-vychod/{id}", name="ddh_hv_zmena_na_hv_vychod_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updateZmenaNaHVVychodAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $zmena = $em->getRepository('AppBundle:Dispecing\DDH\ZmenaNaHVVychod')->find($id);
        if (!$zmena) {
            throw $this->createNotFoundException(sprintf('Zmena na HV Východ s id %s sa nenašla', $id));
        }

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Find the field being updated (the one that's not id)
        $fieldName = null;
        $fieldValue = null;
        foreach ($data as $key => $value) {
            if ($key !== 'id') {
                $fieldName = $key;
                $fieldValue = $value;
                break;
            }
        }

        // Handle datetime field directly before form processing
        if ($fieldName === 'datum_cas') {
            // If value is null, set the datetime field to null
            if ($fieldValue === null) {
                $zmena->setDatumCas(null);
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);
                $zmena->setDatumCas($dateObj);
            }

            $em->persist($zmena);
            $em->flush();
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\ZmenaNaHVVychod',
            \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaHVVychodType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-vychod/{id}", name="ddh_hv_zmena_na_hv_vychod_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deleteZmenaNaHVVychodAction($id)
    {
        return $this->deleteFromDatabase($id, 'AppBundle:Dispecing\DDH\ZmenaNaHVVychod', new Request());
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-zapad/{hlavnyId}", name="ddh_hv_zmena_na_hv_zapad_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZmenaNaHVZapadListAction($hlavnyId)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\ZmenaNaHVZapad');
        $entries = $repository->getByHlavnyId($hlavnyId);

        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new \AppBundle\Api\Dispecing\DDH\HVZmenaNaHVZapadApiModel();
            $model->id = $entry->getId();
            $model->datum_cas = $entry->getDatumCas();
            $model->poznamka = $entry->getPoznamka();

            $apiModels[] = $model;
        }

        return $this->createApiResponse($apiModels);
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-zapad", name="ddh_hv_zmena_na_hv_zapad_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createZmenaNaHVZapadAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['hlavny_id'])) {
            throw new BadRequestHttpException('Missing hlavny_id');
        }

        $em = $this->getDoctrine()->getManager();
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyHV')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $zmena = new ZmenaNaHVZapad();
        $zmena->setHlavny($hlavny);

        // If date and poznamka are provided, set them
        if (isset($data['datum_cas'])) {
            $dateObj = new \DateTime();
            $dateObj->setTimestamp($data['datum_cas']);
            $zmena->setDatumCas($dateObj);
        }

        if (isset($data['poznamka'])) {
            $zmena->setPoznamka($data['poznamka']);
        }

        $em->persist($zmena);
        $em->flush();

        $this->logCreateActivity(
            $zmena->getId(),
            'AppBundle:Dispecing\DDH\ZmenaNaHVZapad'
        );

        $apiModel = new \AppBundle\Api\Dispecing\DDH\HVZmenaNaHVZapadApiModel();
        $apiModel->id = $zmena->getId();
        $apiModel->datum_cas = $zmena->getDatumCas();
        $apiModel->poznamka = $zmena->getPoznamka();

        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-zapad/{id}", name="ddh_hv_zmena_na_hv_zapad_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updateZmenaNaHVZapadAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $zmena = $em->getRepository('AppBundle:Dispecing\DDH\ZmenaNaHVZapad')->find($id);
        if (!$zmena) {
            throw $this->createNotFoundException(sprintf('Zmena na HV Západ s id %s sa nenašla', $id));
        }

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Find the field being updated (the one that's not id)
        $fieldName = null;
        $fieldValue = null;
        foreach ($data as $key => $value) {
            if ($key !== 'id') {
                $fieldName = $key;
                $fieldValue = $value;
                break;
            }
        }

        // Handle datetime field directly before form processing
        if ($fieldName === 'datum_cas') {
            // If value is null, set the datetime field to null
            if ($fieldValue === null) {
                $zmena->setDatumCas(null);
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);
                $zmena->setDatumCas($dateObj);
            }

            $em->persist($zmena);
            $em->flush();
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\ZmenaNaHVZapad',
            \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaHVZapadType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-hv-zapad/{id}", name="ddh_hv_zmena_na_hv_zapad_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deleteZmenaNaHVZapadAction($id)
    {
        return $this->deleteFromDatabase($id, 'AppBundle:Dispecing\DDH\ZmenaNaHVZapad', new Request());
    }

    // Helper function to determine the entity class based on source type
    private function getEntityClass($sourceType)
    {
        switch ($sourceType) {
            case 'TpV':
                return 'AppBundle:Dispecing\DDH\ZmenaNaTpV';
            case 'TpZ':
                return 'AppBundle:Dispecing\DDH\ZmenaNaTpZ';
            case 'VhJ':
                return 'AppBundle:Dispecing\DDH\ZmenaNaVhJ';
            case 'Slovnaft':
                return 'AppBundle:Dispecing\DDH\ZmenaNaSlovnaft';
            case 'CW':
                return 'AppBundle:Dispecing\DDH\ZmenaNaCW';
            case 'OLO':
                return 'AppBundle:Dispecing\DDH\ZmenaNaOLO';
            case 'PPC':
                return 'AppBundle:Dispecing\DDH\ZmenaNaPPC';
            default:
                throw new \InvalidArgumentException("Unknown source type: $sourceType");
        }
    }

    // Helper function to determine the API model class based on source type
    private function getApiModelClass($sourceType)
    {
        switch ($sourceType) {
            case 'TpV':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaTpVApiModel::class;
            case 'TpZ':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaTpZApiModel::class;
            case 'VhJ':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaVhJApiModel::class;
            case 'Slovnaft':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaSlovnaftApiModel::class;
            case 'CW':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaCWApiModel::class;
            case 'OLO':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaOLOApiModel::class;
            case 'PPC':
                return \AppBundle\Api\Dispecing\DDH\HVZmenaNaPPCApiModel::class;
            default:
                throw new \InvalidArgumentException("Unknown source type: $sourceType");
        }
    }

    // Helper function to determine the form type class based on source type
    private function getFormTypeClass($sourceType)
    {
        switch ($sourceType) {
            case 'TpV':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaTpVType::class;
            case 'TpZ':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaTpZType::class;
            case 'VhJ':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaVhJType::class;
            case 'Slovnaft':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaSlovnaftType::class;
            case 'CW':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaCWType::class;
            case 'OLO':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaOLOType::class;
            case 'PPC':
                return \AppBundle\Form\Type\Dispecing\DDH\ZmenaNaPPCType::class;
            default:
                throw new \InvalidArgumentException("Unknown source type: $sourceType");
        }
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-zdroj/{sourceType}/{hlavnyId}", name="ddh_hv_zmena_na_zdroj_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZmenaNaZdrojListAction($sourceType, $hlavnyId)
    {
        $em = $this->getDoctrine()->getManager();
        $entityClass = $this->getEntityClass($sourceType);
        $repository = $em->getRepository($entityClass);
        $entries = $repository->getByHlavnyId($hlavnyId);

        $apiModelClass = $this->getApiModelClass($sourceType);
        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new $apiModelClass();
            $model->id = $entry->getId();
            $model->datum_cas = $entry->getDatumCas();
            $model->zariadenie = $entry->getZariadenie();
            $model->poznamka = $entry->getPoznamka();
            $model->stav = $entry->getStav();

            $apiModels[] = $model;
        }

        return $this->createApiResponse($apiModels);
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-zdroj/{sourceType}", name="ddh_hv_zmena_na_zdroj_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createZmenaNaZdrojAction($sourceType, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['hlavny_id'])) {
            throw new BadRequestHttpException('Missing hlavny_id');
        }

        $em = $this->getDoctrine()->getManager();
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyHV')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $entityClass = $this->getEntityClass($sourceType);
        $entityNamespace = str_replace('AppBundle:', 'AppBundle\\Entity\\', $entityClass);
        $zmena = new $entityNamespace();
        $zmena->setHlavny($hlavny);

        // If fields are provided, set them
        if (isset($data['datum_cas'])) {
            $dateObj = new \DateTime();
            $dateObj->setTimestamp($data['datum_cas']);
            $zmena->setDatumCas($dateObj);
        }

        if (isset($data['zariadenie'])) {
            $zmena->setZariadenie($data['zariadenie']);
        }

        if (isset($data['poznamka'])) {
            $zmena->setPoznamka($data['poznamka']);
        }

        if (isset($data['stav'])) {
            $zmena->setStav($data['stav']);
        }

        $em->persist($zmena);
        $em->flush();

        $this->logCreateActivity(
            $zmena->getId(),
            $entityClass
        );

        $apiModelClass = $this->getApiModelClass($sourceType);
        $apiModel = new $apiModelClass();
        $apiModel->id = $zmena->getId();
        $apiModel->datum_cas = $zmena->getDatumCas();
        $apiModel->zariadenie = $zmena->getZariadenie();
        $apiModel->poznamka = $zmena->getPoznamka();
        $apiModel->stav = $zmena->getStav();

        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-zdroj/{sourceType}/{id}", name="ddh_hv_zmena_na_zdroj_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updateZmenaNaZdrojAction($sourceType, $id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $entityClass = $this->getEntityClass($sourceType);
        $zmena = $em->getRepository($entityClass)->find($id);
        if (!$zmena) {
            throw $this->createNotFoundException(sprintf('Zmena na %s s id %s sa nenašla', $sourceType, $id));
        }

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Find the field being updated (the one that's not id)
        $fieldName = null;
        $fieldValue = null;
        foreach ($data as $key => $value) {
            if ($key !== 'id') {
                $fieldName = $key;
                $fieldValue = $value;
                break;
            }
        }

        // Handle datetime field directly before form processing
        if ($fieldName === 'datum_cas') {
            // If value is null, set the datetime field to null
            if ($fieldValue === null) {
                $zmena->setDatumCas(null);
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);
                $zmena->setDatumCas($dateObj);
            }

            $em->persist($zmena);
            $em->flush();
        }

        $formTypeClass = $this->getFormTypeClass($sourceType);
        return $this->updateDatabase(
            $id,
            $entityClass,
            $formTypeClass,
            $request
        );
    }

    /**
     * @Route("disp/ddh-hv/zmena-na-zdroj/{sourceType}/{id}", name="ddh_hv_zmena_na_zdroj_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deleteZmenaNaZdrojAction($sourceType, $id)
    {
        $entityClass = $this->getEntityClass($sourceType);
        return $this->deleteFromDatabase($id, $entityClass, new Request());
    }

    /**
     * @Route("disp/ddh-hv/stav-zariadeni/{date}", name="ddh_hv_stav_zariadeni_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getStavZariadeniAction($date)
    {
        // Convert the date parameter into a DateTime object.
        try {
            $dateObj = new \DateTime($date);
            // Set time to the end of day to include all records for that day
            $dateObj->setTime(23, 59, 59);
        } catch (\Exception $e) {
            // If the date is invalid, return an empty array
            return $this->createApiResponse([]);
        }

        $em = $this->getDoctrine()->getManager();

        // Source types and their repositories
        $sourceTypes = [
            'TpV', 'TpZ', 'VhJ', 'Slovnaft', 'CW', 'OLO', 'PPC'
        ];

        $result = [];

        foreach ($sourceTypes as $sourceType) {
            $entityClass = $this->getEntityClass($sourceType);
            $repository = $em->getRepository($entityClass);

            // Get latest status for each device in this source
            $latestStatuses = $repository->getLatestStatusesOfDevices($dateObj);

            foreach ($latestStatuses as $status) {
                $item = [
                    'source' => $sourceType,
                    'zariadenie' => $status->getZariadenie(),
                    'stav' => $status->getStav(),
                    'datum_cas' => $status->getDatumCas(),
                    'poznamka' => $status->getPoznamka()
                ];

                $result[] = $item;
            }
        }

        return $this->createApiResponse($result);
    }

    /**
     * @Route("disp/ddh-hv/vsetky-zmeny-na-zariadeniach/{date}", name="ddh_hv_all_zmeny_na_zariadeniach_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getAllZmenyNaZariadeniach($date)
    {
        // Convert the date parameter into a DateTime object.
        try {
            $dateObj = new \DateTime($date);
        } catch (\Exception $e) {
            // If the date is invalid, return an empty array
            return $this->createApiResponse([]);
        }

        $em = $this->getDoctrine()->getManager();

        // First, find the OST_Hlavny record for the given date
        $ostHlavnyRepository = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST');
        $ostHlavny = $ostHlavnyRepository->findOneBy(['datum' => $dateObj]);

        // If no OST_Hlavny record exists for this date, return an empty array
        if (!$ostHlavny) {
            return $this->createApiResponse([]);
        }

        // Find the HV_Hlavny record associated with this OST_Hlavny record
        $hvHlavnyRepository = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyHV');
        $hvHlavny = $hvHlavnyRepository->findOneBy(['ost_hlavny_id' => $ostHlavny->getId()]);

        if (!$hvHlavny) {
            return $this->createApiResponse([]);
        }

        $hlavnyId = $hvHlavny->getId();
        $result = [
            'zmenaZdroje' => [],
        ];

        // Fetch all source type changes
        $sourceTypes = ['TpV', 'TpZ', 'VhJ', 'Slovnaft', 'CW', 'OLO', 'PPC'];
        foreach ($sourceTypes as $sourceType) {
            $entityClass = $this->getEntityClass($sourceType);
            $repository = $em->getRepository($entityClass);
            $entries = $repository->getByHlavnyId($hlavnyId);

            $apiModelClass = $this->getApiModelClass($sourceType);
            $apiModels = [];
            foreach ($entries as $entry) {
                $model = new $apiModelClass();
                $model->id = $entry->getId();
                $model->datum_cas = $entry->getDatumCas();
                $model->zariadenie = $entry->getZariadenie();
                $model->poznamka = $entry->getPoznamka();
                $model->stav = $entry->getStav();
                $model->sourceType = $sourceType;
                $model->isHV = false;

                $apiModels[] = $model;
            }

            $result['zmenaZdroje'][$sourceType] = $apiModels;
        }

        return $this->createApiResponse($result);
    }
}