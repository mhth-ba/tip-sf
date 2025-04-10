<?php

namespace AppBundle\Controller;

use AppBundle\Entity\App\ActivityLog;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class BaseController extends Controller
{
    /**
     * @param mixed $data Usually an object you want to serialize
     * @param int $statusCode
     * @return JsonResponse
     */
    protected function createApiResponse($data, $statusCode = 200)
    {
        $encoder = new JsonEncoder();
        $normalizer = new ObjectNormalizer(null, new CamelCaseToSnakeCaseNameConverter());

        $normalizer->setCircularReferenceHandler(function ($object) {
            //return $object->getId();
        });

        $serializer = new Serializer(array($normalizer), array($encoder));
        $json = $serializer->serialize($data, 'json');

        /*$json = $this->get('serializer')
            ->serialize($data, 'json');*/

        $response = new JsonResponse($json, $statusCode, [], true);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);

        return $response;
    }

    protected function processForm(Request $request, FormInterface $form)
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new Exception('Invalid JSON format sent');
        }

        $clearMissing = $request->getMethod() != 'PATCH';
        $form->submit($data, $clearMissing);
    }

    protected function getErrorsFromForm(FormInterface $form)
    {
        foreach ($form->getErrors() as $error) {
            // only supporting 1 error per field
            // and not supporting a "field" with errors, that has more
            // fields with errors bellow it
            return $error->getMessage();
        }

        $errors = array();
        foreach ($form->all() as $childForm) {
            if ($childForm instanceof FormInterface) {
                if ($childError = $this->getErrorsFromForm($childForm)) {
                    $errors[$childForm->getName()] = $childError;
                }
            }
        }

        return $errors;
    }

    /**
     * @param $sub String Subdirectory of folder with existing uploaded files
     * @param $file String Filename itself
     * @param $orig String Original filename uploaded by user
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    protected function downloadFile($sub, $file, $orig, $disposition = ResponseHeaderBag::DISPOSITION_INLINE)
    {
        $path = $this->container->getParameter('kernel.project_dir')
            .'/web/uploads'
            ."/$sub"
            ."/$file";

        return $this->file($path, $orig, $disposition);
    }

    /**
     * Performs update of entry in SQL database
     *
     * @param $id
     * @param string $className Fully-qualified classname without a leading backslash
     * @param string $type Form type
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    protected function updateDatabase($id, $className, $type, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $entry = $em->getRepository($className)->find($id);

        if (!$entry) {
            throw $this->createNotFoundException(sprintf(
                'Záznam s id %s sa nenašiel',
                $id
            ));
        }

        $form = $this->createForm($type, $entry);
        $this->processForm($request, $form);

        if (!$form->isValid()) {
            $this->createApiResponse($form->getErrors(), 400);
        }

        $em->persist($entry);
        $em->flush();

        $metadata = $em->getClassMetadata($className);
        $this->logUpdateActivity($metadata, $request);

        return $this->createApiResponse($entry, 200);
    }

    /**
     * Marks entry as deleted in SQL database on column Vymazal_ID
     *
     * @param $id
     * @param string $className Fully-qualified classname without a leading backslash
     *
     * @return JsonResponse \Symfony\Component\HttpFoundation\JsonResponse
     */
    protected function markAsDeleted($id, $className)
    {
        $em = $this->getDoctrine()->getManager();

        $entry = $em->getRepository($className)->find($id);

        if (!$entry) {
            throw $this->createNotFoundException(sprintf(
                'Záznam s id %s sa nenašiel',
                $id
            ));
        }

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);

        $entry->setVymazal($user);

        $em->persist($entry);
        $em->flush();

        $metadata = $em->getClassMetadata($className);
        $this->logMarkAsDeletedActivity($metadata, $id);

        return $this->createApiResponse(null, 204);
    }

    /**
     * Performs delete of entry in SQL database
     *
     * @param $id
     * @param $className Fully-qualified classname without a leading backslash
     * @param Request $request
     *
     * @return JsonResponse \Symfony\Component\HttpFoundation\JsonResponse
     */
    protected function deleteFromDatabase($id, $className, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $entry = $em->getRepository($className)->find($id);

        if (!$entry) {
            throw $this->createNotFoundException(sprintf(
                'Záznam s id %s sa nenašiel',
                $id
            ));
        }

        $em->remove($entry);
        $em->flush();

        $metadata = $em->getClassMetadata($className);
        $this->logDeleteActivity($metadata, $id);

        return $this->createApiResponse(null, 204);
    }

    /**
     * Writes log about uploaded file in SQL database
     *
     * @param $id
     * @param $className Fully-qualified classname without a leading backslash
     */
    protected function logUploadFileActivity($id, $className)
    {
        $em = $this->getDoctrine()->getManager();

        $entry = $em->getRepository($className)->find($id);

        if (!$entry) {
            throw $this->createNotFoundException(sprintf(
                'Záznam s id %s sa nenašiel',
                $id
            ));
        }

        $metadata = $em->getClassMetadata($className);

        $log = new ActivityLog();

        $log->setSchema($metadata->getSchemaName());
        $log->setTable($metadata->getTableName());
        $log->setRow($id);
        $log->setValue('UPLOAD FILE');

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $log->setUser($user);

        $em->persist($log);
        $em->flush();
    }

    /**
     * Writes log about deleted file in SQL database
     *
     * @param $id integer Row ID
     * @param $metadata \Doctrine\Common\Persistence\Mapping\ClassMetadataFactory
     */
    protected function logDeleteFileActivity($id, $metadata)
    {
        $em = $this->getDoctrine()->getManager();

        $log = new ActivityLog();

        $log->setSchema($metadata->getSchemaName());
        $log->setTable($metadata->getTableName());
        $log->setRow($id);
        $log->setValue('DELETE FILE');

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $log->setUser($user);

        $em->persist($log);
        $em->flush();
    }

    /**
     * Writes log about created entry in SQL database
     *
     * @param $id
     * @param $className Fully-qualified classname without a leading backslash
     */
    protected function logCreateActivity($id, $className)
    {
        $em = $this->getDoctrine()->getManager();

        $entry = $em->getRepository($className)->find($id);

        if (!$entry) {
            throw $this->createNotFoundException(sprintf(
                'Záznam s id %s sa nenašiel',
                $id
            ));
        }

        $metadata = $em->getClassMetadata($className);

        $log = new ActivityLog();

        $log->setSchema($metadata->getSchemaName());
        $log->setTable($metadata->getTableName());
        $log->setRow($id);
        $log->setValue('CREATE ENTRY');

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $log->setUser($user);

        $em->persist($log);
        $em->flush();
    }

    /**
     * Writes log about updated entry in SQL database
     *
     * @param $metadata \Doctrine\Common\Persistence\Mapping\ClassMetadataFactory
     * @param Request $request HTTP request
     */
    protected function logUpdateActivity($metadata, Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $log = new ActivityLog();

        $log->setSchema($metadata->getSchemaName());
        $log->setTable($metadata->getTableName());

        // predpokladá sa, že patch request obsahuje iba dve polia: ID a novú hodnotu s názvom stĺpca
        $data = json_decode($request->getContent(), true);
        foreach ($data as $key => $val) {
            if ($key === 'id') {
                $log->setRow($val);
            } else if ($key !== 'key') {
                $log->setColumn($key);
                $log->setValue($val);
            }
        }

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $log->setUser($user);

        $em->persist($log);
        $em->flush();
    }

    protected function logMarkAsDeletedActivity($metadata, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $log = new ActivityLog();

        $log->setSchema($metadata->getSchemaName());
        $log->setTable($metadata->getTableName());
        $log->setRow($id);
        $log->setValue('MARK DELETED ENTRY');

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $log->setUser($user);

        $em->persist($log);
        $em->flush();
    }

    /**
     * Writes log about deleted entry in SQL database
     *
     * @param $metadata \Doctrine\Common\Persistence\Mapping\ClassMetadataFactory
     * @param $id integer Row ID
     */
    protected function logDeleteActivity($metadata, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $log = new ActivityLog();

        $log->setSchema($metadata->getSchemaName());
        $log->setTable($metadata->getTableName());
        $log->setRow($id);
        $log->setValue('DELETE ENTRY');

        $userId = $this->getUser()->getId();
        $user = $em->getRepository('AppBundle:App\User')
            ->find($userId);
        $log->setUser($user);

        $em->persist($log);
        $em->flush();
    }
}