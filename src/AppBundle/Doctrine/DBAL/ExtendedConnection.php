<?php

namespace AppBundle\Doctrine\DBAL;

use Doctrine\DBAL\Connection;

class ExtendedConnection extends Connection
{
    public function execProcedureWithResultSet($sql, $sqlParams)
    {
        // connection info from Doctrine
        $params = $this->getParams();

        $host = $params['host'];
        $dbname = $params['dbname'];

        // create new PDO via $this->getWrapperConnection()
        $conn = new \PDO("sqlsrv:Server=$host;Database=$dbname");

        // prepace statement
        $stmt = $conn->prepare($sql);

        // execute statement with parameters
        $stmt->execute($sqlParams);

        // grab each result set
        do {
            $results[] = $stmt->fetchAll();
        } while ($stmt->nextRowset());

        // close $stmt and $conn
        $stmt->closeCursor();
        unset($stmt, $conn);

        return $results;
    }
}