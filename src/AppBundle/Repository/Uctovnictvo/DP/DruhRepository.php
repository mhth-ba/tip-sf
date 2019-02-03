<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class DruhRepository extends EntityRepository
{
    public function getDruhy()
    {
        return $this->createQueryBuilder('d')
            ->orderBy('d.id')
            ->getQuery()
            ->execute();
    }
}