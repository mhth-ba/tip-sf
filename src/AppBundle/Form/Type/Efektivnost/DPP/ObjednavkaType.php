<?php

namespace AppBundle\Form\Type\Efektivnost\DPP;

use AppBundle\Entity\Efektivnost\DPP\Objednavka;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ObjednavkaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('h0', NumberType::class)
            ->add('h1', NumberType::class)
            ->add('h2', NumberType::class)
            ->add('h3', NumberType::class)
            ->add('h4', NumberType::class)
            ->add('h5', NumberType::class)
            ->add('h6', NumberType::class)
            ->add('h7', NumberType::class)
            ->add('h8', NumberType::class)
            ->add('h9', NumberType::class)
            ->add('h10', NumberType::class)
            ->add('h11', NumberType::class)
            ->add('h12', NumberType::class)
            ->add('h13', NumberType::class)
            ->add('h14', NumberType::class)
            ->add('h15', NumberType::class)
            ->add('h16', NumberType::class)
            ->add('h17', NumberType::class)
            ->add('h18', NumberType::class)
            ->add('h19', NumberType::class)
            ->add('h20', NumberType::class)
            ->add('h21', NumberType::class)
            ->add('h22', NumberType::class)
            ->add('h23', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Objednavka::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ));
    }

}