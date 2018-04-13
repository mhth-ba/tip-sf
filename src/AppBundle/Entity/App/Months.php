<?php

namespace AppBundle\Entity\App;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\App\MonthsRepository")
 * @ORM\Table(name="Months", schema="utility")
 */
class Months
{
    /**
     * @ORM\Id
     * @ORM\Column(type="smallint", name="YearNo")
     */
    private $rok;

    /**
     * @ORM\Column(type="smallint", name="MonthNo")
     */
    private $mesiac;

    /**
     * @ORM\Column(type="date", name="DateIndex")
     */
    private $datum;

    public function getRok()
    {
        return $this->rok;
    }

    public function getMesiac()
    {
        return $this->mesiac;
    }

    public function getDatum()
    {
        return $this->datum;
    }
}