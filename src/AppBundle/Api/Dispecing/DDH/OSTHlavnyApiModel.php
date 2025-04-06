<?php

namespace AppBundle\Api\Dispecing\DDH;

use AppBundle\Api\DefaultApiModel;

class OSTHlavnyApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $dispecer_1;

    public $dispecer_2;

    public $poruchovka_1;

    public $poruchovka_2;

    public $teplota_letisko;

    public $teplota_tpv;

    public $teplota_tpz;

    public $doplnovanie_tpv;

    public $doplnovanie_tpz;
}