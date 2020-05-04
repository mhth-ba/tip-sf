<?php

namespace AppBundle\Controller;

use AppBundle\Api\Dispecing\DEO\HlavnyApiModel;
use AppBundle\Api\Dispecing\DEO\PostupenieApiModel;
use AppBundle\Entity\Dispecing\DEO\Hlavny;
use AppBundle\Entity\Dispecing\DEO\Postupenie;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class DispecingEvidenciaController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/evidencia-ost/index.html.twig', [
            'name' => null
        ]);
    }

    private function createHlavnyApiModel(Hlavny $hlavny)
    {
        $em = $this->getDoctrine()->getManager();

        $id = $hlavny->getId();

        $model = new HlavnyApiModel();
        $model->id = $id;
        $model->datum = $hlavny->getDatum();
        $model->zmenene = $hlavny->getZmenene();
        $model->vytvoril = $hlavny->getVytvoril();
        $model->upravil = $hlavny->getUpravil();
        $model->datum_zistenia = $hlavny->getDatumZistenia();
        $model->ost = $hlavny->getOst();
        $model->predmet = $hlavny->getPredmet();
        $model->zakaznik = $hlavny->getZakaznik();
        $model->udalost = $hlavny->getUdalost();
        $model->vplyv_uk = $hlavny->getVplyvUk();
        $model->vplyv_tuv = $hlavny->getVplyvTuv();
        $model->typ = $hlavny->getTyp();
        $model->poznamka = $hlavny->getPoznamka();

        $postupenia = $em->getRepository('AppBundle:Dispecing\DEO\Postupenie')
            ->getPostupeneByHlavny($id);

        // postupene zaznamy k hlavnemu zaznamu
        foreach ($postupenia as $item) {
            $model->postupenia[] = $this->createPostupenieApiModel($item);
        }

        $selfUrl = $this->generateUrl(
            'deo_hlavny_get',
            ['id' => $id]
        );

        $model->addLink('_self', $selfUrl);

        return $model;
    }

    private function createPostupenieApiModel(Postupenie $postupenie)
    {
        $model = new PostupenieApiModel();

        $model->id = $postupenie->getId();
        $model->vytvorene = $postupenie->getDatum();
        $model->zmenene = $postupenie->getZmenene();
        $model->vytvoril = $postupenie->getVytvoril();
        $model->upravil = $postupenie->getUpravil();
        $model->datum_postupenia = $postupenie->getDatumPostupenia();
        $model->subjekt_postupenia = $postupenie->getSubjektPostupenia();
        $model->udalost = $postupenie->getUdalost();
        $model->vyriesene = $postupenie->getVyriesene();
        $model->datum_odstranenia = $postupenie->getDatumOdstranenia();
        $model->poznamka = $postupenie->getPoznamka();

        return $model;
    }

    /**
     * @Route("disp/deo/hlavny", name="deo_hlavny_post", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_DEO')")
     */
    public function createHlavnyAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('AppBundle:Dispecing\DEO\Hlavny');

        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $userId = $this->getUser()->getId();

        $novy = $repository->createHlavny($userId);
        $hlavnyId = $novy[0]->getId(); // ID noveho hlavneho zaznamu

        $this->logCreateActivity($hlavnyId, 'AppBundle:Dispecing\DEO\Hlavny');

        $hlavny = $repository->find($hlavnyId);

        $apiModel = $this->createHlavnyApiModel($hlavny);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("disp/deo/hlavny", name="deo_hlavny_get", options={"expose"=true})
     * @Method("GET")
     */
    public function getHlavnyAction()
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\DEO\Hlavny')
            ->getZoznam();

        $models = [];
        foreach ($polozky as $item) {
            $models[] = $this->createHlavnyApiModel($item);
        }

        return $this->createApiResponse($models);
    }
}
