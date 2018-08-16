<?php

namespace AppBundle\Entity\Meranie\RM;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\RM\ReportRepository")
 * @ORM\Table(name="RM_Report", schema="Meranie")
 */
class Report
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Meranie\RM\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Meranie\RM\Kategoria")
     */
    private $kategoria;

    /**
     * @ORM\Column(type="smallint")
     */
    private $pocet;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function getPocet()
    {
        return $this->pocet;
    }
}