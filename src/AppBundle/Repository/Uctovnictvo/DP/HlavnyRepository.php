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

    public function findPredchadzajuci($id)
    {
        return $this->createQueryBuilder('h')
            ->select('h.predchadzajuci')
            ->andWhere('h.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }
}