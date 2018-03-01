<?php

namespace AppBundle\Form\Type;

use AppBundle\Entity\App\Grant;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GrantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('roles', EntityType::class, array(
                'class' => 'AppBundle\Entity\App\Role',
                'choice_label' => 'name',
                'placeholder' => '* Rola *'
            ))
            ->add('users', EntityType::class, array(
                'class' => 'AppBundle\Entity\App\User',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('user')
                        ->andWhere('user.department is not null')
                        ->andWhere('user.company is not null')
                        ->orderBy('user.fullname');
                },
                'choice_label' => 'fullname',
                'placeholder' => '* Užívateľ *'
            ));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Grant::class
        ));
    }

    public function getBlockPrefix()
    {
        return '';
    }
}