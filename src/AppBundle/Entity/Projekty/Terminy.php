<?php

namespace AppBundle\Entity\Projekty;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Projekty\TerminyRepository")
 * @ORM\Table(name="PR_Terminy", schema="Projekty")
 */
class Terminy extends BaseEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Projekty\Projekty")
     */
    private $projekt;

    /**
     * @ORM\Column(type="date")
     */
    private $datum;

    /**
     * @ORM\Column(type="text")
     */
    private $dovod;

    public function getId()
    {
        return $this->id;
    }

    public function getProjekt()
    {
        return $this->projekt;
    }

    public function getDatum()
    {
        return $this->getTimestampWithOffset($this->datum);
    }

    public function getDovod()
    {
        return $this->dovod;
    }
}