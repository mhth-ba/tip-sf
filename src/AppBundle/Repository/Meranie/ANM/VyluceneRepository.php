<?php

namespace AppBundle\Repository\Meranie\ANM;

use Doctrine\ORM\EntityRepository;

class VyluceneRepository extends EntityRepository
{
    public function findAllOrderByKategoria()
    {
        return $this->createQueryBuilder('v')
            ->orderBy('v.kategoria')
            ->getQuery()
            ->execute();
    }
}