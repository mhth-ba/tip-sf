<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class ElektrinaRepository extends EntityRepository
{
    public function getElektrina($id)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('e.id')
            ->getQuery()
            ->execute();
    }
}