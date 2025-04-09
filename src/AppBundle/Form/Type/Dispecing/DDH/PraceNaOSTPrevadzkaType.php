<?php
namespace AppBundle\Form\Type\Dispecing\DDH;

use AppBundle\Entity\Dispecing\DDH\PraceNaOSTPrevadzka;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PraceNaOSTPrevadzkaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // Objekt OST/PK: We use a select. Options can be filtered on the front-end.
            ->add('OST', ChoiceType::class, [
                'label' => 'Objekt OST/PK',
                'choices' => [
                    'OST 750' => 'ost750',
                    'OST 770' => 'ost770',
                    'OST 850' => 'ost850'
                ],
                'placeholder' => '-- Vyberte --',
                'required' => false
            ])
            ->add('datum_cas_zaciatok', DateTimeType::class, [
                'label' => 'Začiatok prác',
                'widget' => 'single_text',
                'required' => false
            ])
            ->add('datum_cas_ukoncenia', DateTimeType::class, [
                'label' => 'Ukončenie prác',
                'widget' => 'single_text',
                'required' => false
            ])
            ->add('vplyv_na_dodavku', ChoiceType::class, [
                'label' => 'Vplyv na dodávku',
                'choices' => [
                    'Prerušenie' => 'prerusenie',
                    'Obmedzenie' => 'obmedzenie'
                ],
                'placeholder' => '-- Vyberte --',
                'required' => false
            ])
            ->add('vyvod', ChoiceType::class, [
                'label' => 'Vývod',
                'choices' => [
                    'TV' => 'tv',
                    'ÚK' => 'uk',
                    'VZT' => 'vzt',
                    'TV + ÚK' => 'tv+uk',
                    'TV + VZT' => 'tv+vzt',
                    'ÚK + VZT' => 'uk+vzt',
                    'TV + ÚK + VZT' => 'tv+uk+vzt'
                ],
                'placeholder' => '-- Vyberte --',
                'required' => false
            ])
            ->add('poznamka', TextareaType::class, [
                'label' => 'Poznámka',
                'required' => false
            ])
            ->add('stav', ChoiceType::class, [
                'label' => 'Stav',
                'choices' => [
                    'V riešení' => 'v rieseni',
                    'Provizórne vyriešené' => 'provizorne vyriesene',
                    'Vyriešené' => 'vyriesene'
                ],
                'placeholder' => '-- Vyberte --',
                'required' => false
            ])
            ->add('vybavuje', ChoiceType::class, [
                'label' => 'Vybavuje',
                'choices' => [
                    'Dispečing' => 'dispecing',
                    'RIS' => 'ris',
                    'Obvod východ' => 'obvod_vychod',
                    'Obvod západ' => 'obvod_zapad'
                ],
                'placeholder' => '-- Vyberte --',
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
