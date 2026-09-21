import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Experience() {
    const stats = [
        { id: 1, name: "Success Stories", value: "2,000+", description: "Transformed lives through personalized nutrition plans" },
        { id: 2, name: "Years of Experience", value: "20+", description: "Decades of evidence-based nutritional expertise" },
        { id: 3, name: "Corporate Clients", value: "12+", description: "Trusted by leading organizations worldwide" },
        { id: 4, name: "Diet Plans Created", value: "5,000+", description: "Custom nutrition solutions for diverse needs" }
    ];
    return (
        <section id="experience" aria-label="Professional Experience and Expertise" className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-0">
            <Image
              priority
              alt="Nutritionist showing healthy eating habits with fresh vegetables and fruits - professional diet consultation"
              width={1000}
              height={1000}
              src="/images/eat_healthy.webp"
              className="h-56 w-full bg-[#FBF7F2] object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
            />
            <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2">
              <div className="px-6 pb-20 pt-16 sm:pb-28 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-28">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                  <p className="text-sm font-medium text-teal-800">
                    Trusted Nutrition Expert
                  </p>
                  <h2 className="mt-3 text-base font-medium text-teal-800">
                    Two Decades of Nutrition Excellence              
                  </h2>
                  <h3 className="mt-3 font-display text-4xl font-medium tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Transforming Lives Through Evidence-Based Nutrition
                  </h3>
                  <p className="mt-6 text-lg/8 text-stone-700">
                    With over two decades of specialized diet consultancy experience, thousands of success stories, and professional speaking at healthcare conferences, universities, and corporate wellness events, my mission has been to deliver research-based knowledge and personalized nutrition plans that create lasting health transformations.
                  </p>
                  <p className="mt-4 text-lg/8 text-stone-700">
                    My holistic approach combines cutting-edge nutritional science with practical, sustainable dietary recommendations tailored to your unique lifestyle, health goals, and medical needs.
                  </p>
                  
                  <dl className="mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col gap-y-2"
                      >
                        <dt className="text-sm/6 font-medium text-stone-600">
                          {stat.name}
                        </dt>
                        <dd className="order-first font-display text-3xl font-medium tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                        <p className="text-xs text-stone-600">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </dl>
                  
                  <div className="mt-10">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-x-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
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
