<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\ZdrojRepository")
 * @ORM\Table(name="_RefZdroj", schema="Efektivnost")
 */
class Zdroj
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

    public function getId()
    {
        return $this->id;
    }

    public function getNazov()
    {
        return $this->nazov;
    }
}