<?php

namespace AppBundle\Repository\Dispecing\DEO;

use Doctrine\ORM\EntityRepository;

class HlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('h')
            ->orderBy('h.datum_zistenia', 'desc')
            ->getQuery()
            ->execute();
    }

    public function createHlavny($user_id)
    {
        return $this->createNativeNamedQuery('DEO_Hlavny_Novy')
            ->setParameter('user_id', $user_id)
            ->execute();
    }
}