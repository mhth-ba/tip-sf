<?php

namespace AppBundle\Entity\Uctovnictvo\DP;
use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\RiadkyRepository")
 * @ORM\Table(name="DP_Riadky", schema="Uctovnictvo")
 */
class Riadky extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="guid")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Uctovnictvo\DP\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="integer")
     */
    private $riadok;

    /**
     * @ORM\Column(type="decimal", scale=38, precision=2)
     */
    private $suma;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getRiadok()
    {
        return $this->riadok;
    }

    public function getSuma()
    {
        return $this->suma;
    }
}