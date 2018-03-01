<?php

namespace AppBundle\Form\Type;

use AppBundle\Entity\RIS\ServisneHlasenia;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ServisneHlasenieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('vytvoril', HiddenType::class)
            ->add('datum', DateTimeType::class, [
                'widget' => 'single_text',
                'attr' => ['class' => 'js-datetimepicker'],
                'html5' => false
            ])
            ->add('oznamovatel', TextType::class)
            ->add('miesto', EntityType::class, [
                    'class' => 'AppBundle\Entity\RIS\Miesto',
                    'choice_label' => 'Miesto',
                    'placeholder' => '* Miesto *'
            ])
            ->add('profylaktika', CheckboxType::class, [
                'label' => 'Porucha zistená pri profylaktickej kontrole'
            ])
            ->add('popis', TextareaType::class, [
                'label' => 'Popis'
            ])
            ->add('datumRiesenia', DateTimeType::class, [
                'widget' => 'single_text',
                'attr' => ['class' => 'js-datetimepicker'],
                'html5' => false
            ])
            ->add('riesitel', EntityType::class, [
                'class' => 'AppBundle\Entity\RIS\Riesitel',
                'choice_label' => 'Riesitel',
                'placeholder' => '* Vybavuje *'
            ])
            ->add('skupina', EntityType::class, [
                'class' => 'AppBundle\Entity\RIS\Skupina',
                'choice_label' => 'Skupina',
                'placeholder' => '* Skupina *'
            ])
            ->add('pricina', TextareaType::class, [
                'label' => 'Príčina'
            ])
            ->add('riesenie', TextareaType::class, [
                'label' => 'Riešenie'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => ServisneHlasenia::class
        ));
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
