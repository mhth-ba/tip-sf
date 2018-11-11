<?php

namespace AppBundle\Form\Type\Kontroling\SCT;

use AppBundle\Entity\Kontroling\SCT\ZemnyPlyn;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ZemnyPlynType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('objem_m3', NumberType::class)
            ->add('objem_mwh', NumberType::class)
            ->add('fmso', NumberType::class)
            ->add('fmsp', NumberType::class)
            ->add('fmsd', NumberType::class)
            ->add('vsd', NumberType::class)
            ->add('dan_mwh', NumberType::class)
            ->add('dan_eur', NumberType::class)
            ->add('pdm', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => ZemnyPlyn::class
        ));
    }

}