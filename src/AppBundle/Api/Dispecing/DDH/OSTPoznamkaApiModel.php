<?php

namespace AppBundle\Api\Dispecing\DDH;

use AppBundle\Api\DefaultApiModel;

class OSTPoznamkaApiModel extends DefaultApiModel
{
    public $id;

    public $datum_cas;

    public $ost;

    public $poznamka;

    public $valid;
}