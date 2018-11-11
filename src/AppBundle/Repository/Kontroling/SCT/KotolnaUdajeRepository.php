<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class KotolnaUdajeRepository extends EntityRepository
{
    public function findUdajeByHlavny($id)
    {
        return $this->createQueryBuilder('ku')
            ->andWhere('ku.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }

    public function findUdajeByKotolna($id)
    {
        return $this->createQueryBuilder('ku')
            ->andWhere('ku.kotolna = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}