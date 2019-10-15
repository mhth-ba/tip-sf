<?php

namespace AppBundle\Api\Kontroling\NCT;

use AppBundle\Api\DefaultApiModel;

class PlanDodavkyTeplaApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $hlavny;

    public $zdroj;

    public $v_kwh;

    public $z_kwh;
}