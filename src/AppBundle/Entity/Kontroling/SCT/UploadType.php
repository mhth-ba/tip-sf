<?php

namespace AppBundle\Entity\Kontroling\SCT;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\UploadTypeRepository")
 * @ORM\Table(name="_RefUpload", schema="Kontroling")
 */
class UploadType
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    public function getId()
    {
        return $this->id;
    }

    public function getNazov()
    {
        return $this->nazov;
    }
}