<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class RiadkyRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('r.riadok',  'asc')
            ->getQuery()
            ->execute();
    }


}