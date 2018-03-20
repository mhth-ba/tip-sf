<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class VyrobaElektrinyRepository extends EntityRepository
{
    public function getVyrobaElektriny($id)
    {
        return $this->createQueryBuilder('ve')
            ->andWhere('ve.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}