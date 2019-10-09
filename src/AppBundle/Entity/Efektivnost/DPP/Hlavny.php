<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\HlavnyRepository")
 * @ORM\Table(name="DPP_Hlavny", schema="Efektivnost")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="Excel_DennyPlanPrevadzky",
 *         query="EXECUTE [Efektivnost].[Excel_DennyPlanPrevadzky] @Datum = :datum, @Vytvoril_ID = :user_id",
 *         resultClass="AppBundle\Entity\Efektivnost\DPP\Hlavny"
 *     )
 * })
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
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $datum;

    /**
     * @ORM\Column(type="datetime", name="ModifiedAt")
     */
    private $zmenene;

    /**
     * @ORM\Column(type="date", name="Datum")
     */
    private $den;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    /**
     * Set the default values
     * This works as the constructor of a persisted class is not called upon hydration.
     */
    public function __construct()
    {
        $this->datum = new \DateTime();
        $this->zmenene = new \DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getZmenene()
    {
        return $this->getTimestampWithoutOffset($this->zmenene);
    }

    public function setZmenene($zmenene)
    {
        $this->zmenene = $zmenene;
    }

    public function getDen()
    {
        return $this->getTimestampWithoutOffset($this->den);
    }

    public function setDen($den)
    {
        $this->den = $den;
    }

    public function getVytvoril()
    {
        return $this->vytvoril;
    }

    public function setVytvoril($vytvoril)
    {
        $this->vytvoril = $vytvoril;
    }
}