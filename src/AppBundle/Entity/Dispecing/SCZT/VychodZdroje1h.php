<?php

namespace AppBundle\Entity\Dispecing\SCZT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\SCZT\VychodZdroje1hRepository")
 * @ORM\Table(name="SCZTV_Zdroje_1h_AVG", schema="Dispecing")
 */
class VychodZdroje1h extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="guid")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\SCZT\Kategoria")
     */
    private $kategoria;

    /**
     * @ORM\Column(type="datetime")
     */
    private $hodina;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=2)
     */
    private $priemer;

    public function getId()
    {
        return $this->id;
    }

    public function getKategoria()
    {
        return $this->kategoria;
    }

    public function getHodina()
    {
        return $this->getTimestampWithOffset($this->hodina);
    }

    public function getPriemer()
    {
        return $this->priemer;
    }
}