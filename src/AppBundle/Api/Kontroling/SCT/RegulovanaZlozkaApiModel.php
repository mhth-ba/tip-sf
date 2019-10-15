<?php

namespace AppBundle\Api\Kontroling\SCT;

use AppBundle\Api\DefaultApiModel;

class RegulovanaZlozkaApiModel extends DefaultApiModel
{
    public $id;

    public $datum;

    public $hlavny;

    public $prikon;

    public $doLimitu;

    public $nadLimit;

    public $zaklad;

    public $priplatok;

    public $kdkwnl; //kazdy dalsi kw nad limit

    public $rzfn; // regulovana zlozka fixnych nakladov

    public $pz; // primerany zisk

    public $rzfnapz; // regulovana zlozka fixov a primerany zisk
}