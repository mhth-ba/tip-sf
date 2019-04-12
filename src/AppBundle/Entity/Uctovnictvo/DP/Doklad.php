<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\DokladRepository")
 * @ORM\Table(name="_RefDoklad", schema="Uctovnictvo")
 */
class Doklad extends BaseEntity
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

    /**
     * @ORM\Column(type="text")
     */
    private $popis;

    public function getId()
    {
        return $this->id;
    }

    public function getDruh()
    {
        return $this->druh;
    }

    public function getPopis()
    {
        return $this->popis;
    }
}