<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class DennyPlanPrevadzkyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('dpp')
            ->andWhere('dpp.stav = :stav')
            ->setParameter('stav', 1)
            ->orderBy('dpp.datum', 'desc')
            ->getQuery()
            ->execute();
    }

    public function getZoznamEditor()
    {
        return $this->createQueryBuilder('dpp')
            ->orderBy('dpp.datum', 'desc')
            ->getQuery()
            ->execute();
    }

    public function getDatum($id)
    {
        return $this->createQueryBuilder('dpp')
            ->select('dpp.den')
            ->andWhere('dpp.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}