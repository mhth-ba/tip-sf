<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('h')
            ->addOrderBy('h.obdobie', 'desc')
            ->addOrderBy('h.druh', 'asc')
            ->addOrderBy('h.id', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getPredchadzajuci($id)
    {
        return $this->createQueryBuilder('h')
            ->select('h.predchadzajuci')
            ->andWhere('h.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}