<?php

namespace AppBundle\Repository\Kontroling\NCT;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function findVsetky()
    {
        return $this->createQueryBuilder('h')
            ->orderBy('h.id', 'asc')
            ->getQuery()
            ->execute();
    }

    public function findFinalne()
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.verzia = 1')
            ->orderBy('h.rok', 'asc')
            ->getQuery()
            ->execute();
    }
}