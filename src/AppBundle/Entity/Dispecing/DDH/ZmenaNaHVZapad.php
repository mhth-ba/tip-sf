<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\ZmenaNaHVZapadRepository")
 * @ORM\Table(name="DDH_HV_ZmenaNaHV_Zapad", schema="Dispecing")
 */
class ZmenaNaHVZapad extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Dispecing\DDH\HlavnyHV")
     * @ORM\JoinColumn(name="hlavny_id", referencedColumnName="id")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datum_cas;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $poznamka;

    public function getId()
    {
        return $this->id;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
    }

    public function getDatumCas()
    {
        return $this->getTimestampWithoutOffset($this->datum_cas);
    }

    public function setDatumCas($datum_cas)
    {
        $this->datum_cas = $datum_cas;
    }

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function setPoznamka($poznamka)
    {
        $this->poznamka = $poznamka;
    }
}