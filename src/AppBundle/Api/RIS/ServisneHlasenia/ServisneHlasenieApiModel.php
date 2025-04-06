<?php

namespace AppBundle\Api\RIS\ServisneHlasenia;

class ServisneHlasenieApiModel
{
    public $id;

    public $createdAt;

    public $vyvoril;

    public $datum;

    public $oznamovatel;

    public $miesto;

    public $profylaktika;

    public $popis;

    public $datumRiesenia;

    public $riesitel;

    public $skupina;

    public $pricina;

    public $riesenie;

    public $vyriesene;

    private $links = [];

    public function addLink($ref, $url)
    {
        $this->links[$ref] = $url;
    }

    public function getLinks()
    {
        return $this->links;
    }
}
