<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class DodavkaRepository extends EntityRepository
{
    public function getDodavka($id)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('d.id')
            ->getQuery()
            ->execute();
    }
}