<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\KonstantyRepository")
 * @ORM\Table(name="DPP_Konstanty", schema="Efektivnost")
 */
class Konstanty extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Efektivnost\DPP\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="integer", name="VykonMaxTpV")
     */
    private $vykon_max_tpv;

    /**
     * @ORM\Column(type="integer", name="VykonMaxTpZ")
     */
    private $vykon_max_tpz;

    /**
     * @ORM\Column(type="decimal", precision=4, scale=2, name="KrivkaVychod")
     */
    private $krivka_vychod;

    /**
     * @ORM\Column(type="decimal", precision=4, scale=2, name="KrivkaZapad")
     */
    private $krivka_zapad;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=4, name="VyhrevnostZP")
     */
    private $vyhrevnost_zp;

    /**
     * @ORM\Column(type="integer", name="UcinnostTpV")
     */
    private $ucinnost_tpv;

    /**
     * @ORM\Column(type="integer", name="UcinnostVhJ")
     */
    private $ucinnost_vhj;

    /**
     * @ORM\Column(type="integer", name="UcinnostTpZ")
     */
    private $ucinnost_tpz;

    /**
     * @ORM\Column(type="integer", name="DMMTpV")
     */
    private $dmm_tpv;

    /**
     * @ORM\Column(type="integer", name="DMMVhJ")
     */
    private $dmm_vhj;

    /**
     * @ORM\Column(type="integer", name="DMMTpZ")
     */
    private $dmm_tpz;

    /**
     * @ORM\Column(type="integer", name="DMMLimit")
     */
    private $dmm_limit;

    /**
     * @ORM\Column(type="integer", name="PPCMin")
     */
    private $ppc_min;

    /**
     * @ORM\Column(type="integer", name="PPCMax")
     */
    private $ppc_max;

    /**
     * @ORM\Column(type="integer", name="SlovnaftMin")
     */
    private $slovnaft_min;

    /**
     * @ORM\Column(type="integer", name="SlovnaftMax")
     */
    private $slovnaft_max;

    /**
     * @ORM\Column(type="integer", name="PPCPara")
     */
    private $ppc_para;

    /**
     * @ORM\Column(type="integer", name="PPCZmluva")
     */
    private $ppc_zmluva;

    /**
     * @ORM\Column(type="integer", name="PPCHV")
     */
    private $ppc_hv;

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

    public function getVykonMaxTpv()
    {
        return $this->vykon_max_tpv;
    }

    public function setVykonMaxTpv($vykon_max_tpv)
    {
        $this->vykon_max_tpv = $vykon_max_tpv;
    }

    public function getVykonMaxTpz()
    {
        return $this->vykon_max_tpz;
    }

    public function setVykonMaxTpz($vykon_max_tpz)
    {
        $this->vykon_max_tpz = $vykon_max_tpz;
    }

    public function getKrivkaVychod()
    {
        return $this->krivka_vychod;
    }

    public function setKrivkaVychod($krivka_vychod)
    {
        $this->krivka_vychod = $krivka_vychod;
    }

    public function getKrivkaZapad()
    {
        return $this->krivka_zapad;
    }

    public function setKrivkaZapad($krivka_zapad)
    {
        $this->krivka_zapad = $krivka_zapad;
    }

    public function getVyhrevnostZp()
    {
        return $this->vyhrevnost_zp;
    }

    public function setVyhrevnostZp($vyhrevnost_zp)
    {
        $this->vyhrevnost_zp = $vyhrevnost_zp;
    }

    public function getUcinnostTpv()
    {
        return $this->ucinnost_tpv;
    }

    public function setUcinnostTpv($ucinnost_tpv)
    {
        $this->ucinnost_tpv = $ucinnost_tpv;
    }

    public function getUcinnostVhj()
    {
        return $this->ucinnost_vhj;
    }

    public function setUcinnostVhj($ucinnost_vhj)
    {
        $this->ucinnost_vhj = $ucinnost_vhj;
    }

    public function getUcinnostTpz()
    {
        return $this->ucinnost_tpz;
    }

    public function setUcinnostTpz($ucinnost_tpz)
    {
        $this->ucinnost_tpz = $ucinnost_tpz;
    }

    public function getDmmTpv()
    {
        return $this->dmm_tpv;
    }

    public function setDmmTpv($dmm_tpv)
    {
        $this->dmm_tpv = $dmm_tpv;
    }

    public function getDmmVhj()
    {
        return $this->dmm_vhj;
    }

    public function setDmmVhj($dmm_vhj)
    {
        $this->dmm_vhj = $dmm_vhj;
    }

    public function getDmmTpz()
    {
        return $this->dmm_tpz;
    }

    public function setDmmTpz($dmm_tpz)
    {
        $this->dmm_tpz = $dmm_tpz;
    }

    public function getDmmLimit()
    {
        return $this->dmm_limit;
    }

    public function setDmmLimit($dmm_limit)
    {
        $this->dmm_limit = $dmm_limit;
    }

    public function getPpcMin()
    {
        return $this->ppc_min;
    }

    public function setPpcMin($ppc_min)
    {
        $this->ppc_min = $ppc_min;
    }

    public function getPpcMax()
    {
        return $this->ppc_max;
    }

    public function setPpcMax($ppc_max)
    {
        $this->ppc_max = $ppc_max;
    }

    public function getSlovnaftMin()
    {
        return $this->slovnaft_min;
    }

    public function setSlovnaftMin($slovnaft_min)
    {
        $this->slovnaft_min = $slovnaft_min;
    }

    public function getSlovnaftMax()
    {
        return $this->slovnaft_max;
    }

    public function setSlovnaftMax($slovnaft_max)
    {
        $this->slovnaft_max = $slovnaft_max;
    }

    public function getPpcPara()
    {
        return $this->ppc_para;
    }

    public function setPpcPara($ppc_para)
    {
        $this->ppc_para = $ppc_para;
    }

    public function getPpcZmluva()
    {
        return $this->ppc_zmluva;
    }

    public function setPpcZmluva($ppc_zmluva)
    {
        $this->ppc_zmluva = $ppc_zmluva;
    }

    public function getPpcHv()
    {
        return $this->ppc_hv;
    }

    public function setPpcHv($ppc_hv)
    {
        $this->ppc_hv = $ppc_hv;
    }
}