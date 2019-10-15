<?php

namespace AppBundle\Entity\Kontroling\SCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\SCT\KotolnaRepository")
 * @ORM\Table(name="SCT_Kotolna", schema="Kontroling")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="SCT_Kotolna_Nova",
 *         query="EXECUTE [Kontroling].[SCT_Kotolna_Nova] @Hlavny_ID = :hlavny_id, @Vytvoril_ID = :user_id",
 *         resultClass="AppBundle\Entity\Kontroling\SCT\Kotolna"
 *     )
 * })
 */
class Kotolna extends BaseEntity
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
     * @ORM\Column(type="string")
     */
    private $nazov;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     */
    private $vytvoril;

    public function getId()
    {
        return $this->id;
    }

    public function getDatum()
    {
        return $this->getTimestampWithoutOffset($this->datum);
    }

    public function getNazov()
    {
        return $this->nazov;
    }

    public function setNazov($nazov)
    {
        $this->nazov = $nazov;
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