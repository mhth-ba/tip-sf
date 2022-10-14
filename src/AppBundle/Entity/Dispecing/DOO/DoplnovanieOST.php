<?php

namespace AppBundle\Entity\Dispecing\DOO;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DOO\DoplnovanieOSTRepository")
 * @ORM\Table(name="DOO_OST_Filter_1", schema="Dispecing")
 */
class DoplnovanieOST extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\Kategoria")
     */
    private $kategoria;

    /**
     * @ORM\Column(type="integer")
     */
    private $ost;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\OST")
     * @ORM\JoinColumn(name="OST", referencedColumnName="cislo")
     */
    private $nazov;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datum;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $hodnota;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $hodnota2;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $hodnota3;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $hodnota4;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $hodnota5;

    public function getId()
    {
        return $this->id;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }

    public function getHodnota2()
    {
        return $this->hodnota2;
    }

    public function getHodnota3()
    {
        return $this->hodnota3;
    }

    public function getHodnota4()
    {
        return $this->hodnota4;
    }

    public function getHodnota5()
    {
        return $this->hodnota5;
    }
}