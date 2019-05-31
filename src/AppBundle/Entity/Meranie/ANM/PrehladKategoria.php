<?php

namespace AppBundle\Entity\Meranie\ANM;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\ANM\PrehladKategoriaRepository", readOnly=true)
 * @ORM\Table(name="ANM_PrehladKategoria", schema="Meranie")
 */
class PrehladKategoria extends BaseEntity
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="string")
     */
    private $kategoria;

    /**
     * @ORM\Column(type="integer")
     */
    private $pocet;

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function getPocet()
    {
        return $this->pocet;
    }
}