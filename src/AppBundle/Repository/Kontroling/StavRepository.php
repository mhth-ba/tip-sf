<?php

namespace AppBundle\Repository\Kontroling;

use Doctrine\ORM\EntityRepository;

class StavRepository extends EntityRepository
{
    public function getStavy()
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.id != 3')
            ->orderBy('s.id', 'asc')
            ->getQuery()
            ->execute();
    }
}