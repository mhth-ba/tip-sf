<?php

namespace AppBundle\Form\Type\Kontroling\VCT;

use AppBundle\Entity\Kontroling\VCT\Variant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VariantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('vychod', NumberType::class)
            ->add('zapad', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Variant::class
        ));
    }

    public function getBlockPrefix()
    {
        return '';
    }
}