<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class CenaTeplaRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('ct')
            ->orderBy('ct.id', 'desc')
            ->getQuery()
            ->execute();
    }
}