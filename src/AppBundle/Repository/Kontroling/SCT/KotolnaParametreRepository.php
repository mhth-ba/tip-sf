<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class KotolnaParametreRepository extends EntityRepository
{
    public function findParametreByKotolna($id)
    {
        return $this->createQueryBuilder('kp')
            ->andWhere('kp.kotolna = :id')
            ->setParameter('id', $id)
            ->orderBy('kp.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}