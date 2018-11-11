<?php

namespace AppBundle\Repository\Kontroling;

use Doctrine\ORM\EntityRepository;

class StavRepository extends EntityRepository
{
    public function getStavy()
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.id', 'asc')
            ->getQuery()
            ->execute();
    }
}