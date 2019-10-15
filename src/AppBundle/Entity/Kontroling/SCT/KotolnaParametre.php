<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\KotolnaParametreRepository")
 * @ORM\Table(name="SCT_KotolnaParametre", schema="Kontroling")
 */
class KotolnaParametre extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Kotolna")
     */
    private $kotolna;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Polozka")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", scale=37, precision=10)
     */
    private $hodnota;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getKotolna()
    {
        return $this->kotolna;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }

    public function setHodnota($hodnota)
    {
        $this->hodnota = $hodnota;
    }
}