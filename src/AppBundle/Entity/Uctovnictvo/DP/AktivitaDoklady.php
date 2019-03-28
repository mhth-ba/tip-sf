<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\AktivitaDokladyRepository")
 * @ORM\Table(name="DP_AktivitaDoklady", schema="Uctovnictvo")
 */
class AktivitaDoklady extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $vytvorene;

    /**
     * @ORM\Column(type="string")
     */
    private $tabulka;

    /**
     * @ORM\Column(type="string")
     */
    private $stlpec;

    /**
     * @ORM\Column(type="string")
     */
    private $hodnota;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $pouzivatel;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Uctovnictvo\DP\Hlavny")
     */
    private $hlavny;

    public function getId()
    {
        return $this->id;
    }

    public function getVytvorene()
    {
        return $this->getTimestampWithoutOffset($this->vytvorene);
    }

    public function getTabulka()
    {
        return $this->tabulka;
    }

    public function getStlpec()
    {
        return $this->stlpec;
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }

    public function getPouzivatel()
    {
        return $this->pouzivatel;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }
}