<?php

namespace AppBundle\Entity\Projekty;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Projekty\ProjektyRepository")
 * @ORM\Table(name="PR_Projekty", schema="Projekty")
 */
class Projekty extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\Column(type="text")
     */
    private $popis;

    /**
     * @ORM\Column(type="date")
     */
    private $zadane;

    /**
     * @ORM\Column(type="date")
     */
    private $termin;

    /**
     * @ORM\Column(type="date")
     */
    private $dokoncene;

    /**
     * @ORM\Column(type="string")
     */
    private $ziadatel;

    /**
     * @ORM\Column(type="string")
     */
    private $zucastneni;

    /**
     * @ORM\Column(type="smallint")
     */
    private $plnenie;


    public function getId()
    {
        return $this->id;
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function getPopis()
    {
        return $this->popis;
    }

    public function getZadane()
    {
        return $this->getTimestampWithOffset($this->zadane);
    }

    public function getTermin()
    {
        return $this->getTimestampWithOffset($this->termin);
    }

    public function getDokoncene()
    {
        return $this->getTimestampWithOffset($this->dokoncene);
    }

    public function getZiadatel()
    {
        return $this->ziadatel;
    }

    public function getZucastneni()
    {
        return $this->zucastneni;
    }

    public function getPlnenie()
    {
        return $this->plnenie;
    }
}