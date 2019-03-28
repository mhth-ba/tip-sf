<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class AktivitaDokladyRepository extends EntityRepository
{
    public function findUserActivityAll()
    {
        return $this->createQueryBuilder('ad')
            ->orderBy('ad.id', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findUserActivityByHlavny($id)
    {
        return $this->createQueryBuilder('ad')
            ->where('ad.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('ad.id', 'desc')
            ->getQuery()
            ->execute();
    }
}