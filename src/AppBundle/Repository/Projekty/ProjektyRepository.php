<?php

namespace AppBundle\Repository\Projekty;

use Doctrine\ORM\EntityRepository;

class ProjektyRepository extends EntityRepository
{
    public function findProjekty()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'desc')
            ->getQuery()
            ->execute();
    }
}