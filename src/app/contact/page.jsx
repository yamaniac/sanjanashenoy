import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Script from 'next/script'

export async function generateMetadata() {
  return {
    title: 'Contact Sanjana Shenoy | Book Diet Consultation in Mangalore',
    description: 'Schedule a diet consultation with Sanjana Shenoy in Mangalore. Available for both in-person visits at Lalbagh Towers and online consultations via WhatsApp & Google Meet.',
    alternates: {
      canonical: 'https://sanjanashenoy.com/contact'
    },
    openGraph: {
      title: 'Contact Sanjana Shenoy | Book Diet Consultation in Mangalore',
      description: 'Schedule a diet consultation with Sanjana Shenoy in Mangalore. Available for both in-person visits at Lalbagh Towers and online consultations.',
      url: 'https://sanjanashenoy.com/contact',
      siteName: 'Sanjana Shenoy',
      locale: 'en_US',
      type: 'website',
    }
  }
}

export default function Contact() {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sanjana M Shenoy - Dietitian & Nutritionist",
            "image": "https://sanjanashenoy.com/images/sanjana_shenoy.png",
            "description": "Professional dietitian and nutritionist offering personalized diet consultations in Mangalore",
            "@id": "https://sanjanashenoy.com",
            "url": "https://sanjanashenoy.com",
            "telephone": "+919880268082",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2nd floor, Lalbagh Towers, Ballalbagh Junction",
              "addressLocality": "Mangalore",
              "postalCode": "675003",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.8654,
              "longitude": 74.8433
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "17:00",
              "closes": "20:00"
            },
            "sameAs": [
              "https://www.linkedin.com/in/sanjana-m-shenoy-21211125/",
              "https://www.instagram.com/dietsanjana/"
            ]
          }
        `}
      </Script>

      <Header />
      <main className="relative isolate bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <section className="col-span-full px-6 pt-32 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-base/7 font-semibold text-indigo-600 dark:text-teal-400">Get in Touch</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                Contact Sanjana M Shenoy
              </h1>
            </div>
          </section>

          <section aria-labelledby="consultation-heading" className="relative px-6 py-12 bg-gray-50 dark:bg-gray-800 lg:col-span-2 mt-16">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="order-1 lg:order-1">
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                    Address & Contact Details
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Visit us at our clinic in Mangalore or get in touch to schedule your consultation.
                  </p>
                  <dl className="mt-8 space-y-6 text-base/7 text-gray-600 dark:text-gray-300">
                    <div className="flex gap-x-4 items-start">
                      <dt className="flex-none mt-1">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-400" />
                      </dt>
                      <dd className="text-lg">
                        2nd floor, Lalbagh Towers,
                        <br />
                        Ballalbagh Junction, Mangalore, 675003
                      </dd>
                    </div>
                    <div className="flex gap-x-4 items-center">
                      <dt className="flex-none">
                        <span className="sr-only">Phone</span>
                        <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-400" />
                      </dt>
                      <dd>
                        <a href="tel:+919880268082" className="text-lg hover:text-gray-900 dark:hover:text-white">
                          +91 9880268082
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4 items-center">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-400" />
                      </dt>
                      <dd>
                        <a href="mailto:diet@sanjanashenoy.com" className="text-lg hover:text-gray-900 dark:hover:text-white">
                          diet[@]sanjanashenoy.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="order-2 lg:order-2 lg:pl-8 lg:border-l lg:border-gray-200 dark:lg:border-gray-700">
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                    Online Diet Consultation
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Can't visit in person? No problem! Get personalized nutrition advice from the comfort of your home.
                  </p>
                  <div className="mt-8 max-w-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Online consultation includes:</h3>
                    <ul className="mt-4 space-y-4 text-base text-gray-600 dark:text-gray-300">
                      <li className="flex gap-x-3 items-center">
                        <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">Video consultation sessions</span>
                      </li>
                      <li className="flex gap-x-3 items-center">
                        <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">Personalized diet plans</span>
                      </li>
                      <li className="flex gap-x-3 items-center">
                        <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">Regular follow-up support</span>
                      </li>
                      <li className="flex gap-x-3 items-center">
                        <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">Digital resources and materials</span>
                      </li>
                    </ul>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available on:</h3>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-x-2 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                          <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                          </svg>
                          <span className="text-base font-medium text-gray-900 dark:text-white">WhatsApp</span>
                        </div>
                        <div className="flex items-center gap-x-2 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                          <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C6.5 0 2 4.5 2 10C2 15.5 6.5 20 12 20C17.5 20 22 15.5 22 10C22 4.5 17.5 0 12 0M12 18C7.59 18 4 14.41 4 10C4 5.59 7.59 2 12 2C16.41 2 20 5.59 20 10C20 14.41 16.41 18 12 18M13 5H11V11H17V9H13V5Z" />
                          </svg>
                          <span className="text-base font-medium text-gray-900 dark:text-white">Google Meet</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Patient Testimonial" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48 lg:col-span-2">
            <div className="mx-auto max-w-2xl text-center">
              <figure>
                <blockquote className="text-lg/8 font-semibold text-gray-900 dark:text-white">
                  <p>
                    "Sanjana's personalized approach to nutrition has transformed my relationship with food. Her evidence-based recommendations and supportive guidance helped me achieve my health goals while maintaining a balanced lifestyle."
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                  <img
                    alt="Patient testimonial"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                    className="size-12 flex-none rounded-full bg-gray-50"
                  />
                  <div className="text-left">
                    <div className="text-base font-semibold text-gray-900 dark:text-white">Shilpa Kamath</div>
                    <div className="text-sm/6 text-gray-600 dark:text-gray-400">Weight Management Patient</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
