<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class PrilohyHVRepository extends EntityRepository
{
    public function getAllPrilohy()
    {
        return $this->createQueryBuilder('u')
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findPrilohyByHlavny($id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->execute();
    }
}