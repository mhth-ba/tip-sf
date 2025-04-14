<?php

namespace AppBundle\Repository\Dispecing\DDH;

use Doctrine\ORM\EntityRepository;

class AuditLogRepository extends EntityRepository
{
    public function findUserActivityAll()
    {
        $results = $this->createQueryBuilder('a')
            ->orderBy('a.id', 'desc')
            ->getQuery()
            ->getResult();

        return $this->formatResults($results);
    }

    public function findUserActivityByHlavny($id)
    {
        $results = $this->createQueryBuilder('a')
            ->where('a.hlavny = :id')
            ->setParameter('id', $id)
            ->orderBy('a.id', 'desc')
            ->getQuery()
            ->getResult();

        return $this->formatResults($results);
    }

    public function findUserActivityByDate($date)
    {
        $startDate = clone $date;
        $startDate->setTime(0, 0, 0);

        $endDate = clone $date;
        $endDate->setTime(23, 59, 59);

        $results = $this->createQueryBuilder('a')
            ->where('a.vytvorene >= :startDate')
            ->andWhere('a.vytvorene <= :endDate')
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->orderBy('a.id', 'desc')
            ->getQuery()
            ->getResult();

        return $this->formatResults($results);
    }

    /**
     * Format the results to match the desired output structure
     *
     * @param array $results
     * @return array
     */
    private function formatResults(array $results)
    {
        $formattedResults = [];

        foreach ($results as $result) {
            $formattedResult = [
                'id' => $result->getId(),
                'hlavny' => $result->getHlavny(),
                'hodnota' => $result->getHodnota(),
                'riadok' => $result->getRiadok(),
                'stlpec' => $result->getStlpec(),
                'tabulka' => $result->getTabulka(),
                'vytvorene' => $result->getVytvorene() instanceof \DateTime ?
                    $result->getVytvorene()->getTimestamp() : $result->getVytvorene(),
            ];

            if ($result->getPouzivatel()) {
                $user = $result->getPouzivatel();
                $formattedResult['pouzivatel'] = [
//                    'id' => $user->getId(),
//                    'username' => $user->getUsername(),
                    'fullname' => $user->getFullname(),
//                    'mail' => $user->getMail(),
//                    'title' => $user->getTitle(),
//                    'department' => $user->getDepartment()
                ];
            } else {
                $formattedResult['pouzivatel'] = null;
            }

            $formattedResults[] = $formattedResult;
        }

        return $formattedResults;
    }
}