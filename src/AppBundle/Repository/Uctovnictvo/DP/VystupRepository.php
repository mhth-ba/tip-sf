<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class VystupRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('v.doklad')
            ->getQuery()
            ->execute();
    }
}