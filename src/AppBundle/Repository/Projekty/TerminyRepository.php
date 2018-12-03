<?php

namespace AppBundle\Repository\Projekty;

use Doctrine\ORM\EntityRepository;

class TerminyRepository extends EntityRepository
{
    public function findTerminy()
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.id', 'asc')
            ->getQuery()
            ->execute();
    }
}