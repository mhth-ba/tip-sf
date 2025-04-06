<?php

namespace AktionBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AktionBundle\Repository\DataRepository")
 * @ORM\Table(name="A_DATA", schema="dbo")
 */
class Data
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=13, name="CISLO")
     */
    private $cislo;

    /**
     * @ORM\Column(type="datetime", name="DT_CREATE")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="DATUM", nullable=false)
     */
    private $datum;

    /**
     * @ORM\Column(type="integer", name="OPERACE")
     */
    private $operacia;

    /**
     * @ORM\Column(type="string", length=20, name="SNIMAC")
     */
    private $snimac;

    /**
     * @ORM\Column(type="string", length=1, name="DOCH")
     */
    private $dochadzka; // NULL | 1 | 2

    /**
     * @ORM\Column(type="string", length=20, name="TERMINAL")
     */
    private $terminal;

    /**
     * @ORM\Column(type="string", length=13, name="RODNE_CISLO")
     */
    private $rc;

    /**
     * @ORM\Column(type="string", length=50, name="NAZEV")
     */
    private $meno;

    public function getCislo()
    {
        return $this->cislo;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function getDatum()
    {
        return $this->datum;
    }

    public function getOperacia()
    {
        return $this->operacia;
    }

    public function getSnimac()
    {
        return $this->snimac;
    }

    public function getDochadzka()
    {
        return $this->dochadzka;
    }

    public function getTerminal()
    {
        return $this->terminal;
    }

    public function getRc()
    {
        return $this->rc;
    }

    public function getMeno()
    {
        return $this->meno;
    }
}