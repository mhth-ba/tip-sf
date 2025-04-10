<?php

namespace AppBundle\Entity\Dispecing;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\PoruchovkaRepository")
 * @ORM\Table(name="_RefPoruchovka", schema="Dispecing")
 */
class Poruchovka
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