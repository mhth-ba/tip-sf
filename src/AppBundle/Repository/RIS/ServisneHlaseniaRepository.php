<?php

namespace AppBundle\Repository\RIS;

use Doctrine\ORM\EntityRepository;

class ServisneHlaseniaRepository extends EntityRepository
{
    public function findNevyriesene()
    {
        return $this->createQueryBuilder('sh')
            ->andWhere('vyriesene', false)
            ->orderBy('sh.datum', 'desc')
            ->getQuery()
            ->execute();
    }
}