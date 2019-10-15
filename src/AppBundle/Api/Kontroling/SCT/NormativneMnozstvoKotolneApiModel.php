<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class NormativneMnozstvoKotolneApiModel extends DefaultApiModel
{
    public $id;

    public $primar;

    public $kotolna;

    public $p_teplo;

    public $p_ucinnost;

    public $z_teplo;

    public $z_ucinnost;

    public $vzp;

    public $pstv;

    public $nmzp_mwh;

    public $nmzp_m3;
}