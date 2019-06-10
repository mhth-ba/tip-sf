<?php

namespace AppBundle\Entity\Meranie\ANM;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\ANM\Vylucene_TRepository")
 * @ORM\Table(name="ANM_Vylucene", schema="Meranie")
 */
class Vylucene_T extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * @ORM\Column(type="integer", name="MP")
     */
    private $mp;

    /**
     * @ORM\Column(type="smallint")
     */
    private $kategoria;

    /**
     * @ORM\Column(type="date", name="OdlozeneDo")
     */
    private $odlozene;

    /**
     * @ORM\Column(type="string")
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

    public function getVytvoril()
    {
        return $this->vytvoril;
    }

    public function setVytvoril($vytvoril)
    {
        $this->vytvoril = $vytvoril;
    }

    public function getMp()
    {
        return $this->mp;
    }

    public function setMp($mp)
    {
        $this->mp = $mp;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function setKategoria($kategoria)
    {
        $this->kategoria = $kategoria;
    }

    public function getOdlozene()
    {
        return $this->odlozene;
    }

    public function setOdlozene($odlozene)
    {
        $this->odlozene = $odlozene;
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