<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('ct')
            ->andWhere('ct.stav != 3')
            ->addOrderBy('ct.rok', 'desc')
            ->addOrderBy('ct.mesiac', 'desc')
            ->getQuery()
            ->execute();
    }

    public function createHlavny($rok, $mesiac, $user_id)
    {
        return $this->createNativeNamedQuery('VCT_Hlavny_Novy')
            ->setParameter('rok', $rok)
            ->setParameter('mesiac', $mesiac)
            ->setParameter('user_id', $user_id)
            ->execute();
    }
}