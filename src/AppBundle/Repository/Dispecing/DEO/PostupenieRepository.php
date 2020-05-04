<?php

namespace AppBundle\Repository\Dispecing\DEO;

use Doctrine\ORM\EntityRepository;

class PostupenieRepository extends EntityRepository
{
    public function getPostupeneByHlavny($id)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.hlavny = :id')
            ->setParameter('id', $id)
            ->addOrderBy('p.datum_postupenia', 'asc')
            ->addOrderBy('p.id', 'asc')
            ->getQuery()
            ->execute();
    }
}