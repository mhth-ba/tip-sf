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
}