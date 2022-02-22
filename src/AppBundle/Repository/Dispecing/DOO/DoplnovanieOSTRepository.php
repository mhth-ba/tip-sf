<?php

namespace AppBundle\Repository\Dispecing\DOO;

use Doctrine\ORM\EntityRepository;

class DoplnovanieOSTRepository extends EntityRepository
{
    public function findDoplnovanieOdpustanieByRokMesiac($dateFrom, $dateTo)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('d.ost')
            ->getQuery()
            ->execute();
    }
}