<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class NormativneMnozstvoRepository extends EntityRepository
{
    public function getVychod($id)
    {
        return $this->createQueryBuilder('nm')
            ->andWhere('nm.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('nm.zdroj = :zdroj')
            ->setParameter('zdroj', 1)
            ->orderBy('nm.polozka', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getJuh($id)
    {
        return $this->createQueryBuilder('nm')
            ->andWhere('nm.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('nm.zdroj = :zdroj')
            ->setParameter('zdroj', 2)
            ->orderBy('nm.polozka', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getZapad($id)
    {
        return $this->createQueryBuilder('nm')
            ->andWhere('nm.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('nm.zdroj = :zdroj')
            ->setParameter('zdroj', 3)
            ->orderBy('nm.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}