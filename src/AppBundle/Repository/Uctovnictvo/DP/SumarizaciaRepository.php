<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class SumarizaciaRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}