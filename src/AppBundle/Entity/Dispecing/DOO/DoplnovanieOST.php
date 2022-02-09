<?php

namespace AppBundle\Entity\Dispecing\DOO;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DOO\DoplnovanieOSTRepository")
 * @ORM\Table(name="DOO_OST", schema="Dispecing")
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
     * @ORM\Column(type="datetime")
     */
    private $datum;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $hodnota;

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

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }
}