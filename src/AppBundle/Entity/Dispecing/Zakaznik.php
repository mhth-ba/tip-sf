<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\ZakaznikRepository")
 * @ORM\Table(name="_RefZakaznik", schema="Dispecing")
 */
class Zakaznik
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $meno;

    /**
     * @ORM\Column(type="string")
     */
    private $adresa;

    /**
     * @ORM\Column(type="string")
     */
    private $telefon;

    /**
     * @ORM\Column(type="string")
     */
    private $mail;

    public function getId()
    {
        return $this->id;
    }

    public function getMeno()
    {
        return $this->meno;
    }

    public function setMeno($meno)
    {
        $this->meno = $meno;
    }

    public function getAdresa()
    {
        return $this->adresa;
    }

    public function setAdresa($adresa)
    {
        $this->adresa = $adresa;
    }

    public function getTelefon()
    {
        return $this->telefon;
    }

    public function setTelefon($telefon)
    {
        $this->telefon = $telefon;
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function setMail($mail)
    {
        $this->mail = $mail;
    }
}