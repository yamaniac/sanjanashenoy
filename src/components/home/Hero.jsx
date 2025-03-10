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
            Dt. Sanjana M Shenoy 
            <div className="divider border-t border-gray-200 dark:border-gray-700 mt-10 mb-10"></div>
            <span className="text-2xl sm:text-4xl text-teal-600 dark:text-teal-400">
              Consultant Dietitian & Nutritionist in Mangalore
            </span>
          </h1>

          {/* Content area - takes 6 columns on large screens */}
          <div className="mt-6 max-w-xl lg:mt-0 lg:col-span-6 mb-10">
            <div className="p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
              {/* Professional credentials banner */}
              <div className="mb-4 -mt-2 -mx-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm font-medium text-teal-700 dark:text-teal-300">
                  MSc Food & Nutrition • Dietitian & Nutritionist • 20+ Years Experience
                </p>
              </div>
              
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                <strong>Sanjana M Shenoy</strong> is a highly regarded consultant dietitian and
                nutritionist based in Mangalore, India with over two decades of clinical experience.
              </p>
              
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized nutrition plans tailored to your unique health needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Evidence-based guidance for sustainable results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Helped thousands of patients and families worldwide</span>
                </li>
              </ul>
              
              {/* SEO-rich specialty section */}
              <div className="mt-6 py-3 border-y border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Specialized Nutrition Services in Mangalore:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>Weight Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>Diabetes Care</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>PCOS Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>Heart Health</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>Sports Nutrition</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>Child Nutrition</span>
                  </div>
                </div>
              </div>
              
              {/* Additional SEO-rich paragraph */}
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>As a leading dietitian in Mangalore, Sanjana combines traditional nutritional wisdom with modern scientific research. She specializes in creating customized meal plans that respect both your health requirements and cultural food preferences. Her comprehensive approach addresses various conditions including diabetes, hypertension, PCOS, thyroid disorders, weight management, and gut health issues.</p>
                <p className="mt-2">Whether you're seeking nutrition counseling in Mangalore for medical conditions, weight loss, pregnancy, or general wellness, Sanjana offers both in-person consultations at her clinic in Mangalore and convenient online consultations for clients worldwide.</p>
              </div>

              {/* Testimonial preview */}
              <div className="mt-6 italic text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                "Sanjana's approach to nutrition changed my life. Her personalized plan helped me achieve results I never thought possible. I lost 15kg in 6 months while managing my diabetes effectively."
                <p className="mt-2 not-italic font-medium text-gray-700 dark:text-gray-300">— Priya M., Mangalore</p>
              </div>
            </div>
            
            {/* CTA buttons with enhanced styling */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-md bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-200 hover:translate-y-0.5"
              >
                Book a Consultation
              </Link>
              <Link
                href="/about-sanjana-m-shenoy"
                className="w-full sm:w-auto text-center text-sm font-semibold leading-6 text-gray-900 dark:text-white px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:translate-y-0.5"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          
          {/* Image area - takes 6 columns on large screens */}
          <div className="relative mt-10 w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none lg:col-span-6 flex items-center justify-center">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-100 to-teal-50 dark:from-teal-900/20 dark:to-teal-800/10 rounded-full blur-xl opacity-70 transform scale-150 animate-pulse"></div>
            
            {/* Professional certifications/trust badges */}
            <div className="absolute -top-4 -right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-xs font-medium px-3 py-1 rounded-full">
                Certified Diabetes Educator
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-xs font-medium px-3 py-1 rounded-full">
                20+ Years Experience
              </div>
            </div>
            
            {/* Enhanced image container with decorative elements */}
            <div className="relative">
              {/* Decorative dots pattern */}
              <div className="absolute -top-6 -right-6 w-20 h-20 z-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="10" cy="30" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="10" cy="50" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="10" cy="70" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="10" cy="90" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="30" cy="10" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="30" cy="30" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="30" cy="50" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="30" cy="70" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="30" cy="90" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="50" cy="10" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="50" cy="30" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="50" cy="50" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="50" cy="70" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="50" cy="90" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="70" cy="10" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="70" cy="30" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="70" cy="50" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="70" cy="70" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="70" cy="90" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="90" cy="10" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="90" cy="30" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="90" cy="50" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="90" cy="70" r="4" fill="currentColor" className="text-teal-500" />
                  <circle cx="90" cy="90" r="4" fill="currentColor" className="text-teal-500" />
                </svg>
              </div>
              
              {/* Main image with enhanced styling */}
              <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] relative">
                {/* Subtle overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                
                <Image
                  src="/images/sanjana_shenoy.png"
                  alt="Dr. Sanjana M Shenoy - Professional Dietitian and Nutritionist in Mangalore specializing in weight management, diabetes, and PCOS"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Image caption for SEO and information */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-20">
                  <p className="text-white text-sm font-medium">Dt. Sanjana M Shenoy</p>
                  <p className="text-white/80 text-xs">Mangalore's Trusted Nutrition Expert</p>
                </div>
              </div>
              
              {/* Professional endorsements below image */}
              <div className="mt-4 bg-white dark:bg-gray-800/50 rounded-xl px-3 py-2 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center space-x-2">
                <div className="text-xs text-gray-500 dark:text-gray-400">Member of:</div>
                <div className="font-medium text-xs text-gray-700 dark:text-gray-300">Indian Dietetic Association</div>
                <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="font-medium text-xs text-gray-700 dark:text-gray-300">Nutrition Society of India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add a negative margin to remove bottom padding */}
      <div className="-mb-24 sm:-mb-32 lg:-mb-40"></div>
    </div>
  );
}
