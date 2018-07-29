<?php

namespace AppBundle\Doctrine\Types;

use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\DateTimeType;

/**
 * Class DateTimeMSSQL
 * @package AppBundle\Doctrine\Types
 *
 * Workaround for MSSQL DateTime data type (3 digits instead of 6 digits in time format milliseconds)
 */
class DateTime extends DateTimeType
{
    private $dateTimeFormatString = 'Y-m-d H:i:s.000';

    public function convertToDatabaseValue($value, AbstractPlatform $platform)
    {
        return ($value !== null)
            ? $value->format($this->dateTimeFormatString) : null;
    }
}