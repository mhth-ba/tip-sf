<?php

namespace AppBundle\Entity\Kontroling\VCT;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Kontroling\VCT\UploadRepository")
 * @ORM\Table(name="VCT_Upload", schema="Kontroling")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="Excel_OcakavanaDodavka",
 *         query="EXECUTE [Kontroling].[Excel_OcakavanaDodavka] @Hlavny_ID = :id",
 *         resultClass="AppBundle\Entity\Kontroling\VCT\OcakavanaDodavka"
 *     ),
 *     @ORM\NamedNativeQuery(
 *         name="Excel_SkutocneNaklady",
 *         query="EXECUTE [Kontroling].[Excel_SkutocneNaklady_1-X] @Hlavny_ID = :id",
 *         resultClass="AppBundle\Entity\Kontroling\VCT\SkutocneNaklady"
 *     )
 * })
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
     * @ORM\Column(type="boolean", name="Valid")
     */
    private $platne;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\VCT\Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Kontroling\UploadType")
     */
    private $upload;

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
     */
    private $vymazal;

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

    public function getPlatne()
    {
        return $this->platne;
    }

    public function setPlatne($platne)
    {
        $this->platne = $platne;
    }

    public function getHlavny()
    {
        return $this->hlavny;
    }

    public function setHlavny($hlavny)
    {
        $this->hlavny = $hlavny;
    }

    public function getUpload()
    {
        return $this->upload;
    }

    public function setUpload($upload)
    {
        $this->upload = $upload;
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

    public function getVymazal()
    {
        return $this->vymazal;
    }

    public function setVymazal($vymazal)
    {
        $this->vymazal = $vymazal;
    }
}