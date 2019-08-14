<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodOSTRepository extends EntityRepository
{
    public function getVentilTUV($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vo')
            ->andWhere('vo.kategoria = 1001')
            ->andWhere('vo.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vo.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getVentilUK($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vo')
            ->andWhere('vo.kategoria = 1002')
            ->andWhere('vo.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vo.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}