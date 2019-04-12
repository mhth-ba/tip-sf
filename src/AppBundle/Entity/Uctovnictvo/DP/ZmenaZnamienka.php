<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\ZmenaZnamienkaRepository")
 * @ORM\Table(name="_RefZmenaZnamienka", schema="Uctovnictvo")
 */
class ZmenaZnamienka extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="smallint")
     */
    private $zaradenie;

    /**
     * @ORM\Column(type="string")
     */
    private $znak;

    /**
     * @ORM\Column(type="string")
     */
    private $druh;

    public function getId()
    {
        return $this->id;
    }

    public function getZaradenie()
    {
        return $this->zaradenie;
    }

    public function getZnak()
    {
        return $this->znak;
    }

    public function getDruh()
    {
        return $this->druh;
    }
}