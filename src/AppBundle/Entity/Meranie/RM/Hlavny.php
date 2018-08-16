<?php

namespace AppBundle\Entity\Meranie\RM;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Meranie\RM\HlavnyRepository")
 * @ORM\Table(name="RM_Hlavny", schema="Meranie")
 */
class Hlavny
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
    private $vytvorene;

    /**
     * @ORM\Column(type="date")
     */
    private $datum;

    public function getId()
    {
        return $this->id;
    }

    public function getVytvorene()
    {
        return $this->vytvorene;
    }

    public function getDatum()
    {
        return $this->datum;
    }
}