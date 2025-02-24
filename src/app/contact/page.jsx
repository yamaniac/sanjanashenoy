import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export async function generateMetadata() {
  return {
    title: 'Contact Sanjana Shenoy | Book Your Diet Consultation',
    description: 'Schedule a consultation with Sanjana Shenoy, Registered Dietitian. Available for both in-person and virtual appointments in Mangalore.',
  }
}

export default function Contact() {
  return (
    <>
    <Header />
    <div className="relative isolate bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/5 dark:ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-[72.1875rem] bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-3xl">Contact Sanjana Shenoy</h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Schedule a consultation to discuss your Diet needs. There are both in-person and virtual appointments 
              to provide you with flexible options that work best for you.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-400" />
                </dt>
                <dd>
2nd floor, Lalbagh Towers,
                  <br />
                  Ballalbagh Junction, Mangalore, 675003
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900 dark:hover:text-white">
                    +91 9880268082
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-gray-900 dark:hover:text-white">
                    diet[@]sanjanashenoy.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="relative mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-gray-900 dark:text-white">
                <p>
                  Sanjana's personalized approach to nutrition has transformed my relationship with food. Her evidence-based recommendations and supportive guidance helped me achieve my health goals while maintaining a balanced lifestyle."
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt="Patient testimonial"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  className="size-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">Shilpa Kamath</div>
                  <div className="text-sm/6 text-gray-600 dark:text-gray-400">Weight Management Patient</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
