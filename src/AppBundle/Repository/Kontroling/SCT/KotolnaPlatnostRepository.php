<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class KotolnaPlatnostRepository extends EntityRepository
{
    public function findPlatnostByHlavny($id)
    {
        return $this->createQueryBuilder('kp')
            ->andWhere('kp.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}