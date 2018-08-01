<?php

namespace AppBundle\Entity\Dispecing\SCZT;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\SCZT\VychodZdrojeRepository")
 * @ORM\Table(name="SCZTV_Zdroje", schema="Dispecing")
 */
class VychodZdroje
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\SCZT\Kategoria")
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
        return $this->datum;
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }
}