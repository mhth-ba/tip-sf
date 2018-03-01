<?php

namespace AppBundle\Entity\RIS;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RIS\ServisneHlaseniaRepository")
 * @ORM\Table(name="SH_Hlavny", schema="RIS")
 */
class ServisneHlasenia
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
    private $createdAt;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datum;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank(message="Kto oznámil poruchu?")
     */
    private $oznamovatel;

    /**
     * Many ServisneHlasenia have One Miesto
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\RIS\Miesto")
     * @Assert\NotBlank(message="Vyberte miesto")
     */
    private $miesto;

    /**
     * @ORM\Column(type="boolean")
     */
    private $profylaktika;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $popis;

    /**
     * @ORM\Column(type="datetime", name="DatumRiesenia")
     */
    private $datumRiesenia;

    /**
     * Many ServisneHlasenia have One Riesitel
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\RIS\Riesitel")
     */
    private $riesitel;

    /**
     * Many ServisneHlasenia have One Skupina
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\RIS\Skupina")
     */
    private $skupina;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $pricina;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $riesenie;

    /**
     * @ORM\Column(type="boolean")
     */
    private $vyriesene;

    /**
     * Set the default values
     * This works as the constructor of a persisted class is not called upon hydration.
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->vyriesene = 'false';
    }

    public function getId()
    {
        return $this->id;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function getVytvoril()
    {
        return $this->vytvoril;
    }

    public function setVytvoril($vytvoril)
    {
        $this->vytvoril = $vytvoril;
    }

    public function getDatum()
    {
        return $this->datum;
    }

    public function setDatum($datum)
    {
        $this->datum = $datum;
    }

    public function getOznamovatel()
    {
        return $this->oznamovatel;
    }

    public function setOznamovatel($oznamovatel)
    {
        $this->oznamovatel = $oznamovatel;
    }

    public function getMiesto()
    {
        return $this->miesto;
    }

    public function setMiesto($miesto)
    {
        $this->miesto = $miesto;
    }

    public function getProfylaktika()
    {
        return $this->profylaktika;
    }

    public function setProfylaktika($profylaktika)
    {
        $this->profylaktika = $profylaktika;
    }

    public function getPopis()
    {
        return $this->popis;
    }

    public function setPopis($popis)
    {
        $this->popis = $popis;
    }

    public function getDatumRiesenia()
    {
        return $this->datumRiesenia;
    }

    public function setDatumRiesenia($datumRiesenia)
    {
        $this->datumRiesenia = $datumRiesenia;
    }

    public function getRiesitel()
    {
        return $this->riesitel;
    }

    public function setRiesitel($riesitel)
    {
        $this->riesitel = $riesitel;
    }

    public function getSkupina()
    {
        return $this->skupina;
    }

    public function setSkupina($skupina)
    {
        $this->skupina = $skupina;
    }

    public function getPricina()
    {
        return $this->pricina;
    }

    public function setPricina($pricina)
    {
        $this->pricina = $pricina;
    }

    public function getRiesenie()
    {
        return $this->riesenie;
    }

    public function setRiesenie($riesenie)
    {
        $this->riesenie = $riesenie;
    }

    public function getVyriesene()
    {
        return $this->vyriesene;
    }

    public function setVyriesene($vyriesene)
    {
        $this->vyriesene = $vyriesene;
    }
}