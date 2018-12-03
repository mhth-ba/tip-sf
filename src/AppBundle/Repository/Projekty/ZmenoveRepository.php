<?php

namespace AppBundle\Repository\Projekty;

use Doctrine\ORM\EntityRepository;

class ZmenoveRepository extends EntityRepository
{
    public function findZmenove()
    {
        return $this->createQueryBuilder('z')
            ->addOrderBy('z.zadane', 'desc')
            ->addOrderBy('z.id', 'desc')
            ->getQuery()
            ->execute();
    }
}