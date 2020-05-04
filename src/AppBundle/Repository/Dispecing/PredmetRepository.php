<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class PredmetRepository extends EntityRepository
{
    public function getZoznamPredmetov()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'asc')
            ->getQuery()
            ->execute();
    }
}