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

    public function getTermis($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 7')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTermisOST($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 8')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vv.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTermisPocasie($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->andWhere('vv.kategoria = 9')
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

    public function getExtremesVykon($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->select('MIN(vv.hodnota) as hodnota_min')
            ->addSelect('MAX(vv.hodnota) AS hodnota_max')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->andWhere('vv.kategoria = 1')
            ->orWhere('vv.kategoria = 2')
            ->getQuery()
            ->execute();
    }

    public function getExtremesTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->select('MIN(vv.hodnota) as hodnota_min')
            ->addSelect('MAX(vv.hodnota) as hodnota_max')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->andWhere('vv.kategoria = 5')
            ->getQuery()
            ->execute();
    }

    public function getExtremesKomunikacia($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vv')
            ->select('MIN(vv.hodnota) as hodnota_min')
            ->addSelect('MAX(vv.hodnota) as hodnota_max')
            ->andWhere('vv.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->andWhere('vv.kategoria = 4')
            ->getQuery()
            ->execute();
    }
}