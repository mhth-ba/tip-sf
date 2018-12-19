<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class ZnakDaneVystupRepository extends EntityRepository
{
    public function findAllSorted()
    {
        return $this->createQueryBuilder('zdv')
            ->orderBy('zdv.orderID')
            ->getQuery()
            ->execute();
    }
}