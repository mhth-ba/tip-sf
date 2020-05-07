<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class PoznamkyRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('p.id', 'asc')
            ->getQuery()
            ->execute();
    }
}