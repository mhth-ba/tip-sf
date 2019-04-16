<?php

namespace AppBundle\Form\Type\Uctovnictvo\DP;

use AppBundle\Entity\Uctovnictvo\DP\Hlavny;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HlavnyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('druh', EntityType::class, [
                'class' => 'AppBundle\Entity\Uctovnictvo\DP\DruhPriznania'
            ])
            ->add('predchadzajuci', NumberType::class)
            ->add('posledny', NumberType::class)
            /*->add('podane', DateType::class, [
                'widget' => 'single_text',
                'input' => 'string',
                'format' => 'yyyy-MM-dd'

                'input' => 'string',
                'format' => 'yyy-MM-dd'

                'input' => 'datetime'
            ])*/
            ->add('poznamka', TextareaType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Hlavny::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}