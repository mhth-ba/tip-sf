<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\ZemnyPlynRepository")
 * @ORM\Table(name="SCT_ZemnyPlyn", schema="Kontroling")
 */
class ZemnyPlyn extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Zdroj")
     */
    private $zdroj;

    /**
     * @ORM\Column(type="smallint")
     */
    private $mesiac;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $objem_m3;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $objem_mwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $fmso;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $fmsp;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $fmsd;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $vsd;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $dan_mwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $dan_eur;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $pdm;


    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getZdroj()
    {
        return $this->zdroj;
    }

    public function getMesiac()
    {
        return $this->mesiac;
    }

    public function getObjemM3()
    {
        return $this->objem_m3;
    }

    public function setObjemM3($objem_m3)
    {
        $this->objem_m3 = $objem_m3;
    }

    public function getObjemMwh()
    {
        return $this->objem_mwh;
    }

    public function setObjemMwh($objem_mwh)
    {
        $this->objem_mwh = $objem_mwh;
    }

    public function getFmso()
    {
        return $this->fmso;
    }

    public function setFmso($fmso)
    {
        $this->fmso = $fmso;
    }

    public function getFmsp()
    {
        return $this->fmsp;
    }

    public function setFmsp($fmsp)
    {
        $this->fmsp = $fmsp;
    }

    public function getFmsd()
    {
        return $this->fmsd;
    }

    public function setFmsd($fmsd)
    {
        $this->fmsd = $fmsd;
    }

    public function getVsd()
    {
        return $this->vsd;
    }

    public function setVsd($vsd)
    {
        $this->vsd = $vsd;
    }

    public function getDanMwh()
    {
        return $this->dan_mwh;
    }

    public function setDanMwh($dan_mwh)
    {
        $this->dan_mwh = $dan_mwh;
    }

    public function getDanEur()
    {
        return $this->dan_eur;
    }

    public function setDanEur($dan_eur)
    {
        $this->dan_eur = $dan_eur;
    }

    public function getPdm()
    {
        return $this->pdm;
    }

    public function setPdm($pdm)
    {
        $this->pdm = $pdm;
    }
}