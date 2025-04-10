<?php

namespace AppBundle\Repository\Dispecing;

use Doctrine\ORM\EntityRepository;

class PoruchovkaRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('poruchovka')
            ->orderBy('poruchovka.id', 'asc')
            ->getQuery()
            ->execute();
    }
}