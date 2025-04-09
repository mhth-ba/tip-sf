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
            ->add('ost', TextType::class, [
                'required' => false
            ])
            // Explicitly exclude date fields from form handling
            ->add('vplyv_na_dodavku', TextType::class, [
                'required' => false
            ])
            ->add('vyvod', TextType::class, [
                'required' => false
            ])
            ->add('poznamka', TextareaType::class, [
                'label' => 'Poznámka',
                'required' => false
            ])
            ->add('stav', TextType::class, [
                'required' => false
            ])
            ->add('vybavuje', TextType::class, [
                'required' => false
            ])
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
