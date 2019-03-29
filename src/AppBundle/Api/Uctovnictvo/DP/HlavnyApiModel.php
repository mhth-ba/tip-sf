<?php

namespace AppBundle\Api\Uctovnictvo\DP;

use AppBundle\Api\DefaultApiModel;

class HlavnyApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $zmenene;

    public $druh;

    public $predchadzajuci;

    public $posledny;

    public $obdobie;

    public $zistene;

    public $podane;

    public $vytvoril;

    public $upravil;

    public $poznamka;

    public $upload;
}