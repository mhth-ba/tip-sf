<?php

namespace AppBundle\Form\Type\Dispecing\DDH;

use AppBundle\Entity\Dispecing\DDH\HlavnyOST;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OSTHlavnyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('dispecer_1', TextType::class)
            ->add('dispecer_2', TextType::class)
            ->add('poruchovka_1', TextType::class)
            ->add('poruchovka_2', TextType::class)
            ->add('teplota_letisko', NumberType::class)
            ->add('teplota_tpv', NumberType::class)
            ->add('teplota_tpz', NumberType::class)
            ->add('doplnovanie_tpv', NumberType::class)
            ->add('doplnovanie_tpz', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => HlavnyOST::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
