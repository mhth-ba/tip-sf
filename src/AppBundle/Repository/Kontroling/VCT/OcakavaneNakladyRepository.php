<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class OcakavaneNakladyRepository extends EntityRepository
{
    public function getOcakavaneNaklady($id)
    {
        return $this->createQueryBuilder('on')
            ->andWhere('on.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('on.id')
            ->getQuery()
            ->execute();
    }
}