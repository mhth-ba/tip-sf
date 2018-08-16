<?php

namespace AppBundle\Entity\Meranie\RM;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\RM\KategoriaRepository")
 * @ORM\Table(name="_RefKategoria", schema="Meranie")
 */
class Kategoria
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $kategoria;

    public function getId()
    {
        return $this->id;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }
}