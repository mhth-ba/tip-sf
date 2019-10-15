<?php

namespace AppBundle\Repository\App;

use AppBundle\Entity\App\Role;
use Doctrine\ORM\EntityRepository;

class RoleRepository extends EntityRepository
{
    /**
     * Get all roles ascending ordered by name
     *
     * @return Role[]
     */
    public function findAllOrderedById()
    {
        return $this->createQueryBuilder('role')
            ->orderBy('role.id', 'asc')
            ->getQuery()
            ->execute();
    }

    /**
     * Get all granted roles to all users
     *
     * @return array
     */
    public function findAllGrantedRolesToAllUsers()
    {
        return $this->createQueryBuilder('role')
            ->join('role.users', 'grants')
            ->addSelect('grants')
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * Get list of roles regarding SCT app
     *
     * @return array
     */
    public function findRolesSCT()
    {
        return $this->createQueryBuilder('role')
            ->andWhere('role.role LIKE :role')
            ->setParameter('role', 'ROLE_SCT_%')
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * Get list of roles regarding Danove priznanie app
     *
     * @return array
     */
    public function findRolesDP()
    {
        return $this->createQueryBuilder('role')
            ->andWhere('role.role LIKE :role')
            ->setParameter('role', 'ROLE_DP_UCT%')
            ->getQuery()
            ->getArrayResult();
    }
}