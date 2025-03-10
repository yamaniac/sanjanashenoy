import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Experience() {
    const stats = [
        { id: 1, name: "Success Stories", value: "2,000+", description: "Transformed lives through personalized nutrition plans" },
        { id: 2, name: "Years of Experience", value: "20+", description: "Decades of evidence-based nutritional expertise" },
        { id: 3, name: "Corporate Clients", value: "30+", description: "Trusted by leading organizations worldwide" },
        { id: 4, name: "Diet Plans Created", value: "5,000+", description: "Custom nutrition solutions for diverse needs" }
    ];
    return (
        <section id="experience" aria-label="Professional Experience and Expertise" className="relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden py-12 sm:py-16 lg:py-0">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-indigo-50/30 dark:from-teal-900/10 dark:to-indigo-900/10 z-0"></div>
            <Image
              priority
              alt="Nutritionist showing healthy eating habits with fresh vegetables and fruits - professional diet consultation"
              width={1000}
              height={1000}
              src="/images/eat_healthy.webp"
              className="h-56 w-full bg-gray-50 dark:bg-gray-800 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 z-10"
            />
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2 relative z-20">
              <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                  <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-900/30 px-3 py-1 text-sm font-medium text-teal-700 dark:text-teal-300 mb-3">
                    Trusted Nutrition Expert
                  </span>
                  <h2 className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400">
                    Two Decades of Nutrition Excellence              
                  </h2>
                  <h3 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                    Transforming Lives Through Evidence-Based Nutrition
                  </h3>
                  <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                    With over two decades of specialized diet consultancy experience, thousands of success stories, and professional speaking at healthcare conferences, universities, and corporate wellness events, my mission has been to deliver research-based knowledge and personalized nutrition plans that create lasting health transformations.
                  </p>
                  <p className="mt-4 text-lg/8 text-gray-600 dark:text-gray-300">
                    My holistic approach combines cutting-edge nutritional science with practical, sustainable dietary recommendations tailored to your unique lifestyle, health goals, and medical needs.
                  </p>
                  
                  <dl className="mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 xl:mt-16">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="group relative flex flex-col gap-y-3 border-l-2 border-indigo-600 dark:border-indigo-400 pl-6 transition-all duration-300 hover:border-l-4"
                      >
                        <dt className="text-sm/6 text-gray-600 dark:text-gray-400 font-medium">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                          {stat.value}
                        </dd>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </dl>
                  
                  <div className="mt-10">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 dark:bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
                    >
                      Book a Nutrition Consultation
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}