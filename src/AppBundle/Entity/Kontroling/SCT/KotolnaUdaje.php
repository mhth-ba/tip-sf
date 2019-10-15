<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\KotolnaUdajeRepository")
 * @ORM\Table(name="SCT_KotolnaUdaje", schema="Kontroling")
 */
class KotolnaUdaje extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Kotolna")
     */
    private $kotolna;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $m3;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $mwh;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $nbsd;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $sd;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $pdm;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $z_kwh;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $p_kwh;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getKotolna()
    {
        return $this->kotolna;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getM3()
    {
        return $this->m3;
    }

    public function setM3($m3)
    {
        $this->m3 = $m3;
    }

    public function getMwh()
    {
        return $this->mwh;
    }

    public function setMwh($mwh)
    {
        $this->mwh = $mwh;
    }

    public function getNbsd()
    {
        return $this->nbsd;
    }

    public function setNbsd($nbsd)
    {
        $this->nbsd = $nbsd;
    }

    public function getSd()
    {
        return $this->sd;
    }

    public function setSd($sd)
    {
        $this->sd = $sd;
    }

    public function getPdm()
    {
        return $this->pdm;
    }

    public function setPdm($pdm)
    {
        $this->pdm = $pdm;
    }

    public function getZKwh()
    {
        return $this->z_kwh;
    }

    public function setZKwh($z_kwh)
    {
        $this->z_kwh = $z_kwh;
    }

    public function getPKwh()
    {
        return $this->p_kwh;
    }

    public function setPKwh($p_kwh)
    {
        $this->p_kwh = $p_kwh;
    }
}