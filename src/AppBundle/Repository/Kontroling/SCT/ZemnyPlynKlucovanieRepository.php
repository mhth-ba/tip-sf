<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class ZemnyPlynKlucovanieRepository extends EntityRepository
{
    public function getFakturovaneNaklady($id)
    {
        return $this->createQueryBuilder('zpk')
            ->andWhere('zpk.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('zpk.polozka', 'asc')
            ->getQuery()
            ->execute();
    }
}