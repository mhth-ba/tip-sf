<?php

namespace AppBundle\Entity\Meranie\ANM;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\ANM\PrehladPoznamkaRepository", readOnly=true)
 * @ORM\Table(name="ANM_PrehladPoznamka", schema="Meranie")
 */
class PrehladPoznamka extends BaseEntity
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="string")
     */
    private $poznamka;

    /**
     * @ORM\Column(type="integer")
     */
    private $pocet;

    public function getPoznamka()
    {
        return $this->poznamka;
    }

    public function getPocet()
    {
        return $this->pocet;
    }
}