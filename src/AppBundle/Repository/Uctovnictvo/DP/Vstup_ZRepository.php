<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class Vstup_ZRepository extends EntityRepository
{
    public function findZmeneneByHlavny($id)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.zmenene = 1')
            ->andWhere('vz.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('vz.doklad')
            ->getQuery()
            ->execute();
    }

    public function findPovodneByHlavny($id)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.zmenene = 0')
            ->andWhere('vz.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('vz.doklad')
            ->getQuery()
            ->execute();
    }

    public function findZmeneneById($id)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.zmenene = 1')
            ->andWhere('vz.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }

    public function findPovodneById($id)
    {
        return $this->createQueryBuilder('vz')
            ->andWhere('vz.zmenene = 0')
            ->andWhere('vz.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}