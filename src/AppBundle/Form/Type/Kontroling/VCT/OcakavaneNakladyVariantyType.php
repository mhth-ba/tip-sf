<?php

namespace AppBundle\Form\Type\Kontroling\VCT;

use AppBundle\Entity\Kontroling\VCT\OcakavaneNakladyVarianty;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OcakavaneNakladyVariantyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('hodnota', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => OcakavaneNakladyVarianty::class
        ));
    }

}