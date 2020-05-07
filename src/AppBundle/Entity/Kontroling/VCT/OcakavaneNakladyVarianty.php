<?php

namespace AppBundle\Entity\Kontroling\VCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VCT\OcakavaneNakladyVariantyRepository")
 * @ORM\Table(name="VCT_OcakavaneNakladyVarianty", schema="Kontroling")
 */
class OcakavaneNakladyVarianty extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $datum;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\VCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\VCT\Variant")
     */
    private $variant;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Ucet")
     */
    private $ucet;

    /**
     * @ORM\Column(type="string")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=38, scale=10)
     */
    private $hodnota;


    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getVariant()
    {
        return $this->variant;
    }

    public function getUcet()
    {
        return $this->ucet;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }

    public function setHodnota($hodnota)
    {
        $this->hodnota = $hodnota;
    }
}