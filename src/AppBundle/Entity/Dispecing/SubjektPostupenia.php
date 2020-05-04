<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\SubjektPostupeniaRepository")
 * @ORM\Table(name="_RefSubjektPostupenia", schema="Dispecing")
 */
class SubjektPostupenia
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $subjekt;

    public function getId()
    {
        return $this->id;
    }

    public function getSubjekt()
    {
        return $this->subjekt;
    }

    public function setSubjekt($subjekt)
    {
        $this->subjekt = $subjekt;
    }
}