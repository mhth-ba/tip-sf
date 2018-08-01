<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodZdrojeRepository extends EntityRepository
{
    public function getPPC($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 14')
            ->andWhere('vz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTpV($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 11')
            ->andWhere('vz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getSlovnaft($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 15')
            ->andWhere('vz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getVhJ($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 12')
            ->andWhere('vz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 5')
            ->andWhere('vz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getMaxVykon($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->select('MAX(vz.hodnota) AS hodnota')
            ->andWhere('vz.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->andWhere('vz.kategoria = 14')
            ->orWhere('vz.kategoria = 11')
            ->orWhere('vz.kategoria = 15')
            ->orWhere('vz.kategoria = 12')
            ->getQuery()
            ->execute();
    }
}