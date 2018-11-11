<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class PoznamkyRepository extends EntityRepository
{
    public function getPoznamky($id)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('p.id', 'asc')
            ->getQuery()
            ->execute();
    }
}