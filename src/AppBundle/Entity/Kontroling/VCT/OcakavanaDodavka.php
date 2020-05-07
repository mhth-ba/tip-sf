<?php

namespace AppBundle\Entity\Kontroling\VCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VCT\OcakavanaDodavkaRepository")
 * @ORM\Table(name="VCT_OcakavanaDodavka", schema="Kontroling")
 */
class OcakavanaDodavka extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Zdroj")
     */
    private $zdroj;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Plan_kWh")
     */
    private $plan_kwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Plan_kW")
     */
    private $plan_kw;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Skut_kWh")
     */
    private $skut_kwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Skut_kW")
     */
    private $skut_kw;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="PlanX_kWh")
     */
    private $planx_kwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="PlanX_kW")
     */
    private $planx_kw;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Rok_kWh")
     */
    private $rok_kwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Rok_kW")
     */
    private $rok_kw;

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

    public function getZdroj()
    {
        return $this->zdroj;
    }

    public function getPlanKwh()
    {
        return $this->plan_kwh;
    }

    public function getPlanKw()
    {
        return $this->plan_kw;
    }

    public function getSkutKwh()
    {
        return $this->skut_kwh;
    }

    public function getSkutKw()
    {
        return $this->skut_kw;
    }

    public function getPlanxKwh()
    {
        return $this->planx_kwh;
    }

    public function getPlanxKw()
    {
        return $this->planx_kw;
    }

    public function getRokKwh()
    {
        return $this->rok_kwh;
    }

    public function getRokKw()
    {
        return $this->rok_kw;
    }
}