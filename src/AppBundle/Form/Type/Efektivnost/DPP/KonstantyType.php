<?php

namespace AppBundle\Form\Type\Efektivnost\DPP;

use AppBundle\Entity\Efektivnost\DPP\Konstanty;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class KonstantyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('vykon_max_tpv', NumberType::class)
            ->add('vykon_max_tpz', NumberType::class)
            ->add('krivka_vychod', NumberType::class)
            ->add('krivka_zapad', NumberType::class)
            ->add('vyhrevnost_zp', NumberType::class)
            ->add('ucinnost_tpv', NumberType::class)
            ->add('ucinnost_vhj', NumberType::class)
            ->add('ucinnost_tpz', NumberType::class)
            ->add('dmm_tpv', NumberType::class)
            ->add('dmm_vhj', NumberType::class)
            ->add('dmm_tpz', NumberType::class)
            ->add('dmm_limit', NumberType::class)
            ->add('ppc_min', NumberType::class)
            ->add('ppc_max', NumberType::class)
            ->add('slovnaft_min', NumberType::class)
            ->add('slovnaft_max', NumberType::class)
            ->add('ppc_para', NumberType::class)
            ->add('ppc_zmluva', NumberType::class)
            ->add('ppc_hv', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Konstanty::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ));
    }
}