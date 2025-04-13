<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class ZmenaNaCWRepository extends EntityRepository
{
    public function getByHlavnyId($hlavnyId)
    {
        return $this->createQueryBuilder('z')
            ->andWhere('z.hlavny = :hlavnyId')
            ->setParameter('hlavnyId', $hlavnyId)
            ->orderBy('z.datum_cas', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function getLatestStatusesOfDevices(\DateTime $selectedDate)
    {
        // First get all distinct zariadenie values
        $devices = $this->createQueryBuilder('z')
            ->select('DISTINCT z.zariadenie')
            ->andWhere('z.zariadenie IS NOT NULL')
            ->andWhere('z.datum_cas <= :selectedDate')
            ->setParameter('selectedDate', $selectedDate)
            ->getQuery()
            ->getResult();

        $result = [];

        // For each device, get the latest status
        foreach ($devices as $device) {
            $latestStatus = $this->createQueryBuilder('z')
                ->andWhere('z.zariadenie = :zariadenie')
                ->andWhere('z.datum_cas <= :selectedDate')
                ->setParameter('zariadenie', $device['zariadenie'])
                ->setParameter('selectedDate', $selectedDate)
                ->orderBy('z.datum_cas', 'DESC')
                ->setMaxResults(1)
                ->getQuery()
                ->getOneOrNullResult();

            if ($latestStatus) {
                $result[] = $latestStatus;
            }
        }

        return $result;
    }
}