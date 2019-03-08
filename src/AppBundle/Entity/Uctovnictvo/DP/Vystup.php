<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\VystupRepository")
 * @ORM\Table(name="DP_Vystup", schema="Uctovnictvo")
 */
class Vystup extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Uctovnictvo\DP\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="string")
     */
    private $znak;

    /**
     * @ORM\Column(type="bigint")
     */
    private $doklad;

    /**
     * @ORM\Column(type="string")
     */
    private $referencia;

    /**
     * @ORM\Column(type="string", name="ObchodnyPartner")
     */
    private $obchodnyPartner;

    /**
     * @ORM\Column(type="string")
     */
    private $icdph;

    /**
     * @ORM\Column(type="string", name="DruhDokladu")
     */
    private $druhDokladu;

    /**
     * @ORM\Column(type="date", name="DatumDokladu")
     */
    private $datumDokladu;

    /**
     * @ORM\Column(type="date", name="DatumUctovania")
     */
    private $datumUctovania;

    /**
     * @ORM\Column(type="decimal", scale=12, precision=2, name="SumaBezDPH")
     */
    private $sumaBezDPH;

    /**
     * @ORM\Column(type="decimal", scale=12, precision=2, name="DPH")
     */
    private $DPH;

    /**
     * @ORM\Column(type="decimal", scale=12, precision=2, name="SumaSDPH")
     */
    private $sumaSDPH;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $upravil;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
    }

    public function getZnak()
    {
        return $this->znak;
    }

    public function setZnak($znak)
    {
        $this->znak = $znak;
    }

    public function getDoklad()
    {
        return $this->doklad;
    }

    public function setDoklad($doklad)
    {
        $this->doklad = $doklad;
    }

    public function getReferencia()
    {
        return $this->referencia;
    }

    public function setReferencia($referencia)
    {
        $this->referencia = $referencia;
    }

    public function getObchodnyPartner()
    {
        return $this->obchodnyPartner;
    }

    public function setObchodnyPartner($obchodnyPartner)
    {
        $this->obchodnyPartner = $obchodnyPartner;
    }

    public function getIcdph()
    {
        return $this->icdph;
    }

    public function setIcdph($icdph)
    {
        $this->icdph = $icdph;
    }

    public function getDruhDokladu()
    {
        return $this->druhDokladu;
    }

    public function setDruhDokladu($druhDokladu)
    {
        $this->druhDokladu = $druhDokladu;
    }

    public function getDatumDokladu()
    {
        return $this->getTimestampWithOffset($this->datumDokladu);
    }

    public function setDatumDokladu($datumDokladu)
    {
        $this->datumDokladu = $datumDokladu;
    }

    public function getDatumUctovania()
    {
        return $this->getTimestampWithOffset($this->datumUctovania);
    }

    public function setDatumUctovania($datumUctovania)
    {
        $this->datumUctovania = $datumUctovania;
    }

    public function getSumaBezDph()
    {
        return $this->sumaBezDPH;
    }

    public function setSumaBezDPH($sumaBezDPH)
    {
        $this->sumaBezDPH = $sumaBezDPH;
    }

    public function getDph()
    {
        return $this->DPH;
    }

    public function setDPH($DPH)
    {
        $this->DPH = $DPH;
    }

    public function getSumaSDph()
    {
        return $this->sumaSDPH;
    }

    public function setSumaSDPH($sumaSDPH)
    {
        $this->sumaSDPH = $sumaSDPH;
    }

    public function getVytvoril()
    {
        return $this->vytvoril;
    }

    public function setVytvoril($vytvoril)
    {
        $this->vytvoril = $vytvoril;
    }

    public function getUpravil()
    {
        return $this->upravil;
    }

    public function setUpravil($upravil)
    {
        $this->upravil = $upravil;
    }
}