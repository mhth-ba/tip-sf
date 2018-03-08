<?php

namespace AppBundle\Form\Type;

use AppBundle\Entity\Kontroling\SCT\CenaTepla;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CenaTeplaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nazov', TextType::class)
            ->add('rok', IntegerType::class)
            ->add('poznamka', TextareaType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => CenaTepla::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true
        ));
    }

    public function getBlockPrefix()
    {
        return '';
    }
}