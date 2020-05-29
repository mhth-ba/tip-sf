<?php

namespace AppBundle\Entity\Kontroling\VCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VCT\VariantRepository")
 * @ORM\Table(name="VCT_Variant", schema="Kontroling")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="VCT_Variant_Novy",
 *         query="EXECUTE [Kontroling].[VCT_Variant_Novy] @Hlavny_ID = :hlavny_id",
 *         resultClass="AppBundle\Entity\Kontroling\VCT\Variant"
 *     ),
 *     @ORM\NamedNativeQuery(
 *         name="VCT_Variant_Vymazat",
 *         query="EXECUTE [Kontroling].[VCT_Variant_Vymazat] @Variant_ID = :variant_id",
 *         resultClass="AppBundle\Entity\Kontroling\VCT\Variant"
 *     )
 * })
 */
class Variant extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\VCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="decimal", precision=38, scale=10)
     */
    private $vychod;

    /**
     * @ORM\Column(type="decimal", precision=38, scale=10)
     */
    private $zapad;

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

    public function getVychod()
    {
        return $this->vychod;
    }

    public function setVychod($vychod)
    {
        $this->vychod = $vychod;
    }

    public function getZapad()
    {
        return $this->zapad;
    }

    public function setZapad($zapad)
    {
        $this->zapad = $zapad;
    }
}