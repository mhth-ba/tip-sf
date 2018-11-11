<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\DelenieNakladovRepository")
 * @ORM\Table(name="SCT_Klucovanie", schema="Kontroling")
 */
class DelenieNakladov extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Polozka")
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

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getTpv()
    {
        return $this->tpv;
    }

    public function setTpv($tpv)
    {
        $this->tpv = $tpv;
    }

    public function getTpz()
    {
        return $this->tpz;
    }

    public function setTpz($tpz)
    {
        $this->tpz = $tpz;
    }
}