<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\PrognozaRepository")
 * @ORM\Table(name="Prognoza", schema="Efektivnost")
 */
class Prognoza extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Efektivnost\DPP\WeatherProvider")
     */
    private $provider;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datum;

    /**
     * @ORM\Column(type="smallint")
     */
    private $teplota;

    /**
     * @ORM\Column(type="smallint")
     */
    private $vystupna;

    /**
     * @ORM\Column(type="smallint")
     */
    private $vratna;

    /**
     * @ORM\Column(type="smallint")
     */
    private $vykon_v;

    /**
     * @ORM\Column(type="smallint")
     */
    private $prietok_v;

    /**
     * @ORM\Column(type="smallint")
     */
    private $vykon_z;

    /**
     * @ORM\Column(type="smallint")
     */
    private $prietok_z;

    /**
     * @ORM\Column(type="smallint")
     */
    private $tg1_z;

    public function getId()
    {
        return $this->id;
    }

    public function getProvider()
    {
        return $this->provider;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getTeplota()
    {
        return $this->teplota;
    }

    public function getVystupna()
    {
        return $this->vystupna;
    }

    public function getVratna()
    {
        return $this->vratna;
    }

    public function getVykonV()
    {
        return $this->vykon_v;
    }

    public function getPrietokV()
    {
        return $this->prietok_v;
    }

    public function getVykonZ()
    {
        return $this->vykon_z;
    }

    public function getPrietokZ()
    {
        return $this->prietok_z;
    }

    public function getTg1Z()
    {
        return $this->tg1_z;
    }
}