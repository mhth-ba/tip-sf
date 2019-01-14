<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\SumarizaciaRepository")
 * @ORM\Table(name="DP_Sumarizacia", schema="Uctovnictvo")
 */
class Sumarizacia extends BaseEntity
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
     * @ORM\Column(type="string")
     * Riadok dane -> elektronicky formular
     */
    private $riadok;

    /**
     * @ORM\Column(type="decimal", scale=38, precision=2)
     */
    private $zaklad;

    /**
     * @ORM\Column(type="decimal", scale=38, precision=2)
     */
    private $dan;

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

    public function getZaklad()
    {
        return $this->zaklad;
    }

    public function getDan()
    {
        return $this->dan;
    }
}