<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class ZmenaNaVhJRepository extends EntityRepository
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

    public function getFilteredData($filters)
    {
        $qb = $this->createQueryBuilder('z')
            ->where('z.datum_cas >= :dateFrom')
            ->andWhere('z.datum_cas <= :dateTo')
            ->setParameter('dateFrom', new \DateTime($filters['dateFrom'] . ' 00:00:00'))
            ->setParameter('dateTo', new \DateTime($filters['dateTo'] . ' 23:59:59'));
            
        // Apply zariadenie filter
        if (!empty($filters['zariadenie'])) {
            $qb->andWhere('z.zariadenie LIKE :zariadenie')
                ->setParameter('zariadenie', '%' . $filters['zariadenie'] . '%');
        }
        
        // Apply stav filter
        if (!empty($filters['stav'])) {
            $qb->andWhere('z.stav IN (:stav)')
                ->setParameter('stav', $filters['stav']);
        }
        
        return $qb->orderBy('z.datum_cas', 'DESC')->getQuery()->getResult();
    }
}