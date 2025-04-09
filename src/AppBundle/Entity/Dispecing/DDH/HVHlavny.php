<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\OSTHlavnyRepository")
 * @ORM\Table(name="DDH_OST_Hlavny", schema="Dispecing")
 */
class HVHlavny extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $datum;

    /**
     * @ORM\Column(type="string")
     */
    private $dispecer_1;

    /**
     * @ORM\Column(type="string")
     */
    private $dispecer_2;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getDispecer1()
    {
        return $this->dispecer_1;
    }

    public function setDispecer1($dispecer_1)
    {
        $this->dispecer_1 = $dispecer_1;
    }

    public function getDispecer2()
    {
        return $this->dispecer_2;
    }

    public function setDispecer2($dispecer_2)
    {
        $this->dispecer_2 = $dispecer_2;
    }
}