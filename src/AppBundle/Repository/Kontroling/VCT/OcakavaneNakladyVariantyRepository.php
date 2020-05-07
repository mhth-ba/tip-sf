<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class OcakavaneNakladyVariantyRepository extends EntityRepository
{
    public function getOcakavaneNakladyVarianty($id)
    {
        return $this->createQueryBuilder('onv')
            ->andWhere('onv.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('onv.id')
            ->getQuery()
            ->execute();
    }
}