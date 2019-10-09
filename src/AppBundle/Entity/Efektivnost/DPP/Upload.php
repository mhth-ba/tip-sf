<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\UploadRepository")
 * @ORM\Table(name="DPP_Upload", schema="Efektivnost")
 */
class Upload extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Efektivnost\DPP\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\Column(type="string")
     */
    private $original;

    /**
     * @ORM\Column(type="string")
     */
    private $subor;

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

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
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
}