<?php

namespace AppBundle\Form\Type\Kontroling\VCT;

use AppBundle\Entity\Kontroling\VCT\OcakavaneNaklady;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OcakavaneNakladyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('hodnota', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => OcakavaneNaklady::class
        ));
    }

}