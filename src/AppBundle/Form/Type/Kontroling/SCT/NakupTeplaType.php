<?php

namespace AppBundle\Form\Type\Kontroling\SCT;

use AppBundle\Entity\Kontroling\SCT\NakupTepla;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NakupTeplaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('ppc', NumberType::class)
            ->add('slovnaft', NumberType::class)
            ->add('cw', NumberType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => NakupTepla::class
        ));
    }

}