<?php

namespace AppBundle\Repository\App;

use AppBundle\Entity\App\Grant;
use Doctrine\ORM\EntityRepository;

class GrantRepository extends EntityRepository
{
    /**
     * @return Grant[]
     */
    public function findAllGrantedRoles()
    {
        return $this->createQueryBuilder('grant')
            ->orderBy('grant.role')
            ->getQuery()
            ->execute();
    }

    public function findGrantedRolesToUser($guid)
    {
        return $this->createQueryBuilder('grant')
            ->andWhere('grant.user = :guid')
            ->setParameter('guid', $guid)
            ->getQuery()
            ->execute();
    }

    public function findAllRoles()
    {}

    public function findAllUsers()
    {}
}