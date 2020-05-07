<?php

namespace AppBundle\Repository\App;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

class ActivityLogRepository extends EntityRepository
{
    public function findKontSCTUserActivityAll()
    {
        return $this->createQueryBuilder('al')
            ->andWhere('al.schema = :schema')
            ->setParameter('schema', 'Kontroling')
            ->andWhere('al.table LIKE :table')
            ->setParameter('table', 'SCT_%')
            ->orderBy('al.id', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findKontVCTUserActivityAll()
    {
        return $this->createQueryBuilder('al')
            ->andWhere('al.schema = :schema')
            ->setParameter('schema', 'Kontroling')
            ->andWhere('al.table LIKE :table')
            ->setParameter('table', 'VCT_%')
            ->orderBy('al.id', 'desc')
            ->getQuery()
            ->execute();
    }

    public function findUctDPUserActivityAll()
    {
        // -> addJoinedEntityResult
        // (1) class: cesta k entite syntaxou triedy
        // (2) alias: alias tabulky, ktora je pripojovana v sql query
        // (3) alias: alias tabulky, ku ktorej sa pripaja v sql query
        // (4) relation: nazov entity v symfony

        $rsm = new ResultSetMapping();
        $rsm->addEntityResult('AppBundle:App\ActivityLog', 'a');
        $rsm->addFieldResult('a', 'id', 'id');
        $rsm->addFieldResult('a', 'CreatedAt', 'datum');
        $rsm->addFieldResult('a', 'TableName', 'table');
        $rsm->addJoinedEntityResult('AppBundle:App\User', 'u', 'a', 'user');
        $rsm->addFieldResult('u', 'user_id', 'id');
        $rsm->addFieldResult('u', 'fullname', 'fullname');

        $query = $this->_em->createNativeQuery(
            "SELECT a.id, a.CreatedAt, a.TableName, u.ID user_id, u.FullName fullname
             FROM dbo.ActivityLog a
             INNER JOIN dbo.Users u ON a.User_ID = u.ID
             WHERE a.SchemaName = 'Uctovnictvo'
               AND a.TableName = 'DP_Vstup'
             ORDER BY a.ID DESC",
            $rsm
        );

        return $query->getResult();
    }

    public function findUctDPUserActivityByHlavny()
    {

    }
}