<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class UploadRepository extends EntityRepository
{
    public function getLastUploadedALR($id)
    {
        return $this->createQueryBuilder('u')
            ->setMaxResults(1)
            ->andWhere('u.upload = 1')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getLastUploadedDDOKL($id)
    {
        return $this->createQueryBuilder('u')
            ->setMaxResults(1)
            ->andWhere('u.upload = 2')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function uploadALR($id)
    {
        return $this->createNativeNamedQuery('Excel_ALR')
            ->setParameter('id', $id)
            ->execute();
    }

    public function uploadDDOKL($id)
    {
        return $this->createNativeNamedQuery('Excel_DDOKL')
            ->setParameter('id', $id)
            ->execute();
    }

    public function findPrilohyByHlavny($id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.upload = 3')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findActivityAll()
    {
        return $this->createQueryBuilder('u')
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findActivityByHlavny($id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->execute();
    }
}