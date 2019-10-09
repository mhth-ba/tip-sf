<?php

namespace AppBundle\Repository\Efektivnost\DPP;

use Doctrine\ORM\EntityRepository;

class PrognozaRepository extends EntityRepository
{
    private function formatDateFrom($date)
    {
        return new \DateTimeImmutable($date->format('Y-m-d') . ' 00:00:00.000');
    }

    private function formatDateTo($date)
    {
        return new \DateTimeImmutable($date->format('Y-m-d') . ' 23:59:59.000');
    }

    public function getPrognozaWunder($datum)
    {
        $datum1 = $this->formatDateFrom($datum);
        $datum2 = $this->formatDateTo($datum);

        return $this->createQueryBuilder('p')
            ->andWhere('p.provider = 1')
            ->andWhere('p.datum BETWEEN :datum1 AND :datum2')
            ->setParameter('datum1', $datum1)
            ->setParameter('datum2', $datum2)
            ->orderBy('p.datum')
            ->getQuery()
            ->execute();
    }

    public function getPrognozaAladin($datum)
    {
        $datum1 = $this->formatDateFrom($datum);
        $datum2 = $this->formatDateTo($datum);

        return $this->createQueryBuilder('p')
            ->andWhere('p.provider = 2')
            ->andWhere('p.datum BETWEEN :datum1 AND :datum2')
            ->setParameter('datum1', $datum1)
            ->setParameter('datum2', $datum2)
            ->orderBy('p.datum')
            ->getQuery()
            ->execute();
    }
}