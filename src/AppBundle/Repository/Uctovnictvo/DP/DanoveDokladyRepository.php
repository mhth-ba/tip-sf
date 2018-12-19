<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class DanoveDokladyRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('dd')
            ->andWhere('dd.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('dd.doklad')
            ->getQuery()
            ->execute();
    }
}