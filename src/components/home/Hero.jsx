import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-[#FBF7F2]">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-12 lg:gap-y-6">
          <h1 className="mb-10 w-full text-center font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-6xl lg:col-span-12">
            Dt. Sanjana M Shenoy
            <div className="divider mx-auto mt-10 mb-10 max-w-xs border-t border-stone-300/80"></div>
            <span className="font-display text-2xl font-medium text-teal-800 sm:text-4xl">
              Consultant Dietitian & Nutritionist in Mangalore
            </span>
          </h1>

          <div className="mt-6 max-w-xl lg:col-span-6 lg:mt-0">
            <p className="text-sm font-medium text-teal-800">
              MSc Food & Nutrition • Dietitian & Nutritionist • 20+ Years Experience
            </p>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              <strong>Sanjana M Shenoy</strong> is a highly regarded consultant dietitian and
              nutritionist based in Mangalore, India with over two decades of clinical experience.
            </p>

            <ul className="mt-4 space-y-2 text-stone-700">
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized nutrition plans tailored to your unique health needs</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Evidence-based guidance for sustainable results</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Helped thousands of patients and families worldwide</span>
              </li>
            </ul>

            <div className="mt-6 border-y border-stone-300/70 py-3">
              <h3 className="mb-2 font-medium text-gray-900">Specialized Nutrition Services in Mangalore:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-stone-700">
                <div>Weight Management</div>
                <div>Diabetes Care</div>
                <div>PCOS Management</div>
                <div>Heart Health</div>
                <div>Sports Nutrition</div>
                <div>Child Nutrition</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-stone-600">
              <p>As a leading dietitian in Mangalore, Sanjana combines traditional nutritional wisdom with modern scientific research. She specializes in creating customized meal plans that respect both your health requirements and cultural food preferences. Her comprehensive approach addresses various conditions including diabetes, hypertension, PCOS, thyroid disorders, weight management, and gut health issues.</p>
              <p className="mt-2">Whether you&apos;re seeking nutrition counseling in Mangalore for medical conditions, weight loss, pregnancy, or general wellness, Sanjana offers both in-person consultations at her clinic in Mangalore and convenient online consultations for clients worldwide.</p>
            </div>

            <div className="mt-6 pl-4 text-stone-600 italic">
              &quot;Sanjana&apos;s approach to nutrition changed my life. Her personalized plan helped me achieve results I never thought possible. I lost 15kg in 6 months while managing my diabetes effectively.&quot;
              <p className="mt-2 not-italic font-medium text-stone-700">- Priya M., Mangalore</p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-full bg-teal-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-auto"
              >
                Book a Consultation
              </Link>
              <Link
                href="/about-sanjana-m-shenoy"
                className="w-full text-center text-sm font-semibold leading-6 text-gray-900 underline decoration-stone-300 underline-offset-4 hover:decoration-gray-900 sm:w-auto"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mt-10 flex w-full max-w-lg items-center justify-center sm:mt-16 lg:col-span-6 lg:mt-0 lg:max-w-none">
            <div className="relative">
              <p className="mb-3 text-center text-xs font-medium text-teal-800">
                Certified Diabetes Educator
              </p>
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden">
                <Image
                  src="/images/sanjana_shenoy.png"
                  alt="Dr. Sanjana M Shenoy - Professional Dietitian and Nutritionist in Mangalore specializing in weight management, diabetes, and PCOS"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-medium text-white">Dt. Sanjana M Shenoy</p>
                  <p className="text-xs text-white/80">Mangalore&apos;s Trusted Nutrition Expert</p>
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-medium text-teal-800">
                20+ Years Experience
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 text-xs text-stone-600">
                <div>Member of:</div>
                <div className="font-medium text-stone-700">Indian Dietetic Association</div>
                <div className="font-medium text-stone-700">Nutrition Society of India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
