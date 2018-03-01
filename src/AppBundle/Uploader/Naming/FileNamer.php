<?php

namespace AppBundle\Uploader\Naming;

use Oneup\UploaderBundle\Uploader\File\FileInterface;
use Oneup\UploaderBundle\Uploader\Naming\NamerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class FileNamer implements NamerInterface
{
    private $tokenStorage;

    public function __construct(TokenStorage $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    /**
     * Name a given file and return the name
     * Creates a user directory name for the file being uploaded
     *
     * @param  FileInterface $file
     * @return string The directory/file name
     */
    public function name(FileInterface $file)
    {
        $userId = $this->tokenStorage->getToken()->getUsername();

        $subor = sprintf('%s/%s.%s',
            $userId,
            uniqid(),
            $file->getExtension()
        );

        $file = sprintf('%s.%s',
            uniqid(),
            $file->getExtension());

        return $file;
    }
}