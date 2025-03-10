import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Latestblogs from "@/components/home/Latestblogs";
import { getSortedPosts } from "@/lib/posts";
import Experience from "@/components/about/Experience";
import Clients from "@/components/home/Clients";
import Script from "next/script";
import ClientList from "@/components/about/ClientList";
import Breadcrumbs from "@/components/Breadcrumbs";
import LatestNews from "@/components/home/LatestNews";
export const metadata = {
  title: "About Sanjana M Shenoy - Professional Journey & Expertise",
  metadataBase: new URL("https://www.sanjanashenoy.in"),
  description:
    "Dt. Sanjana M Shenoy, Mangalore's leading dietitian with 20 years of expertise in clinical nutrition, weight management & diabetes care. PhD researcher, certified bariatric nutritionist & diabetes educator. Book your consultation today!",
  openGraph: {
    title:
      "Dt. Sanjana M Shenoy - Expert Dietitian & Nutritionist in Mangalore | 15+ Years Experience",
    description:
      "Meet Dt. Sanjana M Shenoy, Mangalore's leading dietitian with 15+ years of expertise in clinical nutrition, weight management & diabetes care. PhD researcher, certified bariatric nutritionist & diabetes educator.",
    images: [
      {
        url: "/images/sanjana_shenoy.png",
        width: 800,
        height: 800,
        alt: "Dt. Sanjana M Shenoy - Dietitian & Nutritionist in Mangalore",
      },
    ],
    type: "website",
    locale: "en_IN",
    siteName: "Dt. Sanjana M Shenoy",
  },
  alternates: {
    canonical: "https://sanjanashenoy.in/about-sanjana-m-shenoy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dt. Sanjana M Shenoy - Expert Dietitian & Nutritionist in Mangalore",
    description:
      "Meet t. Sanjana M Shenoy, Mangalore's leading dietitian with 15+ years of expertise in clinical nutrition, weight management & diabetes care.",
    images: ["/images/sanjana_shenoy.png"],
  },
};

export default async function About() {
  const posts = await getSortedPosts();

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanjana M Shenoy",
    url: "https://www.sanjanashenoy.in/about-sanjana-m-shenoy",
    jobTitle: "Consultant Dietitian & Nutritionist",
    description:
      "Consultant dietitian and nutritionist based in Mangalore, specializing in clinical nutrition and personalized diet plans",
    image: {
      "@type": "ImageObject",
      url: "https://www.sanjanashenoy.in/images/sanjana_shenoy.png",
      width: "800",
      height: "800",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd floor, Lalbagh Towers, Ballalbagh Junction",
      addressLocality: "Mangalore",
      postalCode: "575003",
      addressCountry: "IN",
    },
    telephone: "+91 98802 68082",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Manipal University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Mangalore University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "IGNOU",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "PG Diploma",
        name: "Dietetics",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master's Degree",
        name: "Dietetics and Food Service Management",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's Degree",
        name: "Bachelor of allied sciences",
      },

    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Indian Dietetic Association",
      },
      {
        "@type": "Organization",
        name: "Nutrition Society of India",
      },
    ],
    certifications: [
      {
        "@type": "Certification",
        name: "Certified Bariatric Nutritionist",
        issuer: "CODS",
      },
      {
        "@type": "Certification",
        name: "Certified Diabetes Educator",
        issuer: "HOPE",
      },
    ],
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Sanjana M Shenoy - Professional Journey & Expertise",
    description: "Meet Dt. Sanjana M Shenoy, Mangalore's leading dietitian with 15+ years of expertise in clinical nutrition, weight management & diabetes care.",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    about: personData
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify([personData, webPageData])}
      </Script>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              {
                href: "/about-sanjana-m-shenoy",
                label: "About Sanjana M Shenoy",
              },
            ]}
          />

          {/* Hero Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-gray-200 dark:border-gray-700 mb-16">
            <div className="text-base/7 text-gray-800 dark:text-gray-300 pr-12 relative">
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/10 rounded-full blur-xl opacity-70"></div>
              
              {/* Professional title banner */}
              <div className="mb-6 inline-block px-4 py-1.5 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500 text-teal-700 dark:text-teal-300 font-medium">
                MSc Food & Nutrition • 20 Years Experience
              </div>
              
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                Dt. Sanjana M Shenoy
              </h1>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                <span className="text-teal-600 dark:text-teal-400">Consultant Dietitian & Nutritionist in Mangalore</span>
              </h2>
              <p className="mt-6 text-xl/8 text-gray-800 dark:text-gray-300">
                A leading consultant dietitian, nutritionist, and educator in Mangalore
                with over 20 years of experience in clinical nutrition, weight
                management, and diabetes care. Helping patients achieve their
                health goals through personalized nutrition plans and
                evidence-based guidance.
              </p>

              {/* Qualifications with enhanced styling */}
              <div className="mt-8 p-5 bg-white dark:bg-gray-800/30 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Qualifications
                </h2>
                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>PGD in Dietetics from Manipal University</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>MSc in Dietetics and Food Service Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>BSc in Allied Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>Member of Indian Dietetic Association since 2010</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>Certified Bariatric Nutritionist</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>Certified Diabetes Educator</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                    <span>Currently pursuing a PhD at Mangalore University, focusing on advanced nutrition research to better serve my patients.</span>
                  </li>
                </ul>
                
                {/* Professional memberships */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>Professional Memberships:</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Indian Dietetic Association</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Nutrition Society of India</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial quote styled similarly to Hero */}
              <div className="mt-6 italic text-gray-500 dark:text-gray-400 border-l-4 border-teal-200 dark:border-teal-800 pl-4">
                "Dt. Sanjana's evidence-based approach and personalized care has made a tremendous difference in my health journey."
                <p className="mt-2 not-italic font-medium text-gray-700 dark:text-gray-300">— Rajesh K., Patient</p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-500 hover:shadow-2xl">
              {/* Decorative badge */}
              <div className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-xs font-medium px-3 py-1 rounded-full">
                  20+ Years Experience
                </div>
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <Image
                src="/images/sanjana_shenoy.png"
                alt="Sanjana Shenoy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800/60 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
                {/* Badge overlay */}
                <div className="absolute top-2 right-2 z-10 bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 shadow-sm">
                  20+ Years
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]"></div>
                <Image
                  src="/images/clinical_diet.jpg"
                  alt="Clinical Experience"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Clinical Experience
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Extensive experience working with leading hospitals in
                Mangalore, providing personalized nutrition counseling.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Specialized clinical protocols
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800/60 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
                {/* Badge overlay */}
                <div className="absolute top-2 right-2 z-10 bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 shadow-sm">
                  Professor
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]"></div>
                <Image
                  src="/images/college.png"
                  alt="Academic Excellence"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Academic Excellence
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Former Assistant Professor and Head of Department for Food,
                Nutrition & Dietetics.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Research-backed approaches
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800/60 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
                {/* Badge overlay */}
                <div className="absolute top-2 right-2 z-10 bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 shadow-sm">
                  Featured Expert
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]"></div>
                <Image
                  src="/images/media_presence.jpg"
                  alt="Media Presence"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Media Presence
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Expert speaker of "Diet Tips with Sanjana Shenoy" on{" "}
                <a
                  href="https://www.daijiworld.com/news/newsDisplay?newsID=148614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 font-medium hover:underline"
                >
                  Daijiworld
                </a>{" "}
                and regular features on various channels.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Trusted nutrition voice
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Care Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-500 hover:shadow-2xl group">
              {/* Decorative badge */}
              <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 text-xs font-medium px-3 py-1 rounded-full">
                  Holistic Approach
                </div>
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <Image
                src="/images/comprehensive.jpg"
                alt="Comprehensive Nutrition Care"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm">Providing comprehensive nutrition care for people of all ages and conditions</p>
              </div>
            </div>
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/10 rounded-full blur-xl opacity-70"></div>
            
              <div className="inline-block px-4 py-1 bg-teal-50 dark:bg-teal-900/30 rounded-lg mb-4 text-teal-700 dark:text-teal-300 font-medium">
                Beyond Clinical Practice
              </div>
              
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                Comprehensive <span className="text-teal-600 dark:text-teal-400">Nutrition Care</span>
              </h2>
              
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                Beyond consulting, I actively engage with schools and parents to
                promote healthy lifestyles for children. I also provide sports
                nutrition support to swimming and badminton associations in
                Mangalore. Today, I continue my mission to enhance lives through
                scientific, personalized nutrition plans at my private clinic in
                Ballalbagh, Mangalore, while also pursuing full-time research.
              </p>
              
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border-l-4 border-teal-500">
                <h3 className="font-medium text-gray-900 dark:text-white text-lg flex items-center">
                  <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Specialized Nutrition Programs
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 mt-2"></div>
                    <span>Personalized Diet Plans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 mt-2"></div>
                    <span>Sports Nutrition Guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 mt-2"></div>
                    <span>Child Nutrition Workshops</span>
                  </li>
                </ul>
              </div>
              
              <figure className="mt-8 border-l-4 border-teal-500 pl-6 py-2 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent rounded-r-lg">
                <blockquote className="font-semibold text-gray-900 dark:text-white text-lg italic">
                  <p>
                    "Let's embark on a journey toward better health, one step at
                    a time!"
                  </p>
                </blockquote>
                <figcaption className="mt-2 text-sm text-teal-600 dark:text-teal-400">— Dt. Sanjana M Shenoy</figcaption>
              </figure>
            </div>
          </div>

          <ClientList />

          <div className="mt-16">
            <Experience />
          </div>

          {/* Add FAQ Section for SEO */}
        </main>
        <LatestNews />

        <Latestblogs posts={posts} />
        <Footer />
      </div>
    </>
  );
}
