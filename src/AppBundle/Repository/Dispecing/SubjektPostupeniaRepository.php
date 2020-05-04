<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class SubjektPostupeniaRepository extends EntityRepository
{
    public function getZoznamPredmetov()
    {
        return $this->createQueryBuilder('sp')
            ->orderBy('sp.id', 'asc')
            ->getQuery()
            ->execute();
    }
}