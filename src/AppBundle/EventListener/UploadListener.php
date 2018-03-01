<?php

namespace AppBundle\EventListener;

use AppBundle\Entity\Kontroling\SCT\Upload;
use Doctrine\Common\Persistence\ObjectManager;
use Oneup\UploaderBundle\Event\PostPersistEvent;
use Oneup\UploaderBundle\Event\PreUploadEvent;
use Symfony\Component\Filesystem\Filesystem;

class UploadListener
{
    private $objectManager;
    private $projectDir;

    public function __construct(ObjectManager $objectManager, $projectDir)
    {
        $this->objectManager = $objectManager;
        $this->projectDir = $projectDir;
    }

    public function preUpload(PreUploadEvent $event)
    {
        $file = $event->getFile();
        $request = $event->getRequest();

        // https://github.com/1up-lab/OneupUploaderBundle/issues/21
        $original = $file->getClientOriginalName();
        $request->attributes->set('original', $original);
    }

    public function onUpload(PostPersistEvent $event)
    {
        $request = $event->getRequest();
//        $original = $request->get('original');
        $subor = $event->getFile()->getFilename();

        // if everything went fine
        $response = $event->getResponse();
        $response['success'] = true;
        $response['filename'] = $subor;
        return $response;
    }
}