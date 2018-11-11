<?php

namespace AppBundle\Entity\Kontroling;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\PolozkaRepository")
 * @ORM\Table(name="_RefPolozka", schema="Kontroling")
 */
class Polozka
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\Column(type="string")
     */
    private $jednotka;

    /**
     * @ORM\Column(type="smallint")
     */
    private $desatiny;

    public function getId()
    {
        return $this->id;
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function getJednotka()
    {
        return $this->jednotka;
    }

    public function getDesatiny()
    {
        return $this->desatiny;
    }
}