<?php

namespace AppBundle\Entity\Kontroling\SCT;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\VyrobaElektrinyRepository")
 * @ORM\Table(name="SCT_Elektrina", schema="Kontroling")
 */
class VyrobaElektriny
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\CenaTepla")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Polozka")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpv;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpz;

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

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function setPolozka($polozka)
    {
        $this->polozka = $polozka;
    }

    public function getTpv()
    {
        return $this->tpv;
    }

    public function setTpv($tpv)
    {
        $this->tpv = $tpv;
    }

    public function getTpz()
    {
        return $this->tpz;
    }

    public function setTpz($tpz)
    {
        $this->tpz = $tpz;
    }
}