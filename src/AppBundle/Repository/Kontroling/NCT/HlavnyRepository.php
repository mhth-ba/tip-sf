<?php

namespace AppBundle\Repository\Kontroling\NCT;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function getVsetky()
    {
        return $this->createQueryBuilder('h')
            ->orderBy('h.id', 'asc')
            ->getQuery()
            ->execute();
    }
}