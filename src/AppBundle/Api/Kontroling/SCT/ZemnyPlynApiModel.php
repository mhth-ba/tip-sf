<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class ZemnyPlynApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $hlavny;

    public $zdroj;

    public $mesiac;

    public $objem_m3;

    public $objem_mwh;

    public $fmso;

    public $fmsp;

    public $fmsd;

    public $vsd;

    public $dan_mwh;

    public $dan_eur;

    public $pdm;
}