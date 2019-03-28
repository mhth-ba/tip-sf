<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

class HlavnyRepository extends EntityRepository
{
    public function getZoznam()
    {
        return $this->createQueryBuilder('h')
            ->addOrderBy('h.obdobie', 'desc')
            ->addOrderBy('h.druh', 'asc')
            ->addOrderBy('h.id', 'asc')
            ->getQuery()
            ->execute();
    }

    // NADMERNY ODPOCET
    // predchadzajuce zdanovacie obdobie
    public function getPredchadzajuce($id)
    {
        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('AppBundle:Uctovnictvo\DP\Hlavny', 'h');
        $rsm->addFieldResult('h', 'id', 'id');
        $rsm->addFieldResult('h', 'obdobie', 'obdobie');
        $rsm->addJoinedEntityResult('AppBundle:Uctovnictvo\DP\Druh', 'd', 'h', 'druh');
        $rsm->addFieldResult('d', 'druh_id', 'id');
        $rsm->addFieldResult('d', 'druh', 'druh');

        $query = $this->_em->createNativeQuery(
            'SELECT h.id, obdobie, d.ID druh_id, d.Druh druh
             FROM Uctovnictvo.DP_Hlavny h
             INNER JOIN Uctovnictvo._RefDruh d ON h.Druh_ID = d.ID
             WHERE Obdobie IN
               (SELECT DATEADD(month, -1, Obdobie) as Obdobie
                FROM Uctovnictvo.DP_Hlavny WHERE ID = ?)
             ORDER BY Obdobie, ID',
            $rsm
        );
        $query->setParameter(1, $id);

        return $query->getResult();
    }

    // DODATOCNE priznanie
    // rovnake zdanovacie obdobie
    public function getSuvisiace($id)
    {
        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('AppBundle:Uctovnictvo\DP\Hlavny', 'h');
        $rsm->addFieldResult('h', 'id', 'id');
        $rsm->addFieldResult('h', 'obdobie', 'obdobie');
        $rsm->addFieldResult('h', 'podane', 'podane');
        $rsm->addJoinedEntityResult('AppBundle:Uctovnictvo\DP\Druh', 'd', 'h', 'druh');
        $rsm->addFieldResult('d', 'druh_id', 'id');
        $rsm->addFieldResult('d', 'druh', 'druh');

        $query = $this->_em->createNativeQuery(
            'SELECT h.id, obdobie, podane, d.ID druh_id, d.Druh druh
             FROM Uctovnictvo.DP_Hlavny h
             INNER JOIN Uctovnictvo._RefDruh d ON h.Druh_ID = d.ID
             WHERE Obdobie IN
               (SELECT Obdobie
                FROM Uctovnictvo.DP_Hlavny WHERE ID = ?)
               AND h.ID != ?
             ORDER BY ID',
            $rsm
        );
        $query->setParameter(1, $id);
        $query->setParameter(2, $id);

        return $query->getResult();
    }

    public function findPredchadzajuci($id)
    {
        return $this->createQueryBuilder('h')
            ->select('h.predchadzajuci')
            ->andWhere('h.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findPosledny($id)
    {
        return $this->createQueryBuilder('h')
            ->select('h.posledny')
            ->andWhere('h.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}