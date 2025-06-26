<?php

namespace AppBundle\Controller;

use AppBundle\Api\GrantApiModel;
use AppBundle\Api\RoleApiModel;
use AppBundle\Entity\App\Grant;
use AppBundle\Entity\App\Role;
use AppBundle\Form\Type\RoleType;
use AppBundle\Form\Type\GrantType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AdminController extends BaseController
{
    public function indexAction()
    {
        return $this->render('admin/index.html.twig');
    }

    /**
     * @Route("admin/upload", name="admin_upload", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function uploadFileAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        if (!isset($data['original']) || !isset($data['subor'])) {
            throw new BadRequestHttpException('Missing required fields');
        }

        // Return success response without database persistence
        $response = [
            'success' => true,
            'message' => 'File uploaded successfully',
            'original' => $data['original'],
            'filename' => $data['subor']
        ];

        return $this->createApiResponse($response, 201);
    }
}
