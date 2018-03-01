<?php

namespace AppBundle\Entity\RIS;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RIS\RiesitelRepository")
 * @ORM\Table(name="SH_Riesitel", schema="RIS")
 */
class Riesitel
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $riesitel;

    public function getId()
    {
        return $this->id;
    }

    public function getRiesitel()
    {
        return $this->riesitel;
    }

    public function setRiesitel($riesitel)
    {
        $this->riesitel = $riesitel;
    }
}