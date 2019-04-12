<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class DruhDokladuRepository extends EntityRepository
{
    public function getZnaky()
    {
        return $this->createQueryBuilder('dd')
            ->select('dd.znak')
            ->distinct()
            ->orderBy('dd.znak')
            ->getQuery()
            ->execute();
    }

    public function getDruhy()
    {
        return $this->createQueryBuilder('dd')
            ->addOrderBy('dd.znak')
            ->addOrderBy('dd.druh')
            ->getQuery()
            ->execute();
    }
}