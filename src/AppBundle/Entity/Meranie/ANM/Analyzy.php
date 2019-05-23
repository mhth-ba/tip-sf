<?php

namespace AppBundle\Entity\Meranie\ANM;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\ANM\AnalyzyRepository")
 * @ORM\Table(name="ANM_Analyzy", schema="Meranie")
 */
class Analyzy extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="guid")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", name="LogTime")
     */
    private $logTime;

    /**
     * @ORM\Column(type="datetime", name="ReadTime")
     */
    private $readTime;

    /**
     * @ORM\Column(type="string")
     */
    private $modul;

    /**
     * @ORM\Column(type="integer")
     */
    private $device;

    /**
     * @ORM\Column(type="string")
     */
    private $balance;

    /**
     * @ORM\Column(type="string", name="QUnit")
     */
    private $unit;

    /**
     * @ORM\Column(type="float", name="QEnergy")
     */
    private $energy;

    /**
     * @ORM\Column(type="float", name="QVolume")
     */
    private $volume;

    /**
     * @ORM\Column(type="float", name="MPower")
     */
    private $power;

    /**
     * @ORM\Column(type="float", name="MFlow")
     */
    private $flow;

    /**
     * @ORM\Column(type="float", name="TOutput")
     */
    private $output;

    /**
     * @ORM\Column(type="float", name="TReturn")
     */
    private $return;

    /**
     * @ORM\Column(type="float", name="DeltaT")
     */
    private $delta;

    /**
     * @ORM\Column(type="decimal", scale=10, precision=0, name="OM")
     */
    private $om;

    /**
     * @ORM\Column(type="decimal", scale=4, precision=0, name="COST")
     */
    private $ost;

    /**
     * @ORM\Column(type="string", name="AOST")
     */
    private $adresa;

    /**
     * @ORM\Column(type="string", name="Odb")
     */
    private $odberatel;

    /**
     * @ORM\Column(type="string", name="DT")
     */
    private $tarifa;

    /**
     * @ORM\Column(type="string", name="VC1")
     */
    private $vc;

    /**
     * @ORM\Column(type="string", name="MJ1")
     */
    private $mj;

    /**
     * @ORM\Column(type="smallint")
     */
    private $kat;

    public function getId()
    {
        return $this->id;
    }

    public function getLogTime()
    {
        return $this->getTimestampWithOffset($this->logTime);
    }

    public function getReadTime()
    {
        return $this->getTimestampWithOffset($this->readTime);
    }

    public function getModul()
    {
        return $this->modul;
    }

    public function getDevice()
    {
        return $this->device;
    }

    public function getBalance()
    {
        return $this->balance;
    }

    public function getUnit()
    {
        return $this->unit;
    }

    public function getEnergy()
    {
        return $this->energy;
    }

    public function getVolume()
    {
        return $this->volume;
    }

    public function getPower()
    {
        return $this->power;
    }

    public function getFlow()
    {
        return $this->flow;
    }

    public function getOutput()
    {
        return $this->output;
    }

    public function getReturn()
    {
        return $this->return;
    }

    public function getDelta()
    {
        return $this->delta;
    }

    public function getOm()
    {
        return $this->om;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function getAdresa()
    {
        return $this->adresa;
    }

    public function getOdberatel()
    {
        return $this->odberatel;
    }

    public function getTarifa()
    {
        return $this->tarifa;
    }

    public function getVc()
    {
        return $this->vc;
    }

    public function getMj()
    {
        return $this->mj;
    }

    public function getKat()
    {
        return $this->kat;
    }
}