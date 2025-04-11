<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\HlavnyHVRepository")
 * @ORM\Table(name="DDH_HV_Hlavny", schema="Dispecing")
 */
class HlavnyHV extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="ost_hlavny_id")
     */
    private $ost_hlavny_id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $dispecer_1;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $dispecer_2;

    public function getId()
    {
        return $this->id;
    }

    public function getOstHlavnyId()
    {
        return $this->ost_hlavny_id;
    }

    public function setOstHlavnyId($ost_hlavny_id)
    {
        $this->ost_hlavny_id = $ost_hlavny_id;
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