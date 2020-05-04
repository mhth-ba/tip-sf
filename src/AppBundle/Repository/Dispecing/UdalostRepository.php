<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class UdalostRepository extends EntityRepository
{
    public function getZoznamUdalosti()
    {
        return $this->createQueryBuilder('u')
            ->orderBy('u.id', 'asc')
            ->getQuery()
            ->execute();
    }
}