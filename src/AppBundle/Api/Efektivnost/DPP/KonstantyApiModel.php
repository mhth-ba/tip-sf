<?php

namespace AppBundle\Api\Efektivnost\DPP;

use AppBundle\Api\DefaultApiModel;

class KonstantyApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $vykon_max_tpv;

    public $vykon_max_tpz;

    public $krivka_vychod;

    public $krivka_zapad;

    public $vyhrevnost_zp;

    public $ucinnost_tpv;

    public $ucinnost_vhj;

    public $ucinnost_tpz;

    public $dmm_tpv;

    public $dmm_vhj;

    public $dmm_tpz;

    public $dmm_limit;

    public $ppc_min;

    public $ppc_max;

    public $slovnaft_min;

    public $slovnaft_max;

    public $ppc_para;

    public $ppc_zmluva;

    public $ppc_hv;
}