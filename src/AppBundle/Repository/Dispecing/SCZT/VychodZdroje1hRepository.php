<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class VychodZdroje1hRepository extends EntityRepository
{
    public function getPPC($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 14')
            ->andWhere('vz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTpV($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 11')
            ->andWhere('vz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getSlovnaft($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 15')
            ->andWhere('vz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getVhJ($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 12')
            ->andWhere('vz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getTeplota($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.kategoria = 5')
            ->andWhere('vz.hodina BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vz.hodina', 'asc')
            ->getQuery()
            ->execute();
    }
}