<?php

namespace AppBundle\Api\Meranie\ANM;

use AppBundle\Api\DefaultApiModel;

class AnalyzyApiModel extends DefaultApiModel
{
    public $id;

    public $logTime;

    public $readTime;

    public $modul;

    public $device;

    public $balance;

    public $unit;

    public $energy;

    public $volume;

    public $power;

    public $flow;

    public $output;

    public $return;

    public $delta;

    public $om;

    public $ost;

    public $adresa;

    public $odberatel;

    public $tarifa;

    public $vc;

    public $mj;

    public $kategoria;
}