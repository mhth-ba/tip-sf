<?php

namespace AppBundle\Repository\App;

use AppBundle\Entity\App\Role;
use Doctrine\ORM\EntityRepository;

class RoleRepository extends EntityRepository
{
    /**
     * Get all roles descending ordered by name
     *
     * @return Role[]
     */
    public function findAllOrderedById()
    {
        return $this->createQueryBuilder('role')
            ->orderBy('role.id', 'ASC')
            ->getQuery()
            ->execute();
    }

    /**
     * Get all granted roles to users
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

    public function findRolesSCT()
    {
        return $this->createQueryBuilder('role')
            ->andWhere('role.role LIKE :role')
            ->setParameter('role', 'ROLE_SCT%')
            ->getQuery()
            ->getArrayResult();
    }
}