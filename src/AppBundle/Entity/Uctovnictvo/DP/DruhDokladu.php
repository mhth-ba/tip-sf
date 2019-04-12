<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\DruhDokladuRepository")
 * @ORM\Table(name="_RefDruhDokladu", schema="Uctovnictvo")
 */
class DruhDokladu extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string")
     */
    private $znak;

    /**
     * @ORM\Id
     * @ORM\Column(type="string")
     */
    private $druh;

    public function getZnak()
    {
        return $this->znak;
    }

    public function getDruh()
    {
        return $this->druh;
    }
}