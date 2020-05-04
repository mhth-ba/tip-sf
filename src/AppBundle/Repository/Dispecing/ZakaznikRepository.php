<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class ZakaznikRepository extends EntityRepository
{
    public function getZoznamZakaznikov()
    {
        return $this->createQueryBuilder('z')
            ->orderBy('z.id', 'asc')
            ->getQuery()
            ->execute();
    }
}