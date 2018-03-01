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
        $formRole = $this->createForm(RoleType::class);
        $formGrants = $this->createForm(GrantType::class);

        return $this->render('admin/index.html.twig', [
            'formRole' => $formRole->createView(),
            'formGrants' => $formGrants->createView(),
            'roles' => $this->getRolesAction(),
            'grants' => $this->getGrantsAction()
        ]);
    }

    /**
     * @Route("/admin/roles", name="admin_roles_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function getRolesAction()
    {
        $roles = $this->getDoctrine()->getRepository('AppBundle:App\Role')
            ->findAll();

        $models = [];
        foreach ($roles as $role) {
            $models[] = $this->createRoleApiModel($role);
        }

        return $this->createApiResponse([
            'items' => $models
        ]);
    }

    /**
     * @Route("/admin/roles/{id}", name="admin_roles_get")
     * @Method("GET")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function getRoleAction(Role $role)
    {
        $apiModel = $this->createRoleApiModel($role);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("/admin/roles/{id}", name="admin_roles_delete")
     * @Method("DELETE")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function deleteRoleAction(Role $role)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($role);
        $em->flush();

        return new Response(null, 204);
    }

    /**
     * @Route("/admin/roles", name="admin_roles_new", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function newRoleAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $form = $this->createForm(RoleType::class);
        $form->submit($data);
        if (!$form->isValid()) {
            $errors = $this->getErrorsFromForm($form);

            return $this->createApiResponse([
                'errors' => $errors
            ], 400);
        }

        /** @var Role $role */
        $role = $form->getData();

        $em = $this->getDoctrine()->getManager();
        $em->persist($role);
        $em->flush();

        $apiModel = $this->createRoleApiModel($role);

        //$response = $this->createApiResponse($apiModel);
        $response = new Response(null, 204);
        // setting the Location header... it's a best-practice
        $response->headers->set(
            'Location',
            $this->generateUrl('admin_roles_get', ['id' => $role->getId()])
        );

        return $response;
    }

    /**
     * @Route("/admin/grants", name="admin_grants_list", options={"expose"=true})
     * @Method("GET")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function getGrantsAction()
    {
        $grants = $this->getDoctrine()->getRepository('AppBundle:App\Grant')
            ->findAllGrantedRoles();

        $models = [];
        foreach ($grants as $grant) {
            $models[] = $this->createGrantApiModel($grant);
        }

        return $this->createApiResponse([
            'items' => $models
        ]);
    }

    /**
     * @Route("/admin/grants/{id}", name="admin_grants_get")
     * @Method("GET")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function getGrantAction(Grant $grant)
    {
        $apiModel = $this->createGrantApiModel($grant);

        return $this->createApiResponse($apiModel);
    }

    /**
     * @Route("/admin/grants/{id}", name="admin_grants_delete")
     * @Method("DELETE")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function deleteGrantAction(Grant $grant)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($grant);
        $em->flush();

        return new Response(null, 204);
    }

    /**
     * @Route("/admin/grants", name="admin_grants_new", options={"expose"=true})
     * @Method("POST")
     * @Security("has_role('ROLE_ADMIN')")
     */
    public function newGrantAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new BadRequestHttpException('Invalid JSON');
        }

        $form = $this->createForm(GrantType::class);
        $form->submit($data);
        if (!$form->isValid()) {
            $errors = $this->getErrorsFromForm($form);

            return $this->createApiResponse([
                'errors' => $errors
            ], 400);
        }

        /** @var Grant $grant */
        $grant = $form->getData();

        $em = $this->getDoctrine()->getManager();
        $em->persist($grant);
        $em->flush();

        $this->createGrantApiModel($grant);

        $response = new Response(null, 204);
        $response->headers->set(
            'Location',
            $this->generateUrl('admin_grants_get', ['id' => $grant->getId()])
        );

        return $response;
    }

    private function createRoleApiModel(Role $role)
    {
        $model = new RoleApiModel();
        $model->id = $role->getId();
        $model->name = $role->getName();
        $model->role = $role->getRole();
        $model->description = $role->getDescription();

        $selfUrl = $this->generateUrl(
            'admin_roles_get',
            ['id' => $role->getId()]
        );
        $model->addLink('_self', $selfUrl);

        return $model;
    }

    private function createGrantApiModel(Grant $grant)
    {
        $model = new GrantApiModel();
        $model->createdAt = $grant->getCreatedAt();
        $model->user = $grant->getUsers();
        $model->role = $grant->getRoles();

        $selfUrl = $this->generateUrl(
            'admin_grants_get',
            ['id' => $grant->getId()]
        );
        $model->addLink('_self', $selfUrl);

        return $model;
    }
}
