<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class KonstantyRepository extends EntityRepository
{
    public function getKonstanty($id)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('k.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}