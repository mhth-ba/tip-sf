<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class HlavnyHVRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('h')
            ->orderBy('h.id', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findByOstHlavnyId($ost_hlavny_id)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.ost_hlavny_id = :ost_hlavny_id')
            ->setParameter('ost_hlavny_id', $ost_hlavny_id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}