<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodVystupnaTeplotaRepository extends EntityRepository
{
    public function getTpVSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 41')
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
            ->andWhere('vvt.kategoria = 51')
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
            ->andWhere('vvt.kategoria = 42')
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
            ->andWhere('vvt.kategoria = 52')
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
            ->andWhere('vvt.kategoria = 44')
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
            ->andWhere('vvt.kategoria = 54')
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
            ->andWhere('vvt.kategoria = 45')
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
            ->andWhere('vvt.kategoria = 55')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}