<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class DodaneTeploRepository extends EntityRepository
{
    public function getDodaneTeplo($id)
    {
        return $this->createQueryBuilder('dt')
            ->andWhere('dt.platne = 1')
            ->andWhere('dt.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}