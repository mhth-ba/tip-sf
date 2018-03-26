<?php

namespace AppBundle\EventListener;

use AppBundle\Entity\App\RequestLog;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class RequestListener
{
    /**
     * @var EntityManager
     */
    protected $em;

    /**
     * @var TokenStorage
     */
    protected $token;

    public function __construct(EntityManager $entityManager, TokenStorage $tokenStorage)
    {
        $this->em = $entityManager;
        $this->token = $tokenStorage;
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        if (!$event->isMasterRequest()) {
            return;
        }

        $em = $this->em;
        $token = $this->token->getToken();

        $request = $event->getRequest();
        $ip = $request->getClientIp();
        $host = $request->getHost();
        $locale = $request->getLocale();
        $base = $request->getBaseUrl();
        $path = $request->getPathInfo();
        $uri = $request->getRequestUri();

        $log = new RequestLog();
        $log->setIp($ip);
        $log->setHost($host);
        $log->setLocale($locale);
        $log->setBase($base);
        $log->setPath($path);
        $log->setUri($uri);

        if ($token !== null) {
            $userId = $token->getUser()->getId();
            $userName = $token->getUsername();
            $user = $em->getRepository('AppBundle:App\User')
                ->find($userId);
            $log->setUser($user);
            $log->setUsername($userName);
        }

        $em->persist($log);
        $em->flush();
    }
}