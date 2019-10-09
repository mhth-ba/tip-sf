<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class KonstantyRepository extends EntityRepository
{
    public function getKonstanty($id)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}