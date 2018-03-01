<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class DodaneTeploApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $platne;

    public $hlavny;

    public $zdroj;

    public $v_kwh;

    public $v_kw;

    public $z_kwh;

    public $z_kw;
}