<?php

namespace AppBundle\Controller;

use AppBundle\Api\ServisneHlasenieApiModel;
use AppBundle\Entity\RIS\ServisneHlasenia;
use AppBundle\Form\Type\ServisneHlasenieType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ServisneHlaseniaController extends BaseController
{
    public function indexAction()
    {
        $formServisneHlasenie = $this->createForm(ServisneHlasenieType::class);

        return $this->render('ris/servisne-hlasenia/index.html.twig', [
            'formServisneHlasenie' => $formServisneHlasenie->createView()
        ]);
    }

    /**
     * @Route("ris/servisne-hlasenia", name="ris_servisne-hlasenia_list", options={"expose"=true})
     * @Method("GET")
     */
    public function getServisneHlaseniaAction()
    {
        $hlasenia = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:RIS\ServisneHlasenia')
            ->findAll();

        $models = [];
        foreach ($hlasenia as $hlasenie) {
            $models[] = $this->createServisneHlasenieApiModel($hlasenie);
        }

        return $this->createApiResponse([
            'items' => $models
        ]);
    }

    /**
     * @Route("ris/servisne-hlasenia/{id}", name="ris_servisne-hlasenia_get")
     * @Method("GET")
     */
    public function getServisneHlasenieAction(ServisneHlasenia $hlasenie)
    {
        $apiModel = $this->createServisneHlasenieApiModel($hlasenie);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("ris/servisne-hlasenia", name="ris_servisne-hlasenia_new", options={"expose"=true})
     * @Method("POST")
     */
    public function newServisneHlasenieAction(Request $request)
    {
        $userId = $this->getUser()->getId();
        $em = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $vytvoril = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $data['vytvoril'] = $vytvoril;

        $form = $this->createForm(ServisneHlasenieType::class);
        $form->submit($data);
        if (!$form->isValid()) {
            $errors = $this->getErrorsFromForm($form);

            return $this->createApiResponse([
                'errors' => $errors
            ], 400);
        }

        /** @var ServisneHlasenia $hlasenie */
        $hlasenie = $form->getData();

        $em->persist($hlasenie);
        $em->flush();

        $apiModel = $this->createServisneHlasenieApiModel($hlasenie);

        $response = new Response(null, 204);
        $response->headers->set(
            'Location',
            $this->generateUrl('ris_servisne-hlasenia_get', ['id' => $hlasenie->getId()])
        );

        return $response;
    }

    private function createServisneHlasenieApiModel(ServisneHlasenia $hlasenie)
    {
        $model = new ServisneHlasenieApiModel();
        $model->id = $hlasenie->getId();
        $model->createdAt = $hlasenie->getCreatedAt();
        $model->vyvoril = $hlasenie->getVytvoril();
        $model->datum = $hlasenie->getDatum();
        $model->oznamovatel = $hlasenie->getOznamovatel();
        $model->miesto = $hlasenie->getMiesto();
        $model->profylaktika = $hlasenie->getProfylaktika();
        $model->popis = $hlasenie->getPopis();
        $model->datumRiesenia = $hlasenie->getDatumRiesenia();
        $model->riesitel = $hlasenie->getRiesitel();
        $model->skupina = $hlasenie->getSkupina();
        $model->riesenie = $hlasenie->getRiesenie();
        $model->vyriesene = $hlasenie->getVyriesene();

        $selfUrl = $this->generateUrl(
            'ris_servisne-hlasenia_get',
            ['id' => $hlasenie->getId()]
        );
        $model->addLink('_self', $selfUrl);

        return $model;
    }
}
