<?php
namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\ZnakDaneVstupRepository")
 * @ORM\Table(name="_RefZnakDaneVstup", schema="Uctovnictvo")
 */
class ZnakDaneVstup extends BaseEntity
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