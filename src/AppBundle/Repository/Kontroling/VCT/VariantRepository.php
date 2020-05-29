<?php

namespace AppBundle\Repository\Kontroling\VCT;

use Doctrine\ORM\EntityRepository;

class VariantRepository extends EntityRepository
{
    public function findByHlavny($id)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('v.id', 'asc')
            ->getQuery()
            ->execute();
    }

    public function createVariant($hlavny_id)
    {
        return $this->createNativeNamedQuery('VCT_Variant_Novy')
            ->setParameter('hlavny_id', $hlavny_id)
            ->execute();
    }

    public function deleteVariant($variant_id)
    {
        return $this->createNativeNamedQuery('VCT_Variant_Vymazat')
            ->setParameter('variant_id', $variant_id)
            ->execute();
    }
}