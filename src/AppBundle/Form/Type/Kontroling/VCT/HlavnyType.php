<?php

namespace AppBundle\Form\Type\Kontroling\VCT;

use AppBundle\Entity\Kontroling\VCT\Hlavny;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HlavnyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nazov', TextType::class)
            ->add('rok', IntegerType::class)
            ->add('mesiac', IntegerType::class)
            ->add('stav', EntityType::class, array(
                'class' => 'AppBundle\Entity\Kontroling\Stav'
            ))
            ->add('nct', EntityType::class, array(
                'class' => 'AppBundle\Entity\Kontroling\NCT\Hlavny'
            ))
            ->add('sct', EntityType::class, array(
                'class' => 'AppBundle\Entity\Kontroling\SCT\Hlavny'
            ))
            ->add('poznamka', TextareaType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Hlavny::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ));
    }

    public function getBlockPrefix()
    {
        return '';
    }
}