<?php

namespace AppBundle\Repository\Meranie\RM;

use Doctrine\ORM\EntityRepository;

class ReportRepository extends EntityRepository
{
    public function getReport($id)
    {
        return $this->createQueryBuilder('r')
            ->where('r.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('r.kategoria', 'asc')
            ->getQuery()
            ->execute();
    }
}