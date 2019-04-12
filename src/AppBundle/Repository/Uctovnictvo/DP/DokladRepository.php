<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class DokladRepository extends EntityRepository
{
    public function getPopisyDokladov()
    {
        return $this->createQueryBuilder('d')
            ->orderBy('d.id')
            ->getQuery()
            ->execute();
    }
}