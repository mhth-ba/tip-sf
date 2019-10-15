<?php

namespace AppBundle\Repository\Kontroling\SCT;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('ct')
            ->andWhere('ct.stav != 3')
            ->orderBy('ct.rok', 'desc')
            ->getQuery()
            ->execute();
    }

    public function createHlavny($rok, $user_id)
    {
        return $this->createNativeNamedQuery('SCT_Hlavny_Novy')
            ->setParameter('rok', $rok)
            ->setParameter('user_id', $user_id)
            ->execute();
    }
}