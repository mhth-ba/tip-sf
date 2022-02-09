<?php

namespace AppBundle\Entity\Dispecing\DS;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DS\DoplnovanieSietRepository")
 * @ORM\Table(name="DOO_Siet", schema="Dispecing")
 */
class DoplnovanieSiet extends BaseEntity
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

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }
}