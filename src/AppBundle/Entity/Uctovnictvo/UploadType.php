<?php

namespace AppBundle\Entity\Uctovnictvo;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\UploadTypeRepository")
 * @ORM\Table(name="_RefUpload", schema="Uctovnictvo")
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