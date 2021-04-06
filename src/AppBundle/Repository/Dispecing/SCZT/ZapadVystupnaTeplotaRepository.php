<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class ZapadVystupnaTeplotaRepository extends EntityRepository
{
    public function getTpZSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zvt')
            ->andWhere('zvt.kategoria = 43')
            ->andWhere('zvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTpZPredikcia($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zvt')
            ->andWhere('zvt.kategoria = 53')
            ->andWhere('zvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}