<?php

namespace AppBundle\Entity\Kontroling\VCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VCT\SkutocneNakladyRepository")
 * @ORM\Table(name="VCT_SkutocneNaklady", schema="Kontroling")
 */
class SkutocneNaklady extends BaseEntity
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
     * @ORM\Column(type="boolean", name="Valid")
     */
    private $platne;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\VCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Ucet")
     */
    private $ucet;

    /**
     * @ORM\Column(type="string")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpv_p;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpv_k;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpz_p;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpz_k;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $vhj;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $pk;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $primar;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $ost;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $sekundar;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $rezijne;

    /**
     * @ORM\Column(type="decimal", precision=38, scale=10)
     */
    private $spolu;

    /**
     * @ORM\Column(type="decimal", precision=38, scale=10)
     */
    private $zadane;


    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getPlatne()
    {
        return $this->platne;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getUcet()
    {
        return $this->ucet;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getTpvP()
    {
        return $this->tpv_p;
    }

    public function setTpvP($tpv_p)
    {
        $this->tpv_p = $tpv_p;
    }

    public function getTpvK()
    {
        return $this->tpv_k;
    }

    public function setTpvK($tpv_k)
    {
        $this->tpv_k = $tpv_k;
    }

    public function getTpzP()
    {
        return $this->tpz_p;
    }

    public function setTpzP($tpz_p)
    {
        $this->tpz_p = $tpz_p;
    }

    public function getTpzK()
    {
        return $this->tpz_k;
    }

    public function setTpzK($tpz_k)
    {
        $this->tpz_k = $tpz_k;
    }

    public function getVhj()
    {
        return $this->vhj;
    }

    public function setVhj($vhj)
    {
        $this->vhj = $vhj;
    }

    public function getPk()
    {
        return $this->pk;
    }

    public function getPrimar()
    {
        return $this->primar;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function getSekundar()
    {
        return $this->sekundar;
    }

    public function getRezijne()
    {
        return $this->rezijne;
    }

    public function setRezijne($rezijne)
    {
        $this->rezijne = $rezijne;
    }

    public function getSpolu()
    {
        return $this->spolu;
    }

    public function getZadane()
    {
        return $this->zadane;
    }

    public function setZadane($zadane)
    {
        $this->zadane = $zadane;
    }
}