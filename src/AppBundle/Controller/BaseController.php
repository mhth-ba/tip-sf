<?php

namespace AppBundle\Controller;

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
    protected function downloadFile($sub, $file, $orig)
    {
        $path = $this->container->getParameter('kernel.project_dir')
            .'/web/uploads'
            ."/$sub"
            ."/$file";

        return $this->file($path, $orig, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}