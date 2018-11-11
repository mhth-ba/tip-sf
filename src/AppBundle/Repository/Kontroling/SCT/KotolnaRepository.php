<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class KotolnaRepository extends EntityRepository
{
    public function findKotolne()
    {
        return $this->createQueryBuilder('k')
            ->orderBy('k.id')
            ->getQuery()
            ->execute();
    }

    public function createKotolna($hlavny_id, $user_id)
    {
        return $this->createNativeNamedQuery('SCT_Kotolna_Nova')
            ->setParameter('hlavny_id', $hlavny_id)
            ->setParameter('user_id', $user_id)
            ->execute();
    }
}