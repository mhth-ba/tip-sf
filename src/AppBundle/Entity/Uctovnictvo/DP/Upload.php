<?php

namespace AppBundle\Entity\Uctovnictvo\DP;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Uctovnictvo\DP\UploadRepository")
 * @ORM\Table(name="DP_Upload", schema="Uctovnictvo")
 * @ORM\NamedNativeQueries({
 *     @ORM\NamedNativeQuery(
 *         name="Excel_ALR",
 *         query="EXECUTE [Uctovnictvo].[Import_ALR] @Hlavny_ID = :id",
 *         resultClass="AppBundle\Entity\Uctovnictvo\DP\PredbezneHlasenie"
 *     ),
 *     @ORM\NamedNativeQuery(
 *         name="Excel_DDOKL",
 *         query="EXECUTE [Uctovnictvo].[Import_DDOKL] @Hlavny_ID = :id",
 *         resultClass="AppBundle\Entity\Uctovnictvo\DP\DanoveDoklady"
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
     * @ORM\OneToOne(targetEntity="Hlavny")
     */
    private $hlavny;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Uctovnictvo\UploadType")
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
        return $this->getTimestampWithOffset($this->datum);
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
}