<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\OSTRepository")
 * @ORM\Table(name="_RefOST", schema="Dispecing")
 */
class OST
{
    /**
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=10)
     */
    private $cislo;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $adresa;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $typ;

    public function getId()
    {
        return $this->id;
    }

    public function getCislo()
    {
        return $this->cislo;
    }

    public function setCislo($cislo)
    {
        $this->cislo = $cislo;
    }

    public function getAdresa()
    {
        return $this->adresa;
    }

    public function setAdresa($adresa)
    {
        $this->adresa = $adresa;
    }

    public function getTyp()
    {
        return $this->typ;
    }

    public function setTyp($typ)
    {
        $this->typ = $typ;
    }
}