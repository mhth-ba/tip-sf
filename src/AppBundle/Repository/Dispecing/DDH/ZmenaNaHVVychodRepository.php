<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class ZmenaNaHVVychodRepository extends EntityRepository
{
    public function getByHlavnyId($hlavnyId)
    {
        return $this->createQueryBuilder('z')
            ->andWhere('z.hlavny = :hlavnyId')
            ->setParameter('hlavnyId', $hlavnyId)
            ->orderBy('z.datum_cas', 'desc')
            ->getQuery()
            ->getResult();
    }

    public function getFilteredData($filters)
    {
        $qb = $this->createQueryBuilder('z')
            ->where('z.datum_cas >= :dateFrom')
            ->andWhere('z.datum_cas <= :dateTo')
            ->setParameter('dateFrom', new \DateTime($filters['dateFrom'] . ' 00:00:00'))
            ->setParameter('dateTo', new \DateTime($filters['dateTo'] . ' 23:59:59'));
            
        // Apply poznamka filter
        if (!empty($filters['poznamka'])) {
            $qb->andWhere('z.poznamka LIKE :poznamka')
                ->setParameter('poznamka', '%' . $filters['poznamka'] . '%');
        }
        
        return $qb->orderBy('z.datum_cas', 'DESC')->getQuery()->getResult();
    }
}