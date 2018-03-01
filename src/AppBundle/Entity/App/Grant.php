<?php

namespace AppBundle\Entity\App;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\App\GrantRepository")
 * @ORM\Table(name="Grants")
 */
class Grant
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", name="CreatedAt")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="guid", name="User_ID")
     */
    private $user;

    /**
     * @ORM\Column(type="integer", name="Role_ID")
     */
    private $role;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     * @ORM\JoinColumn(name="User_ID")
     */
    private $users;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\Role")
     * @ORM\JoinColumn(name="Role_ID")
     */
    private $roles;

    /**
     * Set the default values
     * This works as the constructor of a persisted class is not called upon hydration.
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function setUser($user)
    {
        $this->user = $user;
    }

    public function getRole()
    {
        return $this->role;
    }

    public function setRole($role)
    {
        $this->role = $role;
    }

    public function getUsers()
    {
        return $this->users;
    }

    public function setUsers($users)
    {
        $this->users = $users;
    }

    public function getRoles()
    {
        return $this->roles;
    }

    public function setRoles($roles)
    {
        $this->roles = $roles;
    }
}