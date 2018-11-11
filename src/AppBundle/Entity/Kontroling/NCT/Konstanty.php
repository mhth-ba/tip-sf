<?php

namespace AppBundle\Entity\Kontroling\NCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\NCT\KonstantyRepository")
 * @ORM\Table(name="NCT_Konstanty", schema="Kontroling")
 */
class Konstanty extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $datum;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\NCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Polozka")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $hodnota;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->datum;
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