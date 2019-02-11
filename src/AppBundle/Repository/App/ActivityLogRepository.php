<?php

namespace AppBundle\Repository\App;

use Doctrine\ORM\EntityRepository;

class ActivityLogRepository extends EntityRepository
{
    public function findUctDPUserActivityAll()
    {
        return $this->createQueryBuilder('al')
            ->andWhere('al.schema = :schema')
            ->setParameter('schema', "Uctovnictvo")
            ->andWhere('al.table LIKE :table')
            ->setParameter('table', "%DP_%")
            ->orderBy('al.createdAt', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findUctDPUserActivityByHlavny()
    {

    }
}