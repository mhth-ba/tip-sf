<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DispecerRepository")
 * @ORM\Table(name="_RefDispecer", schema="Dispecing")
 */
class Dispecer
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $meno;

    public function getId()
    {
        return $this->id;
    }

    public function getMeno()
    {
        return $this->meno;
    }
}