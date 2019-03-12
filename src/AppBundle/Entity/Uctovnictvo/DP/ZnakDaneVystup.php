<?php
namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\ZnakDaneVystupRepository")
 * @ORM\Table(name="_RefZnakDaneVystup", schema="Uctovnictvo")
 */
class ZnakDaneVystup extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=2)
     */
    private $znak;

    /**
     * @ORM\Column(type="text")
     */
    private $popis;

    /**
     * @ORM\Column(type="smallint")
     */
    private $sadzba;

    /**
     * @ORM\Column(type="integer", name="UcetHK")
     */
    private $ucet_hk;

    /**
     * @ORM\Column(type="integer", name="OrderID")
     */
    private $orderID;

    public function __toString()
    {
        return (string) $this->znak;
    }

    public function getZnak()
    {
        return $this->znak;
    }

    public function getPopis()
    {
        return $this->popis;
    }

    public function getSadzba()
    {
        return $this->sadzba;
    }

    public function getUcetHk()
    {
        return $this->ucet_hk;
    }

    public function getOrderId()
    {
        return $this->orderID;
    }
}