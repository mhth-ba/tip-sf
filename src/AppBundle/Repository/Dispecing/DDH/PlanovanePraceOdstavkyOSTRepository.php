<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class PlanovanePraceOdstavkyOSTRepository extends EntityRepository
{
    public function getAll()
    {
        return $this->createQueryBuilder('p')
            ->where('p.valid = true OR p.valid IS NULL')
            ->orderBy('p.datum_cas', 'desc')
            ->getQuery()
            ->getResult();
    }
}