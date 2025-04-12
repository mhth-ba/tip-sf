<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\HlavnyOSTRepository")
 * @ORM\Table(name="DDH_OST_Hlavny", schema="Dispecing")
 */
class HlavnyOST extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $datum;

    /**
     * @ORM\Column(type="string")
     */
    private $dispecer_1;

    /**
     * @ORM\Column(type="string")
     */
    private $dispecer_2;

    /**
     * @ORM\Column(type="string")
     */
    private $poruchovka_1;

    /**
     * @ORM\Column(type="string")
     */
    private $poruchovka_2;

    /**
     * @ORM\Column(type="string")
     */
    private $poruchovka_3;

    /**
     * @ORM\Column(type="string")
     */
    private $poruchovka_4;

    /**
     * @ORM\Column(type="float")
     */
    private $teplota_letisko;

    /**
     * @ORM\Column(type="float")
     */
    private $teplota_tpv;

    /**
     * @ORM\Column(type="float")
     */
    private $teplota_tpz;

    /**
     * @ORM\Column(type="float")
     */
    private $doplnovanie_tpv;

    /**
     * @ORM\Column(type="float")
     */
    private $doplnovanie_tpz;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getDispecer1()
    {
        return $this->dispecer_1;
    }

    public function setDispecer1($dispecer_1)
    {
        $this->dispecer_1 = $dispecer_1;
    }

    public function getDispecer2()
    {
        return $this->dispecer_2;
    }

    public function setDispecer2($dispecer_2)
    {
        $this->dispecer_2 = $dispecer_2;
    }

    public function getPoruchovka1()
    {
        return $this->poruchovka_1;
    }

    public function setPoruchovka1($poruchovka_1)
    {
        $this->poruchovka_1 = $poruchovka_1;
    }

    public function getPoruchovka2()
    {
        return $this->poruchovka_2;
    }

    public function setPoruchovka2($poruchovka_2)
    {
        $this->poruchovka_2 = $poruchovka_2;
    }

    public function getPoruchovka3()
    {
        return $this->poruchovka_3;
    }

    public function setPoruchovka3($poruchovka_3)
    {
        $this->poruchovka_3 = $poruchovka_3;
    }

    public function getPoruchovka4()
    {
        return $this->poruchovka_4;
    }

    public function setPoruchovka4($poruchovka_4)
    {
        $this->poruchovka_4 = $poruchovka_4;
    }

    public function getTeplotaLetisko()
    {
        return $this->teplota_letisko;
    }

    public function setTeplotaLetisko($teplota_letisko)
    {
        $this->teplota_letisko = $teplota_letisko;
    }

    public function getTeplotaTpv()
    {
        return $this->teplota_tpv;
    }

    public function setTeplotaTpv($teplota_tpv)
    {
        $this->teplota_tpv = $teplota_tpv;
    }

    public function getTeplotaTpz()
    {
        return $this->teplota_tpz;
    }

    public function setTeplotaTpz($teplota_tpz)
    {
        $this->teplota_tpz = $teplota_tpz;
    }

    public function getDoplnovanieTpv()
    {
        return $this->doplnovanie_tpv;
    }

    public function setDoplnovanieTpv($doplnovanie_tpv)
    {
        $this->doplnovanie_tpv = $doplnovanie_tpv;
    }

    public function getDoplnovanieTpz()
    {
        return $this->doplnovanie_tpz;
    }

    public function setDoplnovanieTpz($doplnovanie_tpz)
    {
        $this->doplnovanie_tpz = $doplnovanie_tpz;
    }
}