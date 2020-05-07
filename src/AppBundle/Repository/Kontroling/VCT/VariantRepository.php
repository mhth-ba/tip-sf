<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class VariantRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('v.id', 'asc')
            ->getQuery()
            ->execute();
    }
}