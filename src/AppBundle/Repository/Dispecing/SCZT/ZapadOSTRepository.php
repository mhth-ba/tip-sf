<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class ZapadOSTRepository extends EntityRepository
{
    public function getVentilTUV($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vo')
            ->andWhere('vo.kategoria = 1003')
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
            ->andWhere('vo.kategoria = 1004')
            ->andWhere('vo.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vo.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}