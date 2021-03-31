<?php

namespace AppBundle\Repository\Dispecing\SCZT;

use Doctrine\ORM\EntityRepository;

class ZapadVystupnaTeplotaRepository extends EntityRepository
{
    public function getTpZSkutocnost($dateTo, $dateFrom)
    {
        return $this->createQueryBuilder('vvt')
            ->andWhere('vvt.kategoria = 43')
            ->andWhere('vvt.datum BETWEEN :from AND :to')
            ->setParameter('from', $dateFrom)
            ->setParameter('to', $dateTo)
            ->orderBy('vvt.datum', 'asc')
            ->getQuery()
            ->execute();
    }
}