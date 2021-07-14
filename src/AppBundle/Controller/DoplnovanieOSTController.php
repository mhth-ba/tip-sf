<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class DoplnovanieOSTController extends BaseController
{
    public function indexAction()
    {
        return $this->render('disp/doplnovanie-ost/index.html.twig');
    }

    /**
     * @Route("doo/dop_odp", name="doo_doplnovanie_odpustanie_get", options={"expose"=true})
     * @Method("POST")
     */
    public function getDoplnovanieOdpustanieAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $obdobie = $this->getObdobie($data);

        $from = $obdobie['from'];
        $to = $obdobie['to'];

        $repository = $this->getDoctrine()->getManager()
            ->getRepository('AppBundle:Dispecing\DOO\DoplnovanieOST')
            ->findDoplnovanieOdpustanieByRokMesiac($from, $to);

        return $this->createApiResponse([
            $repository,
            $from,
            $to
        ]);
    }

    private function getObdobie($data)
    {
        $start = $data['rok'] . "-" . $data['mesiac'] . "-01";
        $end = $data['rok'] . "-" . $data['mesiac'] . "-31";

        $from = \DateTime::createFromFormat('Y-m-d', $start);
        $to = \DateTime::createFromFormat('Y-m-d', $end);

        return array(
            'from' => $from,
            'to' => $to
        );
    }
}
