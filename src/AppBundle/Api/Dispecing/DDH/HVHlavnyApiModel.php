<?php

namespace AppBundle\Api\Dispecing\DDH;

use AppBundle\Api\DefaultApiModel;

class HVHlavnyApiModel extends DefaultApiModel
{
    public $id;

    public $ost_hlavny_id;

    public $dispecer_1;

    public $dispecer_2;

    public $ost_data; // To store read-only data from OST_Hlavny
}