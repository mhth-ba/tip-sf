<?php

namespace AppBundle\Repository\App;

use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserRepository extends EntityRepository implements UserLoaderInterface
{
    /**
     * Loads the user for the given username.
     *
     * This method must return null if the user is not found.
     *
     * @param string $username The username
     *
     * @return UserInterface|null
     */
    public function loadUserByUsername($username)
    {
        $domain = strpos($username, '\\');
        $user = substr($username, $domain + 1);

        return $this->createQueryBuilder('user')
            ->andWhere('user.username = :username')
            ->setParameter('username', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }
}