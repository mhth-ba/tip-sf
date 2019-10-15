<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\DodaneTeploRepository")
 * @ORM\Table(name="SCT_DodaneTeplo", schema="Kontroling")
 */
class DodaneTeplo extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Hlavny")
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
     * @ORM\Column(type="decimal", precision=37, scale=10, name="V_kW")
     */
    private $vychod_kw;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Z_kWh")
     */
    private $zapad_kwh;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="Z_kW")
     */
    private $zapad_kw;

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

    public function getVychodKwh()
    {
        return $this->vychod_kwh;
    }

    public function getVychodKw()
    {
        return $this->vychod_kw;
    }

    public function getZapadKwh()
    {
        return $this->zapad_kwh;
    }

    public function getZapadKw()
    {
        return $this->zapad_kw;
    }
}