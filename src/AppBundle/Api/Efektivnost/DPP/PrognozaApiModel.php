<?php

namespace AppBundle\Api\Efektivnost\DPP;

use AppBundle\Api\DefaultApiModel;

class PrognozaApiModel extends DefaultApiModel
{
    public $datum;

    public $teplota;

    public $vystupna;

    public $vratna;

    public $vykon_v;

    public $prietok_v;

    public $vykon_z;

    public $prietok_z;

    public $tg1_z;
}