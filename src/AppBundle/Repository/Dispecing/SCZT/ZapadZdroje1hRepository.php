<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class ZapadZdroje1hRepository extends EntityRepository
{
    public function getTpZ($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 13')
            ->andWhere('zz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getCW($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 16')
            ->andWhere('zz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('zz')
            ->andWhere('zz.kategoria = 5')
            ->andWhere('zz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('zz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }
}