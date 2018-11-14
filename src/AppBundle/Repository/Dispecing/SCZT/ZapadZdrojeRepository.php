<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class ZapadZdrojeRepository extends EntityRepository
{
    public function getTpZ($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 13')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getCW($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 16')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 5')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getHK1($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 31')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getHK3($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 32')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getK6($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 33')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTG1($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 34')
            ->andWhere('zz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}