'use client'
import Link from 'next/link'
import { useState } from 'react'
import {
    ScaleIcon,
    BeakerIcon,
    HeartIcon,
    UserGroupIcon,
    ClockIcon,
    BoltIcon,
    UserIcon,
    TrophyIcon,
    UserCircleIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline'

export default function Specializations() {
    const [activeFilter, setActiveFilter] = useState('all');
    
    const categories = [
      { id: 'all', name: 'All Services' },
      { id: 'personal', name: 'Personal Health' },
      { id: 'medical', name: 'Medical Conditions' },
      { id: 'lifestyle', name: 'Lifestyle' },
    ];
    
    const specializations = [
        {
          title: 'Weight Management',
          description: 'Personalized plans to help you achieve and maintain a healthy weight through sustainable lifestyle changes.',
          icon: ScaleIcon,
          href: '/consultations',
          category: 'personal',
          benefit: 'Sustainable Results',
          popular: true
        },
        {
          title: 'Diabetes Management',
          description: 'Comprehensive dietary guidance to control blood sugar levels and manage diabetes effectively.',
          icon: BeakerIcon,
          href: '/contact',
          category: 'medical',
          benefit: 'Better Blood Sugar Control',
          popular: true
        },
        {
          title: 'Heart Health',
          description: 'Specialized nutrition plans to promote cardiovascular health and manage heart conditions.',
          icon: HeartIcon,
          href: '/contact',
          category: 'medical',
          benefit: 'Improved Heart Metrics',
          popular: true
        },
        {
          title: 'Sports Nutrition',
          description: 'Tailored nutrition strategies to enhance athletic performance and support recovery.',
          icon: TrophyIcon,
          href: '/contact',
          category: 'lifestyle',
          benefit: 'Enhanced Performance',
          popular: true
        },
        {
          title: 'Pregnancy Nutrition',
          description: 'Expert guidance for optimal nutrition during pregnancy and postpartum recovery.',
          icon: UserCircleIcon,
          href: '/contact',
          category: 'personal',
          benefit: 'Healthy Development',
          popular: true
        },
        {
          title: 'Child Nutrition',
          description: 'Age-appropriate nutrition plans to support healthy growth and development in children.',
          icon: UserIcon,
          href: '/contact',
          category: 'personal',
          benefit: 'Growth Support',
          popular: true
        },
        {
          title: 'Hormonal Health',
          description: 'Specialized dietary plans to help manage PCOS symptoms and improve hormonal balance.',
          icon: BoltIcon,
          href: '/contact',
          category: 'medical',
          benefit: 'Hormonal Balance',
        },
        {
          title: 'Medical Nutrition',
          description: 'Customized nutrition guidance for various medical conditions and recovery.',
          icon: UserGroupIcon,
          href: '/contact',
          category: 'medical',
          benefit: 'Faster Recovery'
        },
        {
          title: 'Corporate Wellness',
          description: 'Nutrition and wellness programs designed for busy professionals.',
          icon: ClockIcon,
          href: '/contact',
          category: 'lifestyle',
          benefit: 'Workplace Energy'
        }
      ];

    const filteredSpecializations = activeFilter === 'all' 
      ? specializations 
      : specializations.filter(spec => spec.category === activeFilter);
      
    return(
        <div className="bg-[#FBF7F2] pt-24 pb-10 sm:pt-32 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium text-teal-800">
              Expert Services
            </p>
            <h2 className="mb-4 font-display text-4xl font-medium tracking-tight text-gray-900">Diet & Nutrition Consultations</h2>
            <p className="mt-4 text-lg text-stone-700">
              Expert nutrition services tailored to your unique needs and goals, backed by science and personalized care
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium ${
 activeFilter === category.id
 ? 'bg-teal-700 text-white'
 : 'bg-white text-stone-700 hover:bg-stone-100'
 }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {filteredSpecializations.map((spec, index) => (
              <div 
                key={index} 
                className="relative border-t border-stone-300/80 pt-6"
              >
                {spec.popular && (
                  <span className="text-xs font-medium text-teal-800">
                    Popular
                  </span>
                )}
                <div className="mb-4 mt-2">
                  <spec.icon className="h-6 w-6 text-teal-800" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-medium text-gray-900">{spec.title}</h3>
                
                <div className="mb-4 flex items-center">
                  <CheckBadgeIcon className="mr-2 h-5 w-5 text-teal-700" />
                  <span className="text-sm font-medium text-teal-800">{spec.benefit}</span>
                </div>
                
                <p className="mb-6 text-stone-600">{spec.description}</p>
                
                <Link 
                  href={spec.href} 
                  className="text-sm font-medium text-teal-800 underline decoration-teal-800/25 underline-offset-4 hover:decoration-teal-800"
                >
                  Book a {spec.title} Consultation
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/consultations" 
              className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-base font-medium text-white hover:bg-teal-600"
            >
              View All Nutrition Services
            </Link>
          </div>
        </div>
      </div>
    )
}
