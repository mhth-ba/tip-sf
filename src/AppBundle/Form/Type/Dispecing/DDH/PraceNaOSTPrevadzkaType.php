<?php
namespace AppBundle\Form\Type\Dispecing\DDH;

use AppBundle\Entity\Dispecing\DDH\PraceNaOSTPrevadzka;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PraceNaOSTPrevadzkaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('ost', TextType::class)
            // Explicitly exclude date fields from form handling
            ->add('vplyv_na_dodavku', TextType::class)
            ->add('vyvod', TextType::class)
            ->add('poznamka', TextareaType::class)
            ->add('stav', TextType::class)
            ->add('vybavuje', TextType::class)
            // priloha is omitted for now.
            // valid can be omitted or set default.
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PraceNaOSTPrevadzka::class,
            'csrf_protection' => false,
            'allow_extra_fields' => true,
        ]);
    }

    public function getBlockPrefix()
    {
        return '';
    }
}
