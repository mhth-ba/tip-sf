<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\NakupTeplaRepository")
 * @ORM\Table(name="SCT_NakupTepla", schema="Kontroling")
 */
class NakupTepla extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\Polozka")
     */
    private $polozka;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $ppc;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $slovnaft;

    /**
     * @ORM\Column(type="decimal", precision=37, scale=10)
     */
    private $cw;


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

    public function getPolozka()
    {
        return $this->polozka;
    }

    public function getPpc()
    {
        return $this->ppc;
    }

    public function setPpc($ppc)
    {
        $this->ppc = $ppc;
    }

    public function getSlovnaft()
    {
        return $this->slovnaft;
    }

    public function setSlovnaft($slovnaft)
    {
        $this->slovnaft = $slovnaft;
    }

    public function getCw()
    {
        return $this->cw;
    }

    public function setCw($cw)
    {
        $this->cw = $cw;
    }
}