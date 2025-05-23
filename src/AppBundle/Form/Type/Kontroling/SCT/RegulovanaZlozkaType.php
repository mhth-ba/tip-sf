<?php

namespace AppBundle\Form\Type\Kontroling\SCT;

use AppBundle\Entity\Kontroling\SCT\RegulovanaZlozka;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegulovanaZlozkaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('prikon', NumberType::class)
            ->add('do_limitu', NumberType::class)
            ->add('nad_limit', NumberType::class)
            ->add('zaklad', NumberType::class)
            ->add('priplatok', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => RegulovanaZlozka::class
        ));
    }

}