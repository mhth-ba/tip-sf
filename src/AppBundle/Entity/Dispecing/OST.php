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
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $cislo;

    /**
     * @ORM\Column(type="string")
     */
    private $adresa;

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
}