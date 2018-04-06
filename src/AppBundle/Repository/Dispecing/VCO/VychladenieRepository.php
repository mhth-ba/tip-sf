<?php

namespace AppBundle\Repository\Dispecing\VCO;

use Doctrine\ORM\EntityRepository;

class VychladenieRepository extends EntityRepository
{
    public function getZoznamObdobi()
    {
        return $this->createQueryBuilder('v')
            ->select('v.rok')
            ->addSelect('v.mesiac')
            ->distinct()
            ->addOrderBy('v.rok', 'desc')
            ->addOrderBy('v.mesiac', 'desc')
            ->getQuery()
            ->execute();
    }

    public function getVychladenieByRokMesiac($rok, $mesiac)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.rok = :rok')
            ->setParameter('rok', $rok)
            ->andWhere('v.mesiac = :mesiac')
            ->setParameter('mesiac', $mesiac)
            ->andWhere('v.spotrebaEnergie BETWEEN :e1 AND :e2')
            ->setParameter('e1', 0)
            ->setParameter('e2', 1000000)
            ->andWhere('v.spotrebaObjemu BETWEEN :v1 AND :v2')
            ->setParameter('v1', 0)
            ->setParameter('v2', 1000000)
            ->andWhere('v.tarifa = :t1 OR v.tarifa = :t2')
            ->setParameter('t1', 'MQC')
            ->setParameter('t2', 'MQTUVL')
            ->addOrderBy('v.vychladenie')
            ->addOrderBy('v.ost')
            ->getQuery()
            //->setMaxResults(10)
            ->execute();
    }

    public function getVychladenieByOST($ost)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.ost = :ost')
            ->setParameter('ost', $ost)
            ->andWhere('v.spotrebaEnergie BETWEEN :e1 AND :e2')
            ->setParameter('e1', 0)
            ->setParameter('e2', 1000000)
            ->andWhere('v.spotrebaObjemu BETWEEN :v1 AND :v2')
            ->setParameter('v1', 0)
            ->setParameter('v2', 1000000)
            ->andWhere('v.tarifa = :t1 OR v.tarifa = :t2')
            ->setParameter('t1', 'MQC')
            ->setParameter('t2', 'MQTUVL')
            ->addOrderBy('v.rok', 'desc')
            ->addOrderBy('v.mesiac', 'desc')
            ->addOrderBy('v.om')
            ->addOrderBy('v.mp')
            ->getQuery()
            ->execute();
    }
}