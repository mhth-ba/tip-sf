<?php

namespace AppBundle\Entity\Kontroling\SCT;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\UcetRepository")
 * @ORM\Table(name="_RefUcet", schema="Kontroling")
 */
class Ucet
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