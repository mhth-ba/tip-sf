<?php

namespace AppBundle\Entity\Dispecing\SCZT;
use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\SCZT\VychodZariadeniaRepository")
 * @ORM\Table(name="SCZTV_Zariadenia", schema="Dispecing")
 */
class VychodZariadenia extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datum;

    /**
     * @ORM\Column(type="float")
     */
    private $ppc;

    /**
     * @ORM\Column(type="float")
     */
    private $k5;

    /**
     * @ORM\Column(type="float")
     */
    private $k6;

    /**
     * @ORM\Column(type="float")
     */
    private $slovnaft;

    /**
     * @ORM\Column(type="float")
     */
    private $hk3;

    /**
     * @ORM\Column(type="float")
     */
    private $hk4;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getPpc()
    {
        return $this->ppc;
    }

    public function getK5()
    {
        return $this->k5;
    }

    public function getK6()
    {
        return $this->k6;
    }

    public function getSlovnaft()
    {
        return $this->slovnaft;
    }

    public function getHk3()
    {
        return $this->hk3;
    }

    public function getHk4()
    {
        return $this->hk4;
    }
}