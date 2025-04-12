<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\DispecerApiModel;
use AppBundle\Api\Dispecing\OSTApiModel;
use AppBundle\Api\Dispecing\PoruchovkaApiModel;
use AppBundle\Entity\Dispecing\Dispecer;
use AppBundle\Entity\Dispecing\OST;
use AppBundle\Entity\Dispecing\Poruchovka;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\User\UserInterface;

class DenneDispecerskeHlasenieOSTController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/ddh-ost/index.html.twig');
    }

    /**
     * @Route("disp/ddh-ost/prilohy/{entryId}", name="ddh_ost_prilohy_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getPrilohyAction($entryId)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\PrilohyOST');

        // Get all attachments for this entry
        $prilohy = $repository->createQueryBuilder('p')
            ->andWhere('p.sekcia = :sekcia AND p.entry_id = :entryId')
            ->setParameter('sekcia', 1) // 1 = PraceNaOSTPrevadzka
            ->setParameter('entryId', $entryId)
            ->orderBy('p.datum', 'desc')
            ->getQuery()
            ->getResult();

        $result = [];
        foreach ($prilohy as $priloha) {
            $model = new \AppBundle\Api\Dispecing\DDH\PrilohyOSTApiModel();
            $model->id = $priloha->getId();
            $model->datum = $priloha->getDatum()->getTimestamp();
            $model->hlavny_id = $priloha->getHlavny()->getId();
            $model->sekcia = $priloha->getSekcia();
            $model->entry_id = $priloha->getEntryId();
            $model->original = $priloha->getOriginal();
            $model->subor = $priloha->getSubor();
            $model->nahral = $priloha->getNahral() ? $priloha->getNahral()->getFullname() : null;

            $result[] = $model;
        }

        return $this->createApiResponse($result);
    }

    /**
     * @Route("disp/ddh-ost/prilohy-upload", name="ddh_ost_prilohy_upload", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function uploadPrilohaAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        if (!isset($data['hlavny_id']) || !isset($data['entry_id']) || !isset($data['original']) || !isset($data['subor'])) {
            throw new BadRequestHttpException('Missing required fields');
        }

        $em = $this->getDoctrine()->getManager();

        // Find the hlavny record
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found');
        }

        // Create new attachment record
        $priloha = new \AppBundle\Entity\Dispecing\DDH\PrilohyOST();
        $priloha->setHlavny($hlavny);
        $priloha->setSekcia(1); // 1 = PraceNaOSTPrevadzka
        $priloha->setEntryId($data['entry_id']);
        $priloha->setOriginal($data['original']);
        $priloha->setSubor($data['subor']);

        // Set the current user as uploader
        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')->find($userId);
        $priloha->setNahral($user);

        $em->persist($priloha);
        $em->flush();

        $this->logUploadFileActivity(
            $priloha->getId(),
            'AppBundle:Dispecing\DDH\PrilohyOST'
        );

        // Create and return API model
        $model = new \AppBundle\Api\Dispecing\DDH\PrilohyOSTApiModel();
        $model->id = $priloha->getId();
        $model->datum = $priloha->getDatum()->getTimestamp();
        $model->hlavny_id = $priloha->getHlavny()->getId();
        $model->sekcia = $priloha->getSekcia();
        $model->entry_id = $priloha->getEntryId();
        $model->original = $priloha->getOriginal();
        $model->subor = $priloha->getSubor();
        $model->nahral = $priloha->getNahral() ? $priloha->getNahral()->getFullname() : null;

        return $this->createApiResponse($model, 201);
    }

    /**
     * @Route("disp/ddh-ost/prilohy-download/{id}", name="ddh_ost_prilohy_download", options={"expose"=true})
     * @Method("GET")
     */
    public function downloadPrilohaAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $priloha = $em->getRepository('AppBundle:Dispecing\DDH\PrilohyOST')->find($id);

        if (!$priloha) {
            throw $this->createNotFoundException('Attachment not found');
        }

        $sub = 'dispecing';
        $file = $priloha->getSubor();
        $orig = $priloha->getOriginal();

        return $this->downloadFile($sub, $file, $orig, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    /**
     * @Route("disp/ddh-ost/prilohy/{id}", name="ddh_ost_prilohy_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deletePrilohaAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $priloha = $em->getRepository('AppBundle:Dispecing\DDH\PrilohyOST')->find($id);

        if (!$priloha) {
            throw $this->createNotFoundException('Attachment not found');
        }

        // Delete the file from filesystem
        $filesystem = new \Symfony\Component\Filesystem\Filesystem();
        $filePath = $this->get('kernel')->getProjectDir() . '/web/uploads/dispecing/' . $priloha->getSubor();

        if ($filesystem->exists($filePath)) {
            $filesystem->remove($filePath);
        }

        $metadata = $em->getClassMetadata('AppBundle:Dispecing\DDH\PrilohyOST');
        $this->logDeleteFileActivity(
            $priloha->getId(),
            $metadata
        );

        // Remove from database
        $em->remove($priloha);
        $em->flush();

        return new Response('', 204);
    }

    /**
     * @Route("disp/ddh-ost/opravnenia", name="ddh_ost_opravnenia", options={"expose"=true})
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
     * @Route("disp/ddh-ost/zoznam-ost", name="ddh_ost_zoznam_ost_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamOSTAction()
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\OST');

        $zoznam = $repository->getZoznam();

        $result = [];
        foreach ($zoznam as $ost) {
            $result[] = $this->createOSTApiModel($ost);
        }

        return $this->createApiResponse($result);
    }

    private function createOSTApiModel(OST $ost): OSTApiModel
    {
        $id = $ost->getId();

        $model = new OSTApiModel();
        $model->id = $id;
        $model->cislo = $ost->getCislo();
        $model->adresa = $ost->getAdresa();
        $model->typ = $ost->getTyp();

        return $model;
    }

    /**
     * @Route("disp/ddh-ost/dispeceri", name="ddh_ost_dispeceri_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamDispecerovAction()
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\Dispecer');

        $zoznam = $repository->getZoznam();

        $result = [];
        foreach ($zoznam as $dispecer) {
            $result[] = $this->createDispecerApiModel($dispecer);
        }

        return $this->createApiResponse($result);
    }

    private function createDispecerApiModel(Dispecer $dispecer): DispecerApiModel
    {
        $id = $dispecer->getId();

        $model = new DispecerApiModel();
        $model->id = $id;
        $model->meno = $dispecer->getMeno();

        return $model;
    }

    /**
     * @Route("disp/ddh-ost/poruchovka", name="ddh_ost_poruchovka_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getZoznamPoruchovkaAction()
    {
        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\Poruchovka');

        $zoznam = $repository->getZoznam();

        $result = [];
        foreach ($zoznam as $poruchovka) {
            $result[] = $this->createPoruchovkaApiModel($poruchovka);
        }

        return $this->createApiResponse($result);
    }

    private function createPoruchovkaApiModel(Poruchovka $poruchovka): PoruchovkaApiModel
    {
        $id = $poruchovka->getId();

        $model = new PoruchovkaApiModel();
        $model->id = $id;
        $model->meno = $poruchovka->getMeno();

        return $model;
    }

    /**
     * @Route("disp/ddh-ost/aktivita", name="ddh_ost_aktivita_get", options={"expose"=true})
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
     * @Route("disp/ddh-ost/aktivita/{id}", name="ddh_ost_aktivita_hlavny_get", options={"expose"=true})
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
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST');
        $ostHlavny = $repository->findOneBy(['datum' => $dateObj]);

        $apiModel = new \AppBundle\Api\Dispecing\DDH\OSTHlavnyApiModel();
        if ($ostHlavny) {
            $apiModel->id = $ostHlavny->getId();
            $apiModel->datum = $ostHlavny->getDatum();
            $apiModel->dispecer_1 = $ostHlavny->getDispecer1();
            $apiModel->dispecer_2 = $ostHlavny->getDispecer2();
            $apiModel->poruchovka_1 = $ostHlavny->getPoruchovka1();
            $apiModel->poruchovka_2 = $ostHlavny->getPoruchovka2();
            $apiModel->poruchovka_3 = $ostHlavny->getPoruchovka3();
            $apiModel->poruchovka_4 = $ostHlavny->getPoruchovka4();
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

        $hlavicka = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($id);

        if (!$hlavicka) {
            throw $this->createNotFoundException(sprintf('Hlavný záznam s id %s sa nenašiel', $id));
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\HlavnyOST',
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
            $model->ost = $entry->getOst();
            $model->datum_cas_zaciatok = $entry->getDatumCasZaciatok();
            $model->datum_cas_ukoncenie = $entry->getDatumCasUkoncenie();
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
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $praca = new \AppBundle\Entity\Dispecing\DDH\PraceNaOSTPrevadzka();
        $praca->setHlavny($hlavny);
        $praca->setValid(true);
        // Other fields remain null.
        $em->persist($praca);
        $em->flush();

        $this->logCreateActivity(
            $praca->getId(),
            'AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka'
        );

        $apiModel = new \AppBundle\Api\Dispecing\DDH\PraceNaOSTPrevadzkaApiModel();
        $apiModel->id = $praca->getId();
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

        // Handle datetime fields directly before form processing
        if (($fieldName === 'datum_cas_zaciatok' || $fieldName === 'datum_cas_ukoncenie')) {

            // If value is null, set the datetime field to null
            if ($fieldValue === null) {
                if ($fieldName === 'datum_cas_zaciatok') {
                    $praca->setDatumCasZaciatok(null);
                } else {
                    $praca->setDatumCasUkoncenie(null);
                }
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);

                // Set directly on the entity
                if ($fieldName === 'datum_cas_zaciatok') {
                    $praca->setDatumCasZaciatok($dateObj);
                } else {
                    $praca->setDatumCasUkoncenie($dateObj);
                }
            }
        }

        $em->persist($praca);
        $em->flush();

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka',
            \AppBundle\Form\Type\Dispecing\DDH\PraceNaOSTPrevadzkaType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-prevadzka/{id}", name="ddh_ost_prace_na_ost_prevadzka_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deletePraceNaOSTPrevadzkaAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $praca = $em->getRepository('AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka')->find($id);

        if (!$praca) {
            throw $this->createNotFoundException(sprintf('Práca na OST - prevádzka s id %s sa nenašla', $id));
        }

        // Soft delete - set valid to false
        $praca->setValid(false);
        $em->persist($praca);
        $em->flush();

        // Log the action
        $metadata = $em->getClassMetadata('AppBundle:Dispecing\DDH\PraceNaOSTPrevadzka');
        $this->logDeleteActivity($metadata, $id);

        return new Response('',204); // Return 204 No Content on success
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-dispecing", name="ddh_ost_prace_na_ost_dispecing_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getPraceNaOSTDispecingListAction(Request $request)
    {
        $hlavnyId = $request->query->get('hlavny_id');
        if (!$hlavnyId) {
            throw new BadRequestHttpException('Missing hlavny_id parameter.');
        }

        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\PraceNaOSTDispecing');
        $entries = $repository->getByHlavnyId($hlavnyId);

        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new \AppBundle\Api\Dispecing\DDH\PraceNaOSTDispecingApiModel();
            $model->id = $entry->getId();
            $model->ost = $entry->getOst();
            $model->datum_cas_zaciatok = $entry->getDatumCasZaciatok();
            $model->datum_cas_ukoncenie = $entry->getDatumCasUkoncenie();
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
     * @Route("disp/ddh-ost/prace-na-ost-dispecing", name="ddh_ost_prace_na_ost_dispecing_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createPraceNaOSTDispecingAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['hlavny_id'])) {
            throw new BadRequestHttpException('Missing hlavny_id');
        }

        $em = $this->getDoctrine()->getManager();
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $praca = new \AppBundle\Entity\Dispecing\DDH\PraceNaOSTDispecing();
        $praca->setHlavny($hlavny);
        $praca->setValid(true);
        // Other fields remain null.
        $em->persist($praca);
        $em->flush();

        $this->logCreateActivity(
            $praca->getId(),
            'AppBundle:Dispecing\DDH\PraceNaOSTDispecing'
        );

        $apiModel = new \AppBundle\Api\Dispecing\DDH\PraceNaOSTDispecingApiModel();
        $apiModel->id = $praca->getId();
        // All other fields are null.
        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-dispecing/{id}", name="ddh_ost_prace_na_ost_dispecing_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updatePraceNaOSTDispecingAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $praca = $em->getRepository('AppBundle:Dispecing\DDH\PraceNaOSTDispecing')->find($id);
        if (!$praca) {
            throw $this->createNotFoundException(sprintf('Práca na OST - dispečing a poruchová služba s id %s sa nenašla', $id));
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

        // Handle datetime fields directly before form processing
        if (($fieldName === 'datum_cas_zaciatok' || $fieldName === 'datum_cas_ukoncenie')) {

            // If value is null, set the datetime field to null
            if ($fieldValue === null) {
                if ($fieldName === 'datum_cas_zaciatok') {
                    $praca->setDatumCasZaciatok(null);
                } else {
                    $praca->setDatumCasUkoncenie(null);
                }
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);

                // Set directly on the entity
                if ($fieldName === 'datum_cas_zaciatok') {
                    $praca->setDatumCasZaciatok($dateObj);
                } else {
                    $praca->setDatumCasUkoncenie($dateObj);
                }
            }
        }

        $em->persist($praca);
        $em->flush();

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\PraceNaOSTDispecing',
            \AppBundle\Form\Type\Dispecing\DDH\PraceNaOSTDispecingType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-ost/prace-na-ost-dispecing/{id}", name="ddh_ost_prace_na_ost_dispecing_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deletePraceNaOSTDispecingAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $praca = $em->getRepository('AppBundle:Dispecing\DDH\PraceNaOSTDispecing')->find($id);

        if (!$praca) {
            throw $this->createNotFoundException(sprintf('Práca na OST - dispečing a poruchová služba s id %s sa nenašla', $id));
        }

        // Soft delete - set valid to false
        $praca->setValid(false);
        $em->persist($praca);
        $em->flush();

        // Log the action
        $metadata = $em->getClassMetadata('AppBundle:Dispecing\DDH\PraceNaOSTDispecing');
        $this->logDeleteActivity($metadata, $id);

        return new Response('',204); // Return 204 No Content on success
    }

    /**
     * @Route("disp/ddh-ost/planovane-prace-odstavky", name="ddh_ost_planovane_prace_odstavky_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getPlanovanePraceOdstavkyOSTListAction(Request $request)
    {
        $hlavnyId = $request->query->get('hlavny_id');
        if (!$hlavnyId) {
            throw new BadRequestHttpException('Missing hlavny_id parameter.');
        }

        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\PlanovanePraceOdstavkyOST');
        $entries = $repository->getByHlavnyId($hlavnyId);

        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new \AppBundle\Api\Dispecing\DDH\PlanovanePraceOdstavkyApiModel();
            $model->id = $entry->getId();
            $model->datum_cas = $entry->getDatumCas();
            $model->ost = $entry->getOst();
            $model->poznamka = $entry->getPoznamka();

            // Only return valid entries
            if ($entry->getValid() !== false) {
                $apiModels[] = $model;
            }
        }
        return $this->createApiResponse($apiModels);
    }

    /**
     * @Route("disp/ddh-ost/planovane-prace-odstavky", name="ddh_ost_planovane_prace_odstavky_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createPlanovanePraceOdstavkyOSTAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }
        if (!isset($data['hlavny_id'])) {
            throw new BadRequestHttpException('Missing hlavny_id');
        }

        $em = $this->getDoctrine()->getManager();
        $hlavny = $em->getRepository('AppBundle:Dispecing\DDH\HlavnyOST')->find($data['hlavny_id']);
        if (!$hlavny) {
            throw $this->createNotFoundException('Hlavny record not found.');
        }

        $planovana = new \AppBundle\Entity\Dispecing\DDH\PlanovanePraceOdstavkyOST();
        $planovana->setHlavny($hlavny);
        $planovana->setValid(true);
        // Other fields remain null
        $em->persist($planovana);
        $em->flush();

        $this->logCreateActivity(
            $planovana->getId(),
            'AppBundle:Dispecing\DDH\PlanovanePraceOdstavkyOST'
        );

        $apiModel = new \AppBundle\Api\Dispecing\DDH\PlanovanePraceOdstavkyApiModel();
        $apiModel->id = $planovana->getId();
        // All other fields are null
        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-ost/planovane-prace-odstavky/{id}", name="ddh_ost_planovane_prace_odstavky_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updatePlanovanePraceOdstavkyOSTAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $planovana = $em->getRepository('AppBundle:Dispecing\DDH\PlanovanePraceOdstavkyOST')->find($id);
        if (!$planovana) {
            throw $this->createNotFoundException(sprintf('Plánované práce a odstávky na OST s id %s sa nenašli', $id));
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
                $planovana->setDatumCas(null);
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);
                $planovana->setDatumCas($dateObj);
            }

            $em->persist($planovana);
            $em->flush();
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\PlanovanePraceOdstavkyOST',
            \AppBundle\Form\Type\Dispecing\DDH\PlanovanePraceOdstavkyOSTType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-ost/planovane-prace-odstavky/{id}", name="ddh_ost_planovane_prace_odstavky_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deletePlanovanePraceOdstavkyOSTAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $planovana = $em->getRepository('AppBundle:Dispecing\DDH\PlanovanePraceOdstavkyOST')->find($id);

        if (!$planovana) {
            throw $this->createNotFoundException(sprintf('Plánované práce a odstávky na OST s id %s sa nenašli', $id));
        }

        // Soft delete - set valid to false
        $planovana->setValid(false);
        $em->persist($planovana);
        $em->flush();

        // Log the action
        $metadata = $em->getClassMetadata('AppBundle:Dispecing\DDH\PlanovanePraceOdstavkyOST');
        $this->logDeleteActivity($metadata, $id);

        return new Response('', 204); // Return 204 No Content on success
    }

    /**
     * @Route("disp/ddh-ost/poznamky", name="ddh_ost_poznamky_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getPoznamkyListAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DDH\Poznamka');
        $entries = $repository->getAll();

        $apiModels = [];
        foreach ($entries as $entry) {
            $model = new \AppBundle\Api\Dispecing\DDH\OSTPoznamkaApiModel();
            $model->id = $entry->getId();
            $model->datum_cas = $entry->getDatumCas();
            $model->ost = $entry->getOst();
            $model->poznamka = $entry->getPoznamka();
            $model->valid = $entry->getValid();

            // Only return valid entries
            if ($entry->getValid() !== false) {
                $apiModels[] = $model;
            }
        }
        return $this->createApiResponse($apiModels);
    }

    /**
     * @Route("disp/ddh-ost/poznamky", name="ddh_ost_poznamky_create", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DDH')")
     */
    public function createPoznamkaAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $poznamka = new \AppBundle\Entity\Dispecing\DDH\Poznamka();
        $poznamka->setValid(true);
        $em->persist($poznamka);
        $em->flush();

        $this->logCreateActivity(
            $poznamka->getId(),
            'AppBundle:Dispecing\DDH\Poznamka'
        );

        $apiModel = new \AppBundle\Api\Dispecing\DDH\OSTPoznamkaApiModel();
        $apiModel->id = $poznamka->getId();
        return $this->createApiResponse($apiModel, 201);
    }

    /**
     * @Route("disp/ddh-ost/poznamky/{id}", name="ddh_ost_poznamky_update", options={"expose"=true})
     * @Method("PATCH")
     * @Security("has_role('ROLE_DDH')")
     */
    public function updatePoznamkaAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $poznamka = $em->getRepository('AppBundle:Dispecing\DDH\Poznamka')->find($id);
        if (!$poznamka) {
            throw $this->createNotFoundException(sprintf('Poznámka s id %s sa nenašla', $id));
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
                $poznamka->setDatumCas(null);
            } else if (is_numeric($fieldValue)) {
                $dateObj = new \DateTime();
                $dateObj->setTimestamp($fieldValue);
                $poznamka->setDatumCas($dateObj);
            }

            $em->persist($poznamka);
            $em->flush();
        }

        return $this->updateDatabase(
            $id,
            'AppBundle:Dispecing\DDH\Poznamka',
            \AppBundle\Form\Type\Dispecing\DDH\PoznamkaType::class,
            $request
        );
    }

    /**
     * @Route("disp/ddh-ost/poznamky/{id}", name="ddh_ost_poznamky_delete", options={"expose"=true})
     * @Method("DELETE")
     * @Security("has_role('ROLE_DDH')")
     */
    public function deletePoznamkaAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $poznamka = $em->getRepository('AppBundle:Dispecing\DDH\Poznamka')->find($id);

        if (!$poznamka) {
            throw $this->createNotFoundException(sprintf('Poznámka s id %s sa nenašla', $id));
        }

        // Soft delete - set valid to false
        $poznamka->setValid(false);
        $em->persist($poznamka);
        $em->flush();

        // Log the action
        $metadata = $em->getClassMetadata('AppBundle:Dispecing\DDH\Poznamka');
        $this->logDeleteActivity($metadata, $id);

        return new Response('', 204); // Return 204 No Content on success
    }
}
