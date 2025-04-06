<?php

namespace AppBundle\Api\Dispecing\DDH;

use AppBundle\Api\DefaultApiModel;

class OSTPraceNaOSTPrevadzkaApiModel extends DefaultApiModel
{
    public $id;

    public $ost;

    public $datum_cas_zaciatok;

    public $datum_cas_ukoncenia;

    public $vplyv_na_dodavku;

    public $vyvod;

    public $poznamka;

    public $stav;

    public $vybavuje;

    public $priloha;

    public $valid;
}
