<?php

namespace AppBundle\Entity\Kontroling\SCT;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\KotolnaPlatnostRepository")
 * @ORM\Table(name="SCT_KotolnaPlatnost", schema="Kontroling")
 */
class KotolnaPlatnost
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="CreatedAt")
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
     * @ORM\Column(type="boolean")
     */
    private $plati;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->datum;
    }

    public function getKotolna()
    {
        return $this->kotolna;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getPlati()
    {
        return $this->plati;
    }

    public function setPlati($plati)
    {
        $this->plati = $plati;
    }
}