<?php

namespace AppBundle\Entity\RIS;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RIS\MiestoRepository")
 * @ORM\Table(name="SH_Miesto", schema="RIS")
 */
class Miesto
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $miesto;

    public function getId()
    {
        return $this->id;
    }

    public function getMiesto()
    {
        return $this->miesto;
    }

    public function setMiesto($miesto)
    {
        $this->miesto = $miesto;
    }
}