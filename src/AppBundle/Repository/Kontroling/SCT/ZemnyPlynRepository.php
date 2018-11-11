<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class ZemnyPlynRepository extends EntityRepository
{
    public function getVychod($id)
    {
        return $this->createQueryBuilder('zp')
            ->andWhere('zp.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('zp.zdroj = :zdroj')
            ->setParameter('zdroj', 1)
            ->orderBy('zp.mesiac', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getZapad($id)
    {
        return $this->createQueryBuilder('zp')
            ->andWhere('zp.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('zp.zdroj = :zdroj')
            ->setParameter('zdroj', 3)
            ->orderBy('zp.mesiac', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getJuh($id)
    {
        return $this->createQueryBuilder('zp')
            ->andWhere('zp.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('zp.zdroj = :zdroj')
            ->setParameter('zdroj', 2)
            ->orderBy('zp.mesiac', 'asc')
            ->getQuery()
            ->execute();
    }

    public function getKotolne($id)
    {
        return $this->createQueryBuilder('zp')
            ->andWhere('zp.hlavny = :id')
            ->setParameter('id', $id)
            ->andWhere('zp.zdroj = :zdroj')
            ->setParameter('zdroj', 4)
            ->orderBy('zp.mesiac', 'asc')
            ->getQuery()
            ->execute();
    }
}