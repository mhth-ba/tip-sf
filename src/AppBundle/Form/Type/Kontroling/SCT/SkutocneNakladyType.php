<?php

namespace AppBundle\Form\Type\Kontroling\SCT;

use AppBundle\Entity\Kontroling\SCT\SkutocneNaklady;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SkutocneNakladyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('tpv_p', NumberType::class)
            ->add('tpv_k', NumberType::class)
            ->add('tpz_p', NumberType::class)
            ->add('tpz_k', NumberType::class)
            ->add('vhj', NumberType::class)
            ->add('rezijne', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => SkutocneNaklady::class
        ));
    }

}