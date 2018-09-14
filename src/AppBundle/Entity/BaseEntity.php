<?php

namespace AppBundle\Entity;

class BaseEntity
{
    /**
     * @param object $dateTime
     * @return object Timestamp
     */
    protected function getTimestampWithOffset($dateTime)
    {
        $timestamp = $dateTime;

        if ($timestamp !== null) {
            return ($timestamp->getTimestamp() + $timestamp->getOffset());
        }

        return $timestamp;
    }
}