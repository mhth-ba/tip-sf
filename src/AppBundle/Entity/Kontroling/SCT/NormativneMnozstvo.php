<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\NormativneMnozstvoRepository")
 * @ORM\Table(name="SCT_NormativneMnozstvo", schema="Kontroling")
 */
class NormativneMnozstvo extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Zdroj")
     */
    private $zdroj;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Polozka")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $hodnota;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $ucinnost;


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

    public function getZdroj()
    {
        return $this->zdroj;
    }

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getHodnota()
    {
        return $this->hodnota;
    }

    public function setHodnota($hodnota)
    {
        $this->hodnota = $hodnota;
    }

    public function getUcinnost()
    {
        return $this->ucinnost;
    }

    public function setUcinnost($ucinnost)
    {
        $this->ucinnost = $ucinnost;
    }
}