<?php

namespace AppBundle\Repository\Projekty;

use Doctrine\ORM\EntityRepository;

class CiastkoveRepository extends EntityRepository
{
    public function findCiastkove()
    {
        return $this->createQueryBuilder('c')
            ->addOrderBy('c.zadane', 'desc')
            ->addOrderBy('c.id', 'desc')
            ->getQuery()
            ->execute();
    }
}