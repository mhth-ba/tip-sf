<?php

namespace AppBundle\Entity\App;

use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\App\UserRepository")
 * @ORM\Table(name="Users", schema="dbo")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\Column(type="guid")
     */
    private $id;

    /**
     * @ORM\Column(type="string", unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string")
     */
    private $fullname;

    /**
     * @ORM\Column(type="string")
     */
    private $mail;

    /**
     * @ORM\Column(type="string")
     */
    private $title;

    /**
     * @ORM\Column(type="string")
     */
    private $department;

    /**
     * @ORM\Column(type="string")
     */
    private $phone;

    /**
     * @ORM\Column(type="string")
     */
    private $mobile;

    /**
     * @ORM\Column(type="string")
     */
    private $office;

    /**
     * @ORM\Column(type="string")
     */
    private $company;

    /**
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\App\Role", inversedBy="users")
     * @ORM\JoinTable(name="Grants")
     */
    private $roles;

    public function getUsername()
    {
        return $this->username;
    }

    public function getRoles()
    {
        $roles = $this->roles->toArray();

        // give ROLE_USER to everyone except those, who are listed in "Grants" table
        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return $roles;
    }

    public function getPassword()
    {
    }

    public function getSalt()
    {
    }

    public function eraseCredentials()
    {
    }

    public function getId()
    {
        return $this->id;
    }

    public function getFullname()
    {
        return $this->fullname;
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getDepartment()
    {
        return $this->department;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function getMobile()
    {
        return $this->mobile;
    }

    public function getOffice()
    {
        return $this->office;
    }

    public function getCompany()
    {
        return $this->company;
    }
}