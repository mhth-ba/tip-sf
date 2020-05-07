<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class NakupTeplaRepository extends EntityRepository
{
    public function getOcakavaneNakladyNaNakupTepla($id)
    {
        return $this->createQueryBuilder('nm')
            ->andWhere('nm.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('nm.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}