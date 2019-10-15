<?php

namespace AppBundle\Controller;

use AppBundle\Api\Kontroling\KonstantyApiModel;
use AppBundle\Api\Kontroling\NCT\PlanDodavkyTeplaApiModel;
use AppBundle\Entity\Kontroling\NCT\Konstanty;
use AppBundle\Entity\Kontroling\NCT\PlanDodavkyTepla;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class NavrhCenyTeplaController extends BaseController
{
    public function indexAction()
    {
        return $this->render('');
    }

    /**
     * @Route("kont/nct/konstanty/{id}", name="nct_konstanty_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_NCT_MNG')")
     */
    public function getKonstanty($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\NCT\Konstanty')
            ->getKonstanty($id);

        $models = [];
        foreach ($polozky as $konstanta) {
            $models[] = $this->createKonstantyApiModel($konstanta);
        }

        return $this->createApiResponse($models);
    }

    private function createKonstantyApiModel(Konstanty $konstanty)
    {
        $model = new KonstantyApiModel();

        $model->id = $konstanty->getId();
//        $model->datum = $konstanty->getDatum();
//        $model->hlavny = $konstanty->getHlavny();
        $model->polozka = $konstanty->getPolozka();
        $model->hodnota = $konstanty->getHodnota();

        return $model;
    }

    /**
     * @Route("kont/nct/plan-dodavky-tepla/{id}", name="nct_plan-dodavky-tepla_get", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_NCT_MNG')")
     */
    public function getPlanDodavkyTepla($id)
    {
        $polozky = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Kontroling\NCT\PlanDodavkyTepla')
            ->getPlanDodavkyTepla($id);

        $models = [];
        foreach ($polozky as $planDodavkyTepla) {
            $models[] = $this->createPlanDodavkyTeplaApiModel($planDodavkyTepla);
        }

        return $this->createApiResponse($models);
    }

    private function createPlanDodavkyTeplaApiModel(PlanDodavkyTepla $planDodavkyTepla)
    {
        $model = new PlanDodavkyTeplaApiModel();

        $model->id = $planDodavkyTepla->getId();
//        $model->datum = $planDodavkyTepla->getDatum();
//        $model->hlavny = $planDodavkyTepla->getHlavny();
        $model->zdroj = $planDodavkyTepla->getZdroj();
        $model->v_kwh = $planDodavkyTepla->getVychodKwh();
        $model->z_kwh = $planDodavkyTepla->getZapadKwh();

        return $model;
    }
}
