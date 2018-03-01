<?php

namespace AppBundle\Controller;

use Psr\Log\LoggerInterface;

class MainController extends BaseController
{
    public function indexAction(LoggerInterface $logger)
    {
        $intro = "My name is Vivian.";

        // cache
        $cache = $this->get('doctrine_cache.providers.my_cache');
        $key = md5($intro);
        if ($cache->contains($key)) {
            $intro = $cache->fetch($key);
        } else {
            //sleep(3); // pretend some long taking action
            $cache->save($key, $intro);
        }

        return $this->render('main/homepage.html.twig');
    }
}
