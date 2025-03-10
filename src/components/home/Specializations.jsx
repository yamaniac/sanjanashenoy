'use client'
import Image from 'next/image'
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
    FireIcon,
    CheckBadgeIcon,
    AdjustmentsHorizontalIcon
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
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-md bg-teal-50 dark:bg-teal-900/30 px-3 py-1 text-sm font-medium text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-600/20 mb-4">
              Expert Services
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Diet & Nutrition Consultations</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Expert nutrition services tailored to your unique needs and goals, backed by science and personalized care
            </p>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {filteredSpecializations.map((spec, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group relative"
              >
                {spec.popular && (
                  <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/50 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10">
                    Popular
                  </span>
                )}
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110 transform-gpu">
                  <div className="p-3 bg-gradient-to-br from-teal-50 to-indigo-100 dark:from-teal-900/40 dark:to-indigo-900/40 rounded-lg inline-block">
                    <spec.icon className="h-8 w-8 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{spec.title}</h3>
                
                <div className="flex items-center mb-4">
                  <CheckBadgeIcon className="h-5 w-5 text-teal-500 mr-2" />
                  <span className="text-sm font-medium text-teal-700 dark:text-teal-300">{spec.benefit}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">{spec.description}</p>
                
                <Link 
                  href={spec.href} 
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-200"
                >
                  Book a {spec.title} Consultation
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/consultations" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
            >
              View All Nutrition Services
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
}