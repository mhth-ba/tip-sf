<?php

namespace AppBundle\Repository\Dispecing\VCO;

use Doctrine\ORM\EntityRepository;

class PrehladARepository extends EntityRepository
{
    public function getPrehlad($rok, $mesiac)
    {
        return $this->createQueryBuilder('prehlad_a')
            ->andWhere('prehlad_a.rok = :rok')
            ->setParameter('rok', $rok)
            ->andWhere('prehlad_a.mesiac = :mesiac')
            ->setParameter('mesiac', $mesiac)
            ->orderBy('prehlad_a.id')
            ->getQuery()
            ->execute();
    }
}