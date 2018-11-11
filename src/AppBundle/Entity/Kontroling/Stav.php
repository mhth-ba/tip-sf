<?php

namespace AppBundle\Entity\Kontroling;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\StavRepository")
 * @ORM\Table(name="_RefStav", schema="Kontroling")
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