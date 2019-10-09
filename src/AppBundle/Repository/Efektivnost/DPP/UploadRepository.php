<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class UploadRepository extends EntityRepository
{
    public function getLastUploadedDennyPlanPrevadzky($id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}