<?php

namespace AppBundle\Entity\Dispecing\DEO;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DEO\HlavnyRepository")
 * @ORM\Table(name="DEO_Hlavny", schema="Dispecing")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="DEO_Hlavny_Novy",
 *         query="EXECUTE [Dispecing].[DEO_Hlavny_Novy] @Vytvoril_ID = :user_id",
 *         resultClass="AppBundle\Entity\Dispecing\DEO\Hlavny"
 *     )
 * })
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $upravil;

    /**
     * @ORM\Column(type="datetime", name="DatumZistenia")
     */
    private $datum_zistenia;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\OST")
     */
    private $ost;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\Predmet")
     */
    private $predmet;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\Zakaznik")
     */
    private $zakaznik;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\Udalost")
     */
    private $udalost;

    /**
     * @ORM\Column(type="smallint", name="VplyvUK")
     */
    private $vplyv_uk;

    /**
     * @ORM\Column(type="smallint", name="VplyvTUV")
     */
    private $vplyv_tuv;

    /**
     * @ORM\Column(type="boolean")
     */
    private $zavinenie;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\Typ")
     */
    private $typ;

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

    public function getDatumZistenia()
    {
        return $this->getTimestampWithoutOffset($this->datum_zistenia);
    }

    public function setDatumZistenia($datum_zistenia)
    {
        $this->datum_zistenia = $datum_zistenia;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function setOst($ost)
    {
        $this->ost = $ost;
    }

    public function getPredmet()
    {
        return $this->predmet;
    }

    public function setPredmet($predmet)
    {
        $this->predmet = $predmet;
    }

    public function getZakaznik()
    {
        return $this->zakaznik;
    }

    public function setZakaznik($zakaznik)
    {
        $this->zakaznik = $zakaznik;
    }

    public function getUdalost()
    {
        return $this->udalost;
    }

    public function setUdalost($udalost)
    {
        $this->udalost = $udalost;
    }

    public function getVplyvUk()
    {
        return $this->vplyv_uk;
    }

    public function setVplyvUk($vplyv_uk)
    {
        $this->vplyv_uk = $vplyv_uk;
    }

    public function getVplyvTuv()
    {
        return $this->vplyv_tuv;
    }

    public function setVplyvTuv($vplyv_tuv)
    {
        $this->vplyv_tuv = $vplyv_tuv;
    }

    public function getZavinenie()
    {
        return $this->zavinenie;
    }

    public function setZavinenie($zavinenie)
    {
        $this->zavinenie = $zavinenie;
    }

    public function getTyp()
    {
        return $this->typ;
    }

    public function setTyp($typ)
    {
        $this->typ = $typ;
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