<?php

namespace AppBundle\Form\Type\Kontroling\SCT;

use AppBundle\Entity\Kontroling\SCT\KotolnaUdaje;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class KotolnaUdajeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('m3', NumberType::class)
            ->add('mwh', NumberType::class)
            ->add('nbsd', NumberType::class)
            ->add('sd', NumberType::class)
            ->add('pdm', NumberType::class)
            ->add('kwh', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => KotolnaUdaje::class
        ]);
    }

}