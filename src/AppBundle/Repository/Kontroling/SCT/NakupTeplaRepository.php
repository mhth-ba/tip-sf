<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class NakupTeplaRepository extends EntityRepository
{
    public function getNakladyNaNakupTepla($id)
    {
        return $this->createQueryBuilder('nm')
            ->andWhere('nm.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('nm.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}