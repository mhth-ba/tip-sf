<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\ElektrinaRepository")
 * @ORM\Table(name="DPP_Elektrina", schema="Efektivnost")
 */
class Elektrina
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Efektivnost\DPP\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Efektivnost\DPP\Zdroj")
     */
    private $zdroj;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h0;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h1;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h2;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h3;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h4;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h5;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h6;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h7;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h8;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h9;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h10;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h11;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h12;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h13;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h14;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h15;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h16;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h17;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h18;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h19;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h20;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h21;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h22;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $h23;

    /**
     * @ORM\Column(type="decimal", precision=6, scale=2)
     */
    private $spolu;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getZdroj()
    {
        return $this->zdroj;
    }

    public function getH0()
    {
        return $this->h0;
    }

    public function setH0($h0)
    {
        $this->h0 = $h0;
    }

    public function getH1()
    {
        return $this->h1;
    }

    public function setH1($h1)
    {
        $this->h1 = $h1;
    }

    public function getH2()
    {
        return $this->h2;
    }

    public function setH2($h2)
    {
        $this->h2 = $h2;
    }

    public function getH3()
    {
        return $this->h3;
    }

    public function setH3($h3)
    {
        $this->h3 = $h3;
    }

    public function getH4()
    {
        return $this->h4;
    }

    public function setH4($h4)
    {
        $this->h4 = $h4;
    }

    public function getH5()
    {
        return $this->h5;
    }

    public function setH5($h5)
    {
        $this->h5 = $h5;
    }

    public function getH6()
    {
        return $this->h6;
    }

    public function setH6($h6)
    {
        $this->h6 = $h6;
    }

    public function getH7()
    {
        return $this->h7;
    }

    public function setH7($h7)
    {
        $this->h7 = $h7;
    }

    public function getH8()
    {
        return $this->h8;
    }

    public function setH8($h8)
    {
        $this->h8 = $h8;
    }

    public function getH9()
    {
        return $this->h9;
    }

    public function setH9($h9)
    {
        $this->h9 = $h9;
    }

    public function getH10()
    {
        return $this->h10;
    }

    public function setH10($h10)
    {
        $this->h10 = $h10;
    }

    public function getH11()
    {
        return $this->h11;
    }

    public function setH11($h11)
    {
        $this->h11 = $h11;
    }

    public function getH12()
    {
        return $this->h12;
    }

    public function setH12($h12)
    {
        $this->h12 = $h12;
    }

    public function getH13()
    {
        return $this->h13;
    }

    public function setH13($h13)
    {
        $this->h13 = $h13;
    }

    public function getH14()
    {
        return $this->h14;
    }

    public function setH14($h14)
    {
        $this->h14 = $h14;
    }

    public function getH15()
    {
        return $this->h15;
    }

    public function setH15($h15)
    {
        $this->h15 = $h15;
    }

    public function getH16()
    {
        return $this->h16;
    }

    public function setH16($h16)
    {
        $this->h16 = $h16;
    }

    public function getH17()
    {
        return $this->h17;
    }

    public function setH17($h17)
    {
        $this->h17 = $h17;
    }

    public function getH18()
    {
        return $this->h18;
    }

    public function setH18($h18)
    {
        $this->h18 = $h18;
    }

    public function getH19()
    {
        return $this->h19;
    }

    public function setH19($h19)
    {
        $this->h19 = $h19;
    }

    public function getH20()
    {
        return $this->h20;
    }

    public function setH20($h20)
    {
        $this->h20 = $h20;
    }

    public function getH21()
    {
        return $this->h21;
    }

    public function setH21($h21)
    {
        $this->h21 = $h21;
    }

    public function getH22()
    {
        return $this->h22;
    }

    public function setH22($h22)
    {
        $this->h22 = $h22;
    }

    public function getH23()
    {
        return $this->h23;
    }

    public function setH23($h23)
    {
        $this->h23 = $h23;
    }

    public function getSpolu()
    {
        return $this->spolu;
    }
}