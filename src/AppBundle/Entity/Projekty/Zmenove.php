<?php

namespace AppBundle\Entity\Projekty;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Projekty\ZmenoveRepository")
 * @ORM\Table(name="PR_Zmenove", schema="Projekty")
 */
class Zmenove extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Projekty\Projekty")
     */
    private $projekt;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\Column(type="string")
     */
    private $ziadatel;

    /**
     * @ORM\Column(type="date")
     */
    private $zadane;

    /**
     * @ORM\Column(type="date")
     */
    private $termin;

    /**
     * @ORM\Column(type="string")
     */
    private $cas;

    /**
     * @ORM\Column(type="text")
     */
    private $popis;

    /**
     * @ORM\Column(type="smallint")
     */
    private $plnenie;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Projekty\Stav")
     */
    private $stav;

    public function getId()
    {
        return $this->id;
    }

    public function getProjekt()
    {
        return $this->projekt;
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function getZiadatel()
    {
        return $this->ziadatel;
    }

    public function getZadane()
    {
        return $this->getTimestampWithOffset($this->zadane);
    }

    public function getTermin()
    {
        return $this->getTimestampWithOffset($this->termin);
    }

    public function getCas()
    {
        return $this->cas;
    }

    public function getPopis()
    {
        return $this->popis;
    }

    public function getPlnenie()
    {
        return $this->plnenie;
    }

    public function getStav()
    {
        return $this->stav;
    }
}