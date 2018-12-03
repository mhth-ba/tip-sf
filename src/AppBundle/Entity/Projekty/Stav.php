<?php

namespace AppBundle\Entity\Projekty;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Projekty\StavRepository")
 * @ORM\Table(name="_RefStav", schema="Projekty")
 */
class Stav extends BaseEntity
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