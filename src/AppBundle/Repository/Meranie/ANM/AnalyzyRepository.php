<?php

namespace AppBundle\Repository\Meranie\ANM;

use Doctrine\ORM\EntityRepository;

class AnalyzyRepository extends EntityRepository
{
    public function findAllOrderByOM()
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.om')
            ->getQuery()
            ->execute();
    }

    public function findAllOrderByOST()
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.ost')
            ->getQuery()
            ->execute();
    }

    public function findAllOrderByDevice()
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.device')
            ->getQuery()
            ->execute();
    }
}