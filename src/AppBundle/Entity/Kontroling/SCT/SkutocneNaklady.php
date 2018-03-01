<?php

namespace AppBundle\Entity\Kontroling\SCT;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\SkutocneNakladyRepository")
 * @ORM\Table(name="SCT_SkutocneNaklady", schema="Kontroling")
 */
class SkutocneNaklady
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $datum;

    /**
     * @ORM\Column(type="boolean", name="Valid")
     */
    private $platne;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\CenaTepla")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Ucet")
     */
    private $ucet;

    /**
     * @ORM\Column(type="string")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpv;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $tpz;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $vhj;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $pk;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $primar;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $ost;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $sekundar;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $rezijne;


    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->datum;
    }

    public function getPlatne()
    {
        return $this->platne;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getUcet()
    {
        return $this->ucet;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getTpv()
    {
        return $this->tpv;
    }

    public function getTpz()
    {
        return $this->tpz;
    }

    public function getVhj()
    {
        return $this->vhj;
    }

    public function getPk()
    {
        return $this->pk;
    }

    public function getPrimar()
    {
        return $this->primar;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function getSekundar()
    {
        return $this->sekundar;
    }

    public function getRezijne()
    {
        return $this->rezijne;
    }
}