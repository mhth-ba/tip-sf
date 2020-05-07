<?php

namespace AppBundle\Entity\Kontroling\VCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VCT\HlavnyRepository")
 * @ORM\Table(name="VCT_Hlavny", schema="Kontroling")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="VCT_Hlavny_Novy",
 *         query="EXECUTE [Kontroling].[VCT_Hlavny_Novy] @Rok = :rok, @Mesiac = :mesiac, @Vytvoril_ID = :user_id",
 *         resultClass="AppBundle\Entity\Kontroling\VCT\Hlavny"
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\NCT\Hlavny")
     */
    private $nct;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Hlavny")
     */
    private $sct;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Stav")
     */
    private $stav;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\Column(type="smallint")
     */
    private $rok;

    /**
     * @ORM\Column(type="smallint")
     */
    private $mesiac;

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

    public function getNct()
    {
        return $this->nct;
    }

    public function setNct($nct)
    {
        $this->nct = $nct;
    }

    public function getSct()
    {
        return $this->sct;
    }

    public function setSct($sct)
    {
        $this->sct = $sct;
    }

    public function getStav()
    {
        return $this->stav;
    }

    public function setStav($stav)
    {
        $this->stav = $stav;
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

    public function getMesiac()
    {
        return $this->mesiac;
    }

    public function setMesiac($mesiac)
    {
        $this->mesiac = $mesiac;
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