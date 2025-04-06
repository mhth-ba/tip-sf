<?php

namespace AktionBundle\Repository;

use Doctrine\ORM\EntityRepository;

class DataRepository extends EntityRepository
{
    public function findMe()
    {
        return $this->createQueryBuilder('data')
            ->setMaxResults(10)
            ->andWhere('data.rc = :rc')
            ->setParameter('rc', '060377')
            ->orderBy('data.datum', 'desc')
            ->getQuery()
            ->execute();
    }
}