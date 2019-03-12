<?php

namespace AppBundle\Form\Type\Uctovnictvo\DP;

use AppBundle\Entity\Uctovnictvo\DP\Vstup;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VstupType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('znak', EntityType::class, [
                'class' => 'AppBundle\Entity\Uctovnictvo\DP\ZnakDaneVstup'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Vstup::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}