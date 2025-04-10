<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class AuditLogRepository extends EntityRepository
{
    public function findUserActivityAll()
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.id', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findUserActivityByHlavny($id)
    {
        return $this->createQueryBuilder('a')
            ->where('a.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('a.id', 'desc')
            ->getQuery()
            ->execute();
    }
}