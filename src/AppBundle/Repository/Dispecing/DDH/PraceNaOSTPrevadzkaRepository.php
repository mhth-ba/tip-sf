<?php
namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class PraceNaOSTPrevadzkaRepository extends EntityRepository
{
    public function getByHlavnyId($hlavnyId)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.hlavny = :hlavnyId')
            ->setParameter('hlavnyId', $hlavnyId)
            ->orderBy('p.id', 'asc')
            ->getQuery()
            ->getResult();
    }

    public function getOdstavkyNad24Hod($selectedDate)
    {
        // Create DateTime objects for start and end of the selected day
        $startOfDay = new \DateTime($selectedDate);
        $startOfDay->setTime(0, 0, 0);

        $endOfDay = new \DateTime($selectedDate);
        $endOfDay->setTime(23, 59, 59);

        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.valid != false OR p.valid IS NULL');

        // Where start date is on or before the end of the selected day
        $qb->andWhere('p.datum_cas_zaciatok <= :endOfDay');

        // Where end date is null OR end date is on or after the start of the selected day
        $qb->andWhere(
            $qb->expr()->orX(
                $qb->expr()->isNull('p.datum_cas_ukoncenie'),
                $qb->expr()->gte('p.datum_cas_ukoncenie', ':startOfDay')
            )
        );

        $qb->setParameter('startOfDay', $startOfDay);
        $qb->setParameter('endOfDay', $endOfDay);
        $qb->orderBy('p.id', 'asc');

        return $qb->getQuery()->getResult();
    }
}