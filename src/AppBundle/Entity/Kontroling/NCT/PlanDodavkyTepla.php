<?php

namespace AppBundle\Entity\Kontroling\NCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\NCT\PlanDodavkyTeplaRepository")
 * @ORM\Table(name="NCT_PlanDodavkyTepla", schema="Kontroling")
 */
class PlanDodavkyTepla extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\NCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Zdroj")
     */
    private $zdroj;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="V_kWh")
     */
    private $vychod_kwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Z_kWh")
     */
    private $zapad_kwh;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
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

    public function getVychodKwh()
    {
        return $this->vychod_kwh;
    }

    public function getZapadKwh()
    {
        return $this->zapad_kwh;
    }
}