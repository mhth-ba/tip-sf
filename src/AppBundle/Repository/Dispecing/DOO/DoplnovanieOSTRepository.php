<?php

namespace AppBundle\Repository\Dispecing\DOO;

use Doctrine\ORM\EntityRepository;

class DoplnovanieOSTRepository extends EntityRepository
{
    public function findDoplnovanieOdpustanieByRokMesiac($dateFrom, $dateTo)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('d.ost')
            ->getQuery()
            ->execute();
    }

    public function findDoplnovanieOdpustanieOSTFilter($dateFrom, $dateTo, $days)
    {
        switch ($days) {
            case 1:
                return $this->createQueryBuilder('d')
                    ->select('d.ost')
                    ->andWhere('d.datum BETWEEN :from AND :to')
                    ->setParameter('from', $dateFrom)
                    ->setParameter('to', $dateTo)
                    ->orderBy('d.ost')
                    ->distinct()
                    ->getQuery()
                    ->execute();
            case 2:
                return $this->createQueryBuilder('d')
                    ->select('d.ost')
                    ->andWhere('d.datum BETWEEN :from AND :to')
                    ->setParameter('from', $dateFrom)
                    ->setParameter('to', $dateTo)
                    ->andWhere('((d.hodnota > 0.5 AND d.hodnota2 > 0.5 AND d.kategoria IN (511, 521)) OR (d.hodnota > 0.1 AND d.hodnota2 > 0.1 AND d.kategoria IN (512, 522)))')
                    ->orderBy('d.ost')
                    ->distinct()
                    ->getQuery()
                    ->execute();
            case 3:
                return $this->createQueryBuilder('d')
                    ->select('d.ost')
                    ->andWhere('d.datum BETWEEN :from AND :to')
                    ->setParameter('from', $dateFrom)
                    ->setParameter('to', $dateTo)
                    ->andWhere('((d.hodnota > 0.5 AND d.hodnota2 > 0.5 AND d.hodnota3 > 0.5 AND d.kategoria IN (511, 521)) OR (d.hodnota > 0.1 AND d.hodnota2 > 0.1 AND d.hodnota3 > 0.1 AND d.kategoria IN (512, 522)))')
                    ->orderBy('d.ost')
                    ->distinct()
                    ->getQuery()
                    ->execute();
            case 4:
                return $this->createQueryBuilder('d')
                    ->select('d.ost')
                    ->andWhere('d.datum BETWEEN :from AND :to')
                    ->setParameter('from', $dateFrom)
                    ->setParameter('to', $dateTo)
                    ->andWhere('((d.hodnota > 0.5 AND d.hodnota2 > 0.5 AND d.hodnota3 > 0.5 AND d.hodnota4 > 0.5 AND d.kategoria IN (511, 521)) OR (d.hodnota > 0.1 AND d.hodnota2 > 0.1 AND d.hodnota3 > 0.1 AND d.hodnota4 > 0.1 AND d.kategoria IN (512, 522)))')
                    ->orderBy('d.ost')
                    ->distinct()
                    ->getQuery()
                    ->execute();
            case 5:
                return $this->createQueryBuilder('d')
                    ->select('d.ost')
                    ->andWhere('d.datum BETWEEN :from AND :to')
                    ->setParameter('from', $dateFrom)
                    ->setParameter('to', $dateTo)
                    ->andWhere('((d.hodnota > 0.5 AND d.hodnota2 > 0.5 AND d.hodnota3 > 0.5 AND d.hodnota4 > 0.5 AND d.hodnota5 > 0.5 AND d.kategoria IN (511, 521)) OR (d.hodnota > 0.1 AND d.hodnota2 > 0.1 AND d.hodnota3 > 0.1 AND d.hodnota4 > 0.1 AND d.hodnota5 > 0.1 AND d.kategoria IN (512, 522)))')
                    ->orderBy('d.ost')
                    ->distinct()
                    ->getQuery()
                    ->execute();
        }
    }
}