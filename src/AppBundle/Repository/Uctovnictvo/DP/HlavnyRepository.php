<?php

namespace AppBundle\Repository\Uctovnictvo\DP;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

class HlavnyRepository extends EntityRepository
{
    // hlavné záznamy
    public function getPolozky()
    {
        $date = new \DateTime("2017-12-01");
        $date = $date->format("Y-m-d");

        return $this->createQueryBuilder('h')
            ->andWhere('h.obdobie > :date')
            ->setParameter('date', $date)
            ->addOrderBy('h.obdobie', 'desc')
            ->addOrderBy('h.druh', 'asc')
            ->addOrderBy('h.id', 'asc')
            ->getQuery()
            ->execute();
    }

    // hlavné záznamy pre testovanie (super user)
    public function getPolozkySuper()
    {
        $date = new \DateTime("2000-12-01");
        $date = $date->format("Y-m-d");

        return $this->createQueryBuilder('h')
            ->andWhere('h.obdobie > :date')
            ->setParameter('date', $date)
            ->addOrderBy('h.obdobie', 'desc')
            ->addOrderBy('h.druh', 'asc')
            ->addOrderBy('h.id', 'asc')
            ->getQuery()
            ->execute();
    }

    // NADMERNÝ ODPOČET
    // predchádzajúce zdaňovacie obdobie
    public function getPredchadzajuce($id)
    {
        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('AppBundle:Uctovnictvo\DP\Hlavny', 'h');
        $rsm->addFieldResult('h', 'id', 'id');
        $rsm->addFieldResult('h', 'obdobie', 'obdobie');
        $rsm->addFieldResult('h', 'podane', 'podane');
        $rsm->addJoinedEntityResult('AppBundle:Uctovnictvo\DP\DruhPriznania', 'd', 'h', 'druh');
        $rsm->addFieldResult('d', 'druh_id', 'id');
        $rsm->addFieldResult('d', 'druh', 'druh');

        $query = $this->_em->createNativeQuery(
            'SELECT h.id, obdobie, podane, d.ID druh_id, d.Druh druh
             FROM Uctovnictvo.DP_Hlavny h
             INNER JOIN Uctovnictvo._RefDruhPriznania d ON h.Druh_ID = d.ID
             WHERE Obdobie IN
               (SELECT DATEADD(month, -1, Obdobie) as Obdobie
                FROM Uctovnictvo.DP_Hlavny WHERE ID = ?)
             ORDER BY Obdobie, ID',
            $rsm
        );
        $query->setParameter(1, $id);

        return $query->getResult();
    }

    // DODATOČNÉ priznanie
    // rovnaké zdaňovacie obdobie
    public function getSuvisiace($id)
    {
        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('AppBundle:Uctovnictvo\DP\Hlavny', 'h');
        $rsm->addFieldResult('h', 'id', 'id');
        $rsm->addFieldResult('h', 'obdobie', 'obdobie');
        $rsm->addFieldResult('h', 'podane', 'podane');
        $rsm->addJoinedEntityResult('AppBundle:Uctovnictvo\DP\DruhPriznania', 'd', 'h', 'druh');
        $rsm->addFieldResult('d', 'druh_id', 'id');
        $rsm->addFieldResult('d', 'druh', 'druh');

        $query = $this->_em->createNativeQuery(
            'SELECT h.id, obdobie, podane, d.ID druh_id, d.Druh druh
             FROM Uctovnictvo.DP_Hlavny h
             INNER JOIN Uctovnictvo._RefDruhPriznania d ON h.Druh_ID = d.ID
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