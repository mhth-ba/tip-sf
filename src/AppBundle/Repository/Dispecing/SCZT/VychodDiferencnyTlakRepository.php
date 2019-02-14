<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodDiferencnyTlakRepository extends EntityRepository
{
    public function getTpVSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 61')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTpVPredikcia($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 71')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getVhJSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 62')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getVhJPredikcia($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 72')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getPPCSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 64')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getPPCPredikcia($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 74')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getSlovnaftSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 65')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getSlovnaftPredikcia($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 75')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}