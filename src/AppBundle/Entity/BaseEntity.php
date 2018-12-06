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

    /**
     * @param object $dateTime
     * @return object Timestamp
     */
    protected function getTimestampWithoutOffset($dateTime) {

        $timestamp = $dateTime;

        if ($timestamp != null) {
            return ($timestamp->getTimestamp());
        }

        return $timestamp;
    }
}