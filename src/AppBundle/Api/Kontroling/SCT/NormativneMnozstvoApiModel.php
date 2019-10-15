<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class NormativneMnozstvoApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $hlavny;

    public $zdroj;

    public $polozka;

    public $hodnota;

    public $ucinnost;
}