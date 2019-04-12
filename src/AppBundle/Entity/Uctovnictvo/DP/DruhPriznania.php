<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\DruhPriznaniaRepository")
 * @ORM\Table(name="_RefDruhPriznania", schema="Uctovnictvo")
 */
class DruhPriznania extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $druh;

    public function getId()
    {
        return $this->id;
    }

    public function getDruh()
    {
        return $this->druh;
    }
}