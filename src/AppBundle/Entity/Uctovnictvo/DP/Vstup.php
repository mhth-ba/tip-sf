<?php

namespace AppBundle\Entity\Uctovnictvo\DP;
use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\VstupRepository")
 * @ORM\Table(name="DP_Vstup_Z", schema="Uctovnictvo")
 */
class Vstup extends BaseEntity
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
     * @ORM\Column(type="integer")
     */
    private $zmenene;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getZnak()
    {
        return $this->znak;
    }

    public function getDoklad()
    {
        return $this->doklad;
    }

    public function getReferencia()
    {
        return $this->referencia;
    }

    public function getObchodnyPartner()
    {
        return $this->obchodnyPartner;
    }

    public function getIcdph()
    {
        return $this->icdph;
    }

    public function getDruhDokladu()
    {
        return $this->druhDokladu;
    }

    public function getDatumDokladu()
    {
        return $this->getTimestampWithOffset($this->datumDokladu);
    }

    public function getDatumUctovania()
    {
        return $this->getTimestampWithOffset($this->datumUctovania);
    }

    public function getSumaBezDph()
    {
        return $this->sumaBezDPH;
    }

    public function getDph()
    {
        return $this->DPH;
    }

    public function getSumaSDph()
    {
        return $this->sumaSDPH;
    }

    public function getZmenene()
    {
        return $this->zmenene;
    }
}