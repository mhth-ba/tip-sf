<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class OcakavanaDodavkaRepository extends EntityRepository
{
    public function getOcakavanaDodavka($id)
    {
        return $this->createQueryBuilder('dt')
            ->andWhere('dt.platne = 1')
            ->andWhere('dt.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }
}