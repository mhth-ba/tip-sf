<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodPrietokRepository extends EntityRepository
{
    public function getTpVSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 81')
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
            ->andWhere('vvt.kategoria = 91')
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
            ->andWhere('vvt.kategoria = 82')
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
            ->andWhere('vvt.kategoria = 92')
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
            ->andWhere('vvt.kategoria = 84')
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
            ->andWhere('vvt.kategoria = 94')
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
            ->andWhere('vvt.kategoria = 85')
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
            ->andWhere('vvt.kategoria = 95')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}