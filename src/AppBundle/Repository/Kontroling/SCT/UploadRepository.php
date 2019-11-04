<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class UploadRepository extends EntityRepository
{
    public function findUploadedGeneralFiles($id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.upload = 1')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.id', 'desc')
            ->getQuery()
            ->execute();
    }

    public function getLastUploadedDodaneTeplo($id)
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

    public function getLastUploadedSkutocneNaklady($id)
    {
        return $this->createQueryBuilder('u')
            ->setMaxResults(1)
            ->andWhere('u.upload = 3')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getLastUploadedDanoveOdpisy($id)
    {
        return $this->createQueryBuilder('u')
            ->setMaxResults(1)
            ->andWhere('u.upload = 4')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function uploadDodaneTeplo($id)
    {
        return $this->createNativeNamedQuery('Excel_DodaneTeplo')
            ->setParameter('id', $id)
            ->execute();
    }

    public function uploadSkutocneNaklady($id)
    {
        return $this->createNativeNamedQuery('Excel_SkutocneNaklady')
            ->setParameter('id', $id)
            ->execute();
    }

    public function uploadDanoveOdpisy($id)
    {
        return $this->createNativeNamedQuery('Excel_DanoveOdpisy')
            ->setParameter('id', $id)
            ->execute();
    }
}