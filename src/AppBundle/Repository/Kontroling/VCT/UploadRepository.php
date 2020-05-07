<?php

namespace AppBundle\Repository\Kontroling\VCT;

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

    public function getLastUploadedOcakavanaDodavka($id)
    {
        return $this->createQueryBuilder('u')
            ->setMaxResults(1)
            ->andWhere('u.upload = 5')
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
            ->andWhere('u.upload = 6')
            ->andWhere('u.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('u.datum', 'desc')
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function uploadOcakavanaDodavka($id)
    {
        return $this->createNativeNamedQuery('Excel_OcakavanaDodavka')
            ->setParameter('id', $id)
            ->execute();
    }

    public function uploadSkutocneNaklady($id)
    {
        return $this->createNativeNamedQuery('Excel_SkutocneNaklady')
            ->setParameter('id', $id)
            ->execute();
    }
}