<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\OSTHlavnyRepository")
 * @ORM\Table(name="DDH_OST_Hlavny", schema="Dispecing")
 */
class Hlavny extends BaseEntity
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

    /**
     * @ORM\Column(type="string")
     */
    private $poruchovka_1;

    /**
     * @ORM\Column(type="string")
     */
    private $poruchovka_2;

    /**
     * @ORM\Column(type="float")
     */
    private $teplota_letisko;

    /**
     * @ORM\Column(type="float")
     */
    private $teplota_tpv;

    /**
     * @ORM\Column(type="float")
     */
    private $teplota_tpz;

    /**
     * @ORM\Column(type="float")
     */
    private $doplnovanie_tpv;

    /**
     * @ORM\Column(type="float")
     */
    private $doplnovanie_tpz;

    /**
     * Set the default values
     * This works as the constructor of a persisted class is not called upon hydration.
     */
    public function __construct()
    {
        $this->datum = new \Date();
    }

    public function getId()
    {
        return $this->id;
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