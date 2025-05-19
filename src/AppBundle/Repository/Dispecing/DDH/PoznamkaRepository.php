<?php
namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class PoznamkaRepository extends EntityRepository
{
    public function getAll()
    {
        return $this->createQueryBuilder('p')
            ->where('p.valid != false OR p.valid IS NULL')
            ->orderBy('p.id', 'desc')
            ->getQuery()
            ->getResult();
    }
}