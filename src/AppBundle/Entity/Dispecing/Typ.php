<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\TypRepository")
 * @ORM\Table(name="_RefTyp", schema="Dispecing")
 */
class Typ
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\Column(type="smallint")
     */
    private $kategoria;

    public function getId()
    {
        return $this->id;
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function setNazov($nazov)
    {
        $this->nazov = $nazov;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function setKategoria($kategoria)
    {
        $this->kategoria = $kategoria;
    }
}