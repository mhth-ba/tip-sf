<?php

namespace AppBundle\Entity\Efektivnost\DPP;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Efektivnost\DPP\WeatherProviderRepository")
 * @ORM\Table(name="_RefWeatherProvider", schema="Efektivnost")
 */
class WeatherProvider
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $provider;

    public function getId()
    {
        return $this->id;
    }

    public function getProvider()
    {
        return $this->provider;
    }
}