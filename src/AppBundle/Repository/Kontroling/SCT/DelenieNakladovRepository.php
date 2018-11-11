<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class DelenieNakladovRepository extends EntityRepository
{
    public function getDelenieNakladov($id)
    {
        return $this->createQueryBuilder('dn')
            ->andWhere('dn.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('dn.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}