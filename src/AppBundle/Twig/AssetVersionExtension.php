<?php

namespace AppBundle\Twig;

class AssetVersionExtension extends \Twig_Extension
{
    private $appDir;
    private $paths = [];

    public function __construct($appDir)
    {
        $this->appDir = $appDir;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('asset_version', array($this, 'getAssetVersion'))
        );
    }

    public function getAssetVersion($filename)
    {
        if (count($this->paths) === 0) {
            $manifestPath = $this->appDir . '/Resources/assets/rev-manifest.json';

            if (!file_exists($manifestPath)) {
                throw new \Exception(sprintf('Cannot find manifest file: "%s"', $manifestPath));
            }

            $this->paths = json_decode(file_get_contents($manifestPath), true);
        }
        if (!isset($this->paths[$filename])) {
            throw new \Exception(sprintf('There is no file "%s" in the version manifest!', $filename));
        }

        return $this->paths[$filename];
    }

    public function getName()
    {
        return 'asset_version';
    }
}