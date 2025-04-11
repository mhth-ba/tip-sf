<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\PraceNaOSTDispecingRepository")
 * @ORM\Table(name="DDH_OST_PraceNaOSTDispecing", schema="Dispecing")
 */
class PraceNaOSTDispecing extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Dispecing\DDH\HlavnyOST")
     * @ORM\JoinColumn(name="hlavny_id", referencedColumnName="id", nullable=true)
     */
    private $hlavny;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $ost;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datum_cas_zaciatok;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datum_cas_ukoncenie;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $vplyv_na_dodavku;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $vyvod;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $poznamka;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $stav;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $vybavuje;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $priloha;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $valid;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function setOst($ost)
    {
        $this->ost = $ost;
    }

    public function getDatumCasZaciatok()
    {
        return $this->getTimestampWithoutOffset($this->datum_cas_zaciatok);
    }

    public function setDatumCasZaciatok($datum_cas_zaciatok)
    {
        $this->datum_cas_zaciatok = $datum_cas_zaciatok;
    }

    public function getDatumCasUkoncenie()
    {
        return $this->getTimestampWithoutOffset($this->datum_cas_ukoncenie);
    }

    public function setDatumCasUkoncenie($datum_cas_ukoncenie)
    {
        $this->datum_cas_ukoncenie = $datum_cas_ukoncenie;
    }

    public function getVplyvNaDodavku()
    {
        return $this->vplyv_na_dodavku;
    }

    public function setVplyvNaDodavku($vplyv_na_dodavku)
    {
        $this->vplyv_na_dodavku = $vplyv_na_dodavku;
    }

    public function getVyvod()
    {
        return $this->vyvod;
    }

    public function setVyvod($vyvod)
    {
        $this->vyvod = $vyvod;
    }

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function setPoznamka($poznamka)
    {
        $this->poznamka = $poznamka;
    }

    public function getStav()
    {
        return $this->stav;
    }

    public function setStav($stav)
    {
        $this->stav = $stav;
    }

    public function getVybavuje()
    {
        return $this->vybavuje;
    }

    public function setVybavuje($vybavuje)
    {
        $this->vybavuje = $vybavuje;
    }

    public function getPriloha()
    {
        return $this->priloha;
    }

    public function setPriloha($priloha)
    {
        $this->priloha = $priloha;
    }

    public function getValid()
    {
        return $this->valid;
    }

    public function setValid($valid)
    {
        $this->valid = $valid;
    }
}