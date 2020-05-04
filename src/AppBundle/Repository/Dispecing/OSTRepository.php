<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class OSTRepository extends EntityRepository
{
    public function getOST()
    {
        return $this->createQueryBuilder('ost')
            ->orderBy('ost.id', 'asc')
            ->getQuery()
            ->execute();
    }
}