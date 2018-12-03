<?php

namespace AppBundle\Repository\Projekty;

use Doctrine\ORM\EntityRepository;

class UlohyRepository extends EntityRepository
{
    public function findUlohy()
    {
        return $this->createQueryBuilder('u')
            ->addOrderBy('u.zadane', 'desc')
            ->addOrderBy('u.id', 'desc')
            ->getQuery()
            ->execute();
    }
}