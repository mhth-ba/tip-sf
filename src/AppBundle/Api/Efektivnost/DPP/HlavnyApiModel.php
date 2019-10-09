<?php

namespace AppBundle\Api\Efektivnost\DPP;

use AppBundle\Api\DefaultApiModel;

class HlavnyApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $zmenene;

    public $den;

    public $vytvoril;

    public $upload;
}