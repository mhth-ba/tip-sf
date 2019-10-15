<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\RegulovanaZlozkaRepository")
 * @ORM\Table(name="SCT_RegulovanaZlozka", schema="Kontroling")
 */
class RegulovanaZlozka extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $datum;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\SCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $prikon;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="DoLimitu")
     */
    private $doLimitu;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="NadLimit")
     */
    private $nadLimit;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $zaklad;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $priplatok;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="KDKWNL")
     */
    private $kdkwnl;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="RZFN")
     */
    private $rzfn;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="PZ")
     */
    private $pz;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10, name="RZFNaPZ")
     */
    private $rzfnapz;


    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function getPrikon()
    {
        return $this->prikon;
    }

    public function setPrikon($prikon)
    {
        $this->prikon = $prikon;
    }

    public function getDoLimitu()
    {
        return $this->doLimitu;
    }

    public function setDoLimitu($doLimitu)
    {
        $this->doLimitu = $doLimitu;
    }

    public function getNadLimit()
    {
        return $this->nadLimit;
    }

    public function setNadLimit($nadLimit)
    {
        $this->nadLimit = $nadLimit;
    }

    public function getZaklad()
    {
        return $this->zaklad;
    }

    public function setZaklad($zaklad)
    {
        $this->zaklad = $zaklad;
    }

    public function getPriplatok()
    {
        return $this->priplatok;
    }

    public function setPriplatok($priplatok)
    {
        $this->priplatok = $priplatok;
    }

    public function getKdkwnl()
    {
        return $this->kdkwnl;
    }

    public function getRzfn()
    {
        return $this->rzfn;
    }

    public function getPz()
    {
        return $this->pz;
    }

    public function getRzfnapz()
    {
        return $this->rzfnapz;
    }
}