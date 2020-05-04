<?php

namespace AppBundle\Entity\Dispecing\DEO;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DEO\PostupenieRepository")
 * @ORM\Table(name="DEO_Postupenie", schema="Dispecing")
 */
class Postupenie extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\DEO\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $datum;

    /**
     * @ORM\Column(type="datetime", name="ModifiedAt")
     */
    private $zmenene;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $upravil;

    /**
     * @ORM\Column(type="datetime", name="DatumPostupenia")
     */
    private $datum_postupenia;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\SubjektPostupenia")
     */
    private $subjektpostupenia;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\Udalost")
     */
    private $udalost;

    /**
     * @ORM\Column(type="boolean")
     */
    private $vyriesene;

    /**
     * @ORM\Column(type="datetime", name="DatumOdstranenia")
     */
    private $datum_odstranenia;

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

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getZmenene()
    {
        return $this->getTimestampWithoutOffset($this->zmenene);
    }

    public function setZmenene($zmenene)
    {
        $this->zmenene = $zmenene;
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

    public function getDatumPostupenia()
    {
        return $this->getTimestampWithoutOffset($this->datum_postupenia);
    }

    public function setDatumPostupenia($datum_postupenia)
    {
        $this->datum_postupenia = $datum_postupenia;
    }

    public function getSubjektPostupenia()
    {
        return $this->subjektpostupenia;
    }

    public function setSubjektPostupenia($subjektpostupenia)
    {
        $this->subjektpostupenia = $subjektpostupenia;
    }

    public function getUdalost()
    {
        return $this->udalost;
    }

    public function setUdalost($udalost)
    {
        $this->udalost = $udalost;
    }

    public function getVyriesene()
    {
        return $this->vyriesene;
    }

    public function setVyriesene($vyriesene)
    {
        $this->vyriesene = $vyriesene;
    }

    public function getDatumOdstranenia()
    {
        return $this->getTimestampWithoutOffset($this->datum_odstranenia);
    }

    public function setDatumOdstranenia($datum_odstranenia)
    {
        $this->datum_odstranenia = $datum_odstranenia;
    }

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function setPoznamka($poznamka)
    {
        $this->poznamka = $poznamka;
    }
}