<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('dpp')
            ->orderBy('dpp.den', 'desc')
            ->getQuery()
            ->execute();
    }

    public function getZoznamEditor()
    {
        return $this->createQueryBuilder('dpp')
            ->orderBy('dpp.den', 'desc')
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

    public function uploadDennyPlanPrevadzky($datum, $user_id)
    {
        return $this->createNativeNamedQuery('Excel_DennyPlanPrevadzky')
            ->setParameter('datum', $datum)
            ->setParameter('user_id', $user_id)
            ->execute();
    }
}