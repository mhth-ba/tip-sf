<?php

namespace AppBundle\Api\Dispecing\DEO;

use AppBundle\Api\DefaultApiModel;

class PostupenieApiModel extends DefaultApiModel
{
    public $id;

    public $hlavny;

    public $vytvorene;

    public $zmenene;

    public $vytvoril;

    public $upravil;

    public $datum_postupenia;

    public $subjekt_postupenia;

    public $udalost;

    public $vyriesene;

    public $datum_odstranenia;

    public $poznamka;
}
