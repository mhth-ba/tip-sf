<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class HVHlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('h')
            ->orderBy('h.datum', 'desc')
            ->getQuery()
            ->execute();
    }
}