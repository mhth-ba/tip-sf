<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\StavRepository")
 * @ORM\Table(name="_RefStav", schema="Efektivnost")
 */
class Stav
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $stav;

    public function getId()
    {
        return $this->id;
    }

    public function getStav()
    {
        return $this->stav;
    }
}