<?php

namespace AppBundle\Form\Type\Kontroling\VCT;

use AppBundle\Entity\Kontroling\VCT\NormativneMnozstvo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NormativneMnozstvoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('hodnota', NumberType::class)
            ->add('ucinnost', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => NormativneMnozstvo::class
        ));
    }

}