<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\HlavnyRepository")
 * @ORM\Table(name="DP_Hlavny", schema="Uctovnictvo")
 */
class Hlavny extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $hlavny_id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Uctovnictvo\DP\Druh")
     */
    private $druh;

    /**
     * @ORM\Column(type="date")
     */
    private $datum;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavnyId()
    {
        return $this->hlavny_id;
    }

    public function getDruh()
    {
        return $this->druh;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }
}