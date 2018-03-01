<?php

namespace AppBundle\Entity\RIS;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RIS\SkupinaRepository")
 * @ORM\Table(name="SH_Skupina", schema="RIS")
 */
class Skupina
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $skupina;

    public function getId()
    {
        return $this->id;
    }

    public function getSkupina()
    {
        return $this->skupina;
    }

    public function setSkupina($skupina)
    {
        $this->skupina = $skupina;
    }
}