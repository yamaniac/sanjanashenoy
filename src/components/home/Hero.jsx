import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate">
      {/* Background */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 ">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-200 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-24 mb-40">
        {/* Hero content container with improved grid layout */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-8 lg:gap-y-6">
          {/* Title spanning full width on larger screens and center-aligned */}
          <h1 className="text-center w-full text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-12 mb-10">
            Consultant Dietitian & Nutritionist in Mangalore
          </h1>
          
          {/* Content area - takes 6 columns on large screens (reduced from 7) */}
          <div className="mt-6 max-w-xl lg:mt-0 lg:col-span-6 mb-10">
            <div className="p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                <strong>Sanjana M Shenoy</strong> is a highly regarded consultant dietitian and
                nutritionist based in Mangalore, India. <br/> <br/>She dedicates herself to
                helping you achieve your health goals through personalized
                nutrition guidance and evidence-based strategies tailored to your
                unique needs. <br/> <br/>With over two decades of experience as a dietitian
                in Mangalore, Sanjana has successfully assisted thousands of
                patients and families worldwide. Her extensive experience in diet
                consulting has led to numerous success stories and speaking
                engagements, where she shares her research-based knowledge about
                nutrition and health.<br/> <br/> Sanjana has over twenty years of experience
                as a dietitian in Mangalore. She has helped thousands of patients
                and families around the world.{" "}
              </p>
            </div>
            
            {/* CTA buttons with enhanced styling */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-md bg-teal-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                href="/about-sanjana-m-shenoy"
                className="w-full sm:w-auto text-center text-sm font-semibold leading-6 text-gray-900 dark:text-white px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          
          {/* Image area - takes 6 columns on large screens (increased from 5) */}
          <div className="relative mt-10 w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none lg:col-span-6 flex items-center justify-center">
            <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700">
              <Image
                src="/images/sanjana_shenoy.png"
                alt="Sanjana Shenoy - Professional Dietitian"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add a negative margin to remove bottom padding */}
      <div className="-mb-24 sm:-mb-32 lg:-mb-40"></div>
    </div>
  );
}
