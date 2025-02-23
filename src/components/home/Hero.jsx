import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="relative isolate">
        {/* Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-200 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Sanjana Shenoy

            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                A consultant dietitian and nutritionist dedicated to helping you achieve your health goals through personalized nutrition guidance and evidence-based strategies.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Book a Consultation
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-10 h-96 w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
              <Image
                src="/images/Sanjana_shenoy.png"
                alt="Sanjana Shenoy - Professional Dietitian"
                width={800}
                height={600}
                className="aspect-[5/3] w-full rounded-2xl object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Add a negative margin to remove bottom padding */}
        <div className="-mb-24 sm:-mb-32 lg:-mb-40"></div>
      </div>
    )
}