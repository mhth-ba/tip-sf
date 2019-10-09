<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class ObjednavkaRepository extends EntityRepository
{
    public function getObjednavka($id)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('o.zdroj')
            ->getQuery()
            ->execute();
    }
}