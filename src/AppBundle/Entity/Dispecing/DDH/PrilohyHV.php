<?php

namespace AppBundle\Entity\Dispecing\DDH;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Dispecing\DDH\PrilohyHVRepository")
 * @ORM\Table(name="DDH_HV_Prilohy", schema="Dispecing")
 */
class PrilohyHV extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datum;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Dispecing\DDH\HlavnyHV")
     * @ORM\JoinColumn(name="hlavny_id", referencedColumnName="id")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="smallint")
     */
    private $sekcia;

    /**
     * @ORM\Column(type="integer")
     */
    private $entry_id;

    /**
     * @ORM\Column(type="string")
     */
    private $original;

    /**
     * @ORM\Column(type="string")
     */
    private $subor;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     * @ORM\JoinColumn(name="nahral_id", referencedColumnName="ID")
     */
    private $nahral;

    /**
     * Set the default values
     * This works as the constructor of a persisted class is not called upon hydration.
     */
    public function __construct()
    {
        $this->datum = new \DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getDatum(): \DateTime
    {
        return $this->datum;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
    }

    public function getSekcia()
    {
        return $this->sekcia;
    }

    public function setSekcia($sekcia)
    {
        $this->sekcia = $sekcia;
    }

    public function getEntryId()
    {
        return $this->entry_id;
    }

    public function setEntryId($entry_id)
    {
        $this->entry_id = $entry_id;
    }

    public function getOriginal()
    {
        return $this->original;
    }

    public function setOriginal($original)
    {
        $this->original = $original;
    }

    public function getSubor()
    {
        return $this->subor;
    }

    public function setSubor($subor)
    {
        $this->subor = $subor;
    }

    public function getNahral()
    {
        return $this->nahral;
    }

    public function setNahral($nahral)
    {
        $this->nahral = $nahral;
    }
}