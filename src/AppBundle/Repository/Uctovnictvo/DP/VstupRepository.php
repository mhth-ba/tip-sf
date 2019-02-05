<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class VstupRepository extends EntityRepository
{
    public function findZmeneneByHlavny($id)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.zmenene = 1')
            ->andWhere('v.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('v.doklad')
            ->getQuery()
            ->execute();
    }

    public function findPovodneByHlavny($id)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.zmenene = 0')
            ->andWhere('v.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('v.doklad')
            ->getQuery()
            ->execute();
    }
}