<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;

class SumarizaciaRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->execute();
    }

    public function findR3_4($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "3_4")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR5_6($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "5_6")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR7_8($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "7_8")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR9_10($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "9_10")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR11_12($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "11_12")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR15($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "15")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR20($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "20")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR21($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "21")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR22($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "22")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR23($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "23")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR26_27($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "26_27")
            ->getQuery()
            ->getArrayResult();
    }

    public function findR28($id)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.hlavny = :id')
            ->andWhere('s.riadok = :r')
            ->setParameter('id', $id)
            ->setParameter('r', "28")
            ->getQuery()
            ->getArrayResult();
    }
}