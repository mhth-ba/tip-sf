<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class PredbezneHlasenieRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('ph')
            ->andWhere('ph.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('ph.doklad')
            ->getQuery()
            ->execute();
    }
}