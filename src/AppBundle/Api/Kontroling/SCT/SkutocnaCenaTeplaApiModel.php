<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class SkutocnaCenaTeplaApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $zmenene;

    public $stav;

    public $nazov;

    public $rok;

    public $vytvoril;

    public $upravil;

    public $poznamka;

    public $upload;
}
