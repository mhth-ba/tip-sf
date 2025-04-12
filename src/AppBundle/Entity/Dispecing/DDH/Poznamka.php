<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\PoznamkaRepository")
 * @ORM\Table(name="DDH_OST_Poznamka", schema="Dispecing")
 */
class Poznamka extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datum_cas;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $ost;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $poznamka;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $valid;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getDatumCas()
    {
        return $this->getTimestampWithoutOffset($this->datum_cas);
    }

    public function setDatumCas($datum_cas)
    {
        $this->datum_cas = $datum_cas;
    }

    public function getOst()
    {
        return $this->ost;
    }

    public function setOst($ost)
    {
        $this->ost = $ost;
    }

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function setPoznamka($poznamka)
    {
        $this->poznamka = $poznamka;
    }

    public function getValid()
    {
        return $this->valid;
    }

    public function setValid($valid)
    {
        $this->valid = $valid;
    }
}