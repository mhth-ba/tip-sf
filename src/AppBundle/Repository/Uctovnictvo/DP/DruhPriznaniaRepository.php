<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class DruhPriznaniaRepository extends EntityRepository
{
    public function getDruhy()
    {
        return $this->createQueryBuilder('dp')
            ->orderBy('dp.id')
            ->getQuery()
            ->execute();
    }
}