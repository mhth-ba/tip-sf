<?php

namespace AppBundle\Entity\Kontroling\NCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\NCT\HlavnyRepository")
 * @ORM\Table(name="NCT_Hlavny", schema="Kontroling")
 */
class Hlavny extends BaseEntity
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
     * @ORM\Column(type="datetime", name="ModifiedAt")
     */
    private $zmenene;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Stav")
     */
    private $stav;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Verzia")
     */
    private $verzia;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\Column(type="smallint")
     */
    private $rok;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $upravil;

    /**
     * @ORM\Column(type="text")
     */
    private $poznamka;

    /**
     * Set the default values
     * This works as the constructor of a persisted class is not called upon hydration.
     */
    public function __construct()
    {
        $this->datum = new \DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    /*public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }*/

    /*public function getZmenene()
    {
        return $this->getTimestampWithOffset($this->zmenene);
    }*/

    /*public function setZmenene($zmenene)
    {
        $this->zmenene = $zmenene;
    }*/

    public function getStav()
    {
        return $this->stav;
    }

    public function setStav($stav)
    {
        $this->stav = $stav;
    }

    public function getVerzia()
    {
        return $this->verzia;
    }

    public function setVerzia($verzia)
    {
        $this->verzia = $verzia;
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function setNazov($nazov)
    {
        $this->nazov = $nazov;
    }

    public function getRok()
    {
        return $this->rok;
    }

    public function setRok($rok)
    {
        $this->rok = $rok;
    }

    public function getVytvoril()
    {
        return $this->vytvoril;
    }

    public function setVytvoril($vytvoril)
    {
        $this->vytvoril = $vytvoril;
    }

    /*public function getUpravil()
    {
        return $this->upravil;
    }

    public function setUpravil($upravil)
    {
        $this->upravil = $upravil;
    }*/

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function setPoznamka($poznamka)
    {
        $this->poznamka = $poznamka;
    }
}