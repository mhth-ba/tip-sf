<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class DispecerRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('dispecer')
            ->orderBy('dispecer.id', 'asc')
            ->getQuery()
            ->execute();
    }
}