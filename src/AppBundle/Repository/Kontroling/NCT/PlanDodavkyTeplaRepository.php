<?php

namespace AppBundle\Repository\Kontroling\NCT;

use Doctrine\ORM\EntityRepository;

class PlanDodavkyTeplaRepository extends EntityRepository
{
    public function getPlanDodavkyTepla($id)
    {
        return $this->createQueryBuilder('pdt')
            ->andWhere('pdt.platne = 1')
            ->andWhere('pdt.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}