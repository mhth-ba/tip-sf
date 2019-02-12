<?php

namespace AppBundle\Api\Uctovnictvo\DP;

use AppBundle\Api\DefaultApiModel;

class DokladApiModel extends DefaultApiModel
{
    public $id;

    public $znak;

    public $doklad;

    public $referencia;

    public $obchodny_partner;

    public $icdph;

    public $druh_dokladu;

    public $datum_dokladu;

    public $datum_uctovania;

    public $suma_bez_dph;

    public $dph;

    public $suma_s_dph;

    public $zmenene;
}