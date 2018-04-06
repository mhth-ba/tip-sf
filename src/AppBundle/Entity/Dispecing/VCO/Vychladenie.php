<?php

namespace AppBundle\Entity\Dispecing\VCO;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\VCO\VychladenieRepository")
 * @ORM\Table(name="OST_Vychladenie", schema="Dispecing")
 */
class Vychladenie
{
    /**
     * @ORM\Column(type="bigint", name="OM")
     */
    private $om;

    /**
     * @ORM\Column(type="smallint", name="COST")
     */
    private $ost;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer", name="MP")
     */
    private $mp;

    /**
     * @ORM\Column(type="string", name="Odb")
     */
    private $odberatel;

    /**
     * @ORM\Column(type="string", name="AOST")
     */
    private $adresa;

    /**
     * @ORM\Column(type="string", name="DT")
     */
    private $tarifa;

    /**
     * @ORM\Column(type="datetime", name="FirstDay")
     */
    private $prvyDen;

    /**
     * @ORM\Column(type="datetime", name="LastDay")
     */
    private $poslednyDen;

    /**
     * @ORM\Id
     * @ORM\Column(type="smallint", name="DateYear")
     */
    private $rok;

    /**
     * @ORM\Id
     * @ORM\Column(type="smallint", name="DateMonth")
     */
    private $mesiac;

    /**
     * @ORM\Column(type="float", name="Energy_1")
     */
    private $stavEnergiePrvyDen;

    /**
     * @ORM\Column(type="float", name="Energy_2")
     */
    private $stavEnergiePoslednyDen;

    /**
     * @ORM\Column(type="float", name="ConsumeEnergy")
     */
    private $spotrebaEnergie;

    /**
     * @ORM\Column(type="float", name="Volume_1")
     */
    private $stavObjemuPrvyDen;

    /**
     * @ORM\Column(type="float", name="Volume_2")
     */
    private $stavObjemuPoslednyDen;

    /**
     * @ORM\Column(type="float", name="ConsumeVolume")
     */
    private $spotrebaObjemu;

    /**
     * @ORM\Column(type="float", name="Cooling")
     */
    private $vychladenie;

    /**
     * @ORM\Column(type="float", name="Impact")
     */
    private $vplyv;

    public function getOm()
    {
        return $this->om;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function getMp()
    {
        return $this->mp;
    }

    public function getOdberatel()
    {
        return $this->odberatel;
    }

    public function getAdresa()
    {
        return $this->adresa;
    }

    public function getTarifa()
    {
        return $this->tarifa;
    }

    public function getPrvyDen()
    {
        return $this->prvyDen;
    }

    public function getPoslednyDen()
    {
        return $this->poslednyDen;
    }

    public function getRok()
    {
        return $this->rok;
    }

    public function getMesiac()
    {
        return $this->mesiac;
    }

    public function getStavEnergiePrvyDen()
    {
        return $this->stavEnergiePrvyDen;
    }

    public function getStavEnergiePoslednyDen()
    {
        return $this->stavEnergiePoslednyDen;
    }

    public function getSpotrebaEnergie()
    {
        return $this->spotrebaEnergie;
    }

    public function getStavObjemuPrvyDen()
    {
        return $this->stavObjemuPrvyDen;
    }

    public function getStavObjemuPoslednyDen()
    {
        return $this->stavObjemuPoslednyDen;
    }

    public function getSpotrebaObjemu()
    {
        return $this->spotrebaObjemu;
    }

    public function getVychladenie()
    {
        return $this->vychladenie;
    }

    public function getVplyv()
    {
        return $this->vplyv;
    }
}