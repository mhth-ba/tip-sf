<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class HlavnyApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $zmenene;

    public $nct_dodavka;

    public $nct_cena;

    public $stav;

    public $nazov;

    public $rok;

    public $vytvoril;

    public $upravil;

    public $poznamka;

    public $upload;
}
