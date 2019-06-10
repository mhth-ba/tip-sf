<?php

namespace AppBundle\Form\Type\Meranie\ANM;

use AppBundle\Entity\Meranie\ANM\Vylucene;
use AppBundle\Entity\Meranie\ANM\Vylucene_T;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VyluceneType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            //->add('mp', NumberType::class)
            //->add('kategoria', NumberType::class)
            //->add('odlozene', DateType::class)
            ->add('poznamka', TextType::class)
            ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Vylucene_T::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }

}