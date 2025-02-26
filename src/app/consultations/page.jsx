import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
// Add these imports for icons
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
    BookOpenIcon
} from '@heroicons/react/24/outline'
// If using public directory:
// No import needed, use direct path in img tag

export async function generateMetadata() {
  return {
    title: 'Consultations | Sanjana Shenoy - Dietitian & Nutritionist',
    description: 'Comprehensive nutrition care tailored to your specific health needs and goals. My evidence-based approach ensures personalized dietary solutions for various health conditions and lifestyle requirements.',
  }
}

export default function Consultations() {
    const services = [
        {
            title: "Weight Management",
            icon: ScaleIcon,
            items: [
                "Meal planning for overweight and obesity conditions",
                "Dietary management for underweight patients",
                "Advice on exercise and fitness",
                "Supplement advice for strength training and workouts"
            ]
        },
        {
            title: "Diabetes Management",
            icon: BeakerIcon,
            items: [
                "Understanding Blood sugar control and dietary management",
                "Nutritional strategies to manage pre-diabetes"
            ]
        },
        {
            title: "Kidney Related Disorders",
            icon: FireIcon,
            items: [
                "Meal planning for Kidney failure",
                "Kidney stones and infections management"
            ]
        },
        {
            title: "Gastrointestinal Diseases",
            icon: BeakerIcon,
            items: [
                "Diet and lifestyle management for Fatty liver",
                "Nutritional management for Liver diseases",
                "Dietary management for gall bladder stones",
                "Gastric and intestinal issues (Acidity, GERD, IBS)"
            ]
        },
        {
            title: "Heart Diseases",
            icon: HeartIcon,
            items: [
                "Cholesterol management",
                "Lowering triglycerides and LDL",
                "Improvements in HDL"
            ]
        },
        {
            title: "Child Nutrition",
            icon: UserIcon,
            items: [
                "Infant feeding strategies and ideal weight gain",
                "Weight management for children",
                "Anaemia management",
                "Promotion of active lifestyle for children and teens"
            ]
        },
        {
            title: "Hormonal Disorders",
            icon: BoltIcon,
            items: [
                "Hypo and hyperthyroid conditions",
                "PCOD, PCOS management"
            ]
        },
        {
            title: "Sports Nutrition",
            icon: TrophyIcon,
            items: [
                "Nutrition for athletes",
                "Pre and Post training Fueling strategies",
                "Hydration guidance",
                "Understanding sports supplementation"
            ]
        },
        {
            title: "Nutrition in Pregnancy",
            icon: UserCircleIcon,
            items: [
                "Ideal weight gain in pregnancy",
                "Gestational diabetes management"
            ]
        },
        {
            title: "Corporate Wellness",
            icon: ClockIcon,
            items: [
                "Understanding work, life and health balance",
                "General wellness guidance",
                "Meal planning for busy lifestyles"
            ]
        },
        {
            title: "Medical Nutrition Therapy",
            icon: UserGroupIcon,
            items: [
                "Nutritional management for cancer",
                "Pre and post surgery nutrition",
                "Modified diets (Clear fluid, Full fluid and Tube feeding)"
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
                <Breadcrumbs
                    items={[
                        { href: '/', label: 'Home' },
                        { href: '/consultations', label: 'Consultations' },
                    ]}
                />
                
                <div className="bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-2 lg:px-4">
                        <div className="text-base/7 text-gray-700 dark:text-gray-300">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-teal-400">Consultations</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                                Diet Consultations & Nutrition Coaching By - Sanjana M Shenoy
                            </h1>
                            <p className="mt-6 text-xl/8">
                                Comprehensive nutrition care tailored to your specific health needs and goals. My evidence-based approach ensures personalized dietary solutions for various health conditions and lifestyle requirements.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="group hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                            <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <h2 className="text-xl font-semibold dark:text-white">{service.title}</h2>
                                    </div>
                                    <ul className="list-none space-y-3 dark:text-gray-300">
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <span className="text-green-500 flex-shrink-0">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}