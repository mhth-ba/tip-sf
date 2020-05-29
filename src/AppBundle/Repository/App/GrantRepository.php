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

    /**
     * Get all roles granted to specified user
     * @param string $guid Unique identifier
     * @return Grant[]
     */
    public function findGrantedRolesToUser($guid)
    {
        return $this->createQueryBuilder('grant')
            ->andWhere('grant.user = :guid')
            ->setParameter('guid', $guid)
            ->getQuery()
            ->execute();
    }

    /**
     * Get all grants for SCT app
     *
     * @return Grant[]
     */
    public function findGrantedRolesSCT()
    {
        return $this->createQueryBuilder('grant')
            ->andWhere('grant.role BETWEEN :start and :end')
            ->setParameter('start', 71)
            ->setParameter('end', 74)
            ->orderBy('grant.role', 'asc')
            ->getQuery()
            ->execute();
    }

    /**
     * Get all grants for VCT app
     *
     * @return Grant[]
     */
    public function findGrantedRolesVCT()
    {
        return $this->createQueryBuilder('grant')
            ->andWhere('grant.role BETWEEN :start and :end')
            ->setParameter('start', 81)
            ->setParameter('end', 83)
            ->orderBy('grant.role', 'asc')
            ->getQuery()
            ->execute();
    }

    /**
     * Get all grans for DEO app
     * Evidencia stavov OST (dispecing)
     *
     * @return Grant[]
     */
    public function findGrantedRolesDEO()
    {
        return $this->createQueryBuilder('grant')
            ->andWhere('grant.role BETWEEN :start and :end')
            ->setParameter('start', 31)
            ->setParameter('end', 32)
            ->orderBy('grant.role', 'asc')
            ->getQuery()
            ->execute();
    }

    public function findAllRoles()
    {}

    public function findAllUsers()
    {}
}