<?php

namespace AppBundle\Entity\Kontroling;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VerziaRepository")
 * @ORM\Table(name="_RefVerzia", schema="Kontroling")
 */
class Verzia
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $verzia;

    public function getId()
    {
        return $this->id;
    }

    public function getVerzia()
    {
        return $this->verzia;
    }
}