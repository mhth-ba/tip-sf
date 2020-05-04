<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class TypRepository extends EntityRepository
{
    public function getZoznamTypov()
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.id', 'asc')
            ->getQuery()
            ->execute();
    }
}