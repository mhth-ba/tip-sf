<?php

namespace AppBundle\Entity\Meranie\ANM;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\ANM\VyluceneRepository", readOnly=true)
 * @ORM\Table(name="ANM_Vylucene__V", schema="Meranie")
 */
class Vylucene extends BaseEntity
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
     * @ORM\Column(type="integer", name="OM")
     */
    private $om;

    /**
     * @ORM\Column(type="smallint", name="COST")
     */
    private $ost;

    /**
     * @ORM\Column(type="integer", name="MP")
     */
    private $mp;

    /**
     * @ORM\Column(type="string", name="AOST")
     */
    private $adresa;

    /**
     * @ORM\Column(type="string", name="Odb")
     */
    private $odberatel;

    /**
     * @ORM\Column(type="string", name="VC1")
     */
    private $vc;

    /**
     * @ORM\Column(type="string", name="DT")
     */
    private $tarifa;

    /**
     * @ORM\Column(type="string", name="MJ1")
     */
    private $mj;

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

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getVytvoril()
    {
        return $this->vytvoril;
    }

    public function getOm()
    {
        return $this->om;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function getMp()
    {
        return $this->mp;
    }

    public function getAdresa()
    {
        return $this->adresa;
    }

    public function getOdberatel()
    {
        return $this->odberatel;
    }

    public function getVc()
    {
        return $this->vc;
    }

    public function getTarifa()
    {
        return $this->tarifa;
    }

    public function getMj()
    {
        return $this->mj;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function getOdlozene()
    {
        return $this->getTimestampWithoutOffset($this->odlozene);
    }

    public function getPoznamka()
    {
        return $this->poznamka;
    }
}