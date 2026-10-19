<?php

require_once(__DIR__."/dev/dev-control/style/.php-cs-fixer.fd.php");

// set riskyAllowed to `true` for the first time running php-cs-fixer
$riskyAllowed = false;

if ($riskyAllowed) {
	$defaultRules['declare_strict_types'] = true;
}

return $defaultConfig
	->setRiskyAllowed($riskyAllowed)
	->setRules($defaultRules)
	->setFinder(new PhpCsFixer\Finder()->in(__DIR__.'/source/DistributionPackages'));
