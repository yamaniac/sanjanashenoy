import Image from 'next/image'
import Link from 'next/link'
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
} from '@heroicons/react/24/outline'

export default function Specializations() {
    const specializations = [
        {
          title: 'Weight Management',
          description: 'Personalized plans to help you achieve and maintain a healthy weight through sustainable lifestyle changes.',
          icon: ScaleIcon,
          href: '/consultations'
        },
        {
          title: 'Diabetes Management',
          description: 'Comprehensive dietary guidance to control blood sugar levels and manage diabetes effectively.',
          icon: BeakerIcon,
          href: '/consultations'
        },
        {
          title: 'Heart Health',
          description: 'Specialized nutrition plans to promote cardiovascular health and manage heart conditions.',
          icon: HeartIcon,
          href: '/consultations'
        },
        {
          title: 'Sports Nutrition',
          description: 'Tailored nutrition strategies to enhance athletic performance and support recovery.',
          icon: TrophyIcon,
          href: '/consultations'
        },
        {
          title: 'Pregnancy Nutrition',
          description: 'Expert guidance for optimal nutrition during pregnancy and postpartum recovery.',
          icon: UserCircleIcon,
          href: '/consultations'
        },
        {
          title: 'Child Nutrition',
          description: 'Age-appropriate nutrition plans to support healthy growth and development in children.',
          icon: UserIcon,
          href: '/consultations'
        },
        {
          title: 'Hormonal Health',
          description: 'Specialized dietary plans to help manage PCOS symptoms and improve hormonal balance.',
          icon: BoltIcon,
          href: '/consultations'
        },
        {
          title: 'Medical Nutrition',
          description: 'Customized nutrition guidance for various medical conditions and recovery.',
          icon: UserGroupIcon,
          href: '/consultations'
        },
        {
          title: 'Corporate Wellness',
          description: 'Nutrition and wellness programs designed for busy professionals.',
          icon: ClockIcon,
          href: '/consultations'
        }
      ];
      
    return(
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Diet & Nutrition Consultations</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Expert Diet & nutrition services tailored to your unique needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg inline-block">
                    <spec.icon className="h-8 w-8 text-teal-600 dark:text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{spec.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{spec.description}</p>
                <Link 
                  href={spec.href} 
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-500"
                >
                  find out more about {spec.title}
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}