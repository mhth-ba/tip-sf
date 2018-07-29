<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodVykonRepository extends EntityRepository
{
    public function getPlan($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 1')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getZdroje($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 2')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getOST($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 3')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getPocetKomunikujucich($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 4')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 5')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getMaxVykon($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->select('MAX(vv.hodnota) AS hodnota')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->andWhere('vv.kategoria = 1')
            ->orWhere('vv.kategoria = 2')
            ->getQuery()
            ->execute();
    }
}