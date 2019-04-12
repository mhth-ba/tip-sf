<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\HlavnyRepository")
 * @ORM\Table(name="DP_Hlavny", schema="Uctovnictvo")
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Uctovnictvo\DP\DruhPriznania")
     */
    private $druh;

    /**
     * @ORM\Column(type="integer", name="Predchadzajuci_ID")
     */
    private $predchadzajuci;

    /**
     * @ORM\Column(type="integer", name="Posledny_ID")
     */
    private $posledny;

    /**
     *@ORM\Column(type="date")
     */
    private $obdobie;

    /**
     * @ORM\Column(type="date")
     */
    private $zistene;

    /**
     * @ORM\Column(type="date")
     */
    private $podane;

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

    public function getDruh()
    {
        return $this->druh;
    }

    public function setDruh($druh)
    {
        $this->druh = $druh;
    }

    public function getPredchadzajuci()
    {
        return $this->predchadzajuci;
    }

    public function setPredchadzajuci($predchadzajuci)
    {
        $this->predchadzajuci = $predchadzajuci;
    }

    public function getPosledny()
    {
        return $this->posledny;
    }

    public function setPosledny($posledny)
    {
        $this->posledny = $posledny;
    }

    public function getObdobie()
    {
        return $this->getTimestampWithOffset($this->obdobie);
    }

    public function setObdobie($obdobie)
    {
        $this->obdobie = $obdobie;
    }

    public function getZistene()
    {
        return $this->getTimestampWithOffset($this->zistene);
    }

    public function setZistene($zistene)
    {
        $this->zistene = $zistene;
    }

    public function getPodane()
    {
        return $this->getTimestampWithOffset($this->podane);
    }

    public function setPodane($podane)
    {
        $this->podane = $podane;
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

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function setPoznamka($poznamka)
    {
        $this->poznamka = $poznamka;
    }
}