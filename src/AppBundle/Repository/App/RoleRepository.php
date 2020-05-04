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
     * Get list of roles regarding MPP app
     * Miestne prevadzkove predpisy (vyroba)
     *
     * @return array
     */
    public function findRolesMPP()
    {
        return $this->createQueryBuilder('role')
            ->andWhere('role.role LIKE :role')
            ->setParameter('role', 'ROLE_MPP_%')
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * Get list of roles regarding DEO app
     * Evidencia stavov OST a zariadeni (dispecing)
     *
     * @return array
     */
    public function findRolesDEO()
    {
        return $this->createQueryBuilder('role')
            ->andWhere('role.role LIKE :role')
            ->setParameter('role', 'ROLE_DEO_%')
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * Get list of roles regarding SCT app
     * Skutocna cena tepla (kontroling)
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
     * Get list of roles regarding VCT app
     * Vyhodnotenie ceny tepla (kontroling)
     *
     * @return array
     */
    public function findRolesVCT()
    {
        return $this->createQueryBuilder('role')
            ->andWhere('role.role LIKE :role')
            ->setParameter('role', 'ROLE_VCT_%')
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * Get list of roles regarding DP app
     * Danove priznanie (uctovnictvo)
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