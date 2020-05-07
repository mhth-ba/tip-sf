<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class SkutocneNakladyRepository extends EntityRepository
{
    public function getSkutocneNaklady($id)
    {
        return $this->createQueryBuilder('sn')
            ->andWhere('sn.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('sn.platne = 1')
            ->orderBy('sn.id')
            ->getQuery()
            ->execute();
    }
}