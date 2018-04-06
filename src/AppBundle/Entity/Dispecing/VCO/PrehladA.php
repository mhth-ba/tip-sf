<?php

namespace AppBundle\Entity\Dispecing\VCO;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\VCO\PrehladARepository")
 * @ORM\Table(name="OST_Vychladenie_Stats_A", schema="Dispecing")
 */
class PrehladA
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", name="Treshold")
     */
    private $hranica;

    /**
     * @ORM\Column(type="integer", name="OM")
     */
    private $pocetOm;

    /**
     * @ORM\Column(type="float", name="Energy")
     */
    private $energia;

    /**
     * @ORM\Column(type="float", name="Volume")
     */
    private $objem;

    /**
     * @ORM\Column(type="smallint", name="DateYear")
     */
    private $rok;

    /**
     * @ORM\Column(type="smallint", name="DateMonth")
     */
    private $mesiac;

    public function getId()
    {
        return $this->id;
    }

    public function getHranica()
    {
        return $this->hranica;
    }

    public function getPocetOm()
    {
        return $this->pocetOm;
    }

    public function getEnergia()
    {
        return $this->energia;
    }

    public function getObjem()
    {
        return $this->objem;
    }

    public function getRok()
    {
        return $this->rok;
    }

    public function getMesiac()
    {
        return $this->mesiac;
    }
}