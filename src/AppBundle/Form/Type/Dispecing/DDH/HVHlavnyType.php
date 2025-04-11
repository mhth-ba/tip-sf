<?php

namespace AppBundle\Form\Type\Dispecing\DDH;

use AppBundle\Entity\Dispecing\DDH\HlavnyHV;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HVHlavnyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('dispecer_1', TextType::class)
            ->add('dispecer_2', TextType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => HlavnyHV::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}