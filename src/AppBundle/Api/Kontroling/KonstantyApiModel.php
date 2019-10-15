<?php

namespace AppBundle\Api\Kontroling;

use AppBundle\Api\DefaultApiModel;

/**
 * Spolocny API model pre NCT aj SCT
 */
class KonstantyApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $hlavny;

    public $polozka;

    public $hodnota;
}