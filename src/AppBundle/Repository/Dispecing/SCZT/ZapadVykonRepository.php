<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class ZapadVykonRepository extends EntityRepository
{
    public function getPlan($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zv')
            ->andWhere('zv.kategoria = 1')
            ->andWhere('zv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTermis($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zv')
            ->andWhere('zv.kategoria = 27')
            ->andWhere('zv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getZdroje($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zv')
            ->andWhere('zv.kategoria = 2')
            ->andWhere('zv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zv')
            ->andWhere('zv.kategoria = 5')
            ->andWhere('zv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getOSTVlastneVykon($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 133')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getOSTCudzieVykon($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 134')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getOSTVlastnePrenos($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 143')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getOSTCudziePrenos($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 144')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}