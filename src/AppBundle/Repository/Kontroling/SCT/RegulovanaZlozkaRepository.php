<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class RegulovanaZlozkaRepository extends EntityRepository
{
    public function getRegulovanaZlozka($id)
    {
        return $this->createQueryBuilder('rz')
            ->andWhere('rz.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}