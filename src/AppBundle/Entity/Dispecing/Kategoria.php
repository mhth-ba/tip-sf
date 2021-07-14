<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\KategoriaRepository")
 * @ORM\Table(name="_RefKategoria", schema="Dispecing")
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