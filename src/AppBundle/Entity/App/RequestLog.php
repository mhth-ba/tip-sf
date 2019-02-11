<?php

namespace AppBundle\Entity\App;

use AppBundle\Entity\BaseEntity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="AppBundle\Repository\App\RequestLogRepository")
 * @ORM\Table(name="RequestLog")
 */
class RequestLog extends BaseEntity
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
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\App\User")
     * @ORM\JoinColumn(name="User_ID")
     */
    private $user;

    /**
     * @ORM\Column(type="string")
     */
    private $username;

    /**
     * @ORM\Column(type="string", name="ClientIP")
     */
    private $ip;

    /**
     * @ORM\Column(type="string")
     */
    private $locale;

    /**
     * @ORM\Column(type="string", name="BaseUrl")
     */
    private $base;

    /**
     * @ORM\Column(type="string", name="PathInfo")
     */
    private $path;

    /**
     * @ORM\Column(type="string", name="RequestUri")
     */
    private $uri;

    /**
     * @ORM\Column(type="string")
     */
    private $method;

    /**
     * @ORM\Column(type="string")
     */
    private $payload;

    /**
     * @ORM\Column(type="string", name="UserAgent")
     */
    private $agent;

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
        return $this->getTimestampWithOffset($this->createdAt);
    }

    public function getUser()
    {
        return $this->user;
    }

    public function setUser($user)
    {
        $this->user = $user;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function getIp()
    {
        return $this->ip;
    }

    public function setIp($ip)
    {
        $this->ip = $ip;
    }

    public function getLocale()
    {
        return $this->locale;
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;
    }

    public function getBase()
    {
        return $this->base;
    }

    public function setBase($base)
    {
        $this->base = $base;
    }

    public function getPath()
    {
        return $this->path;
    }

    public function setPath($path)
    {
        $this->path = $path;
    }

    public function getUri()
    {
        return $this->uri;
    }

    public function setUri($uri)
    {
        $this->uri = $uri;
    }

    public function getMethod()
    {
        return $this->method;
    }

    public function setMethod($method)
    {
        $this->method = $method;
    }

    public function getPayload()
    {
        return $this->payload;
    }

    public function setPayload($payload)
    {
        $this->payload = $payload;
    }

    public function getAgent()
    {
        return $this->agent;
    }

    public function setAgent($agent)
    {
        $this->agent = $agent;
    }
}