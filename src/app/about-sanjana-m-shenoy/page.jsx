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

export const metadata = {
  title: "About Sanjana M Shenoy - Professional Journey & Expertise",
  metadataBase: new URL("https://www.sanjanashenoy.in"),
  description:
    "Meet Dt. Sanjana M Shenoy, Mangalore's leading dietitian with 15+ years of expertise in clinical nutrition, weight management & diabetes care. PhD researcher, certified bariatric nutritionist & diabetes educator. Book your consultation today!",
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
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "PhD",
        name: "Nutrition Research",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Indian Dietetic Association",
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
            <div className="text-base/7 text-gray-800 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 pr-12">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                Dt. Sanjana M Shenoy
              </h1>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Expert Consultant Dietitian & Nutritionist in Mangalore
              </h2>
              <p className="mt-6 text-xl/8 text-gray-800 dark:text-gray-300">
                A leading dietitian, nutritionist, and educator in Mangalore
                with over 15 years of experience in clinical nutrition, weight
                management, and diabetes care. Helping patients achieve their
                health goals through personalized nutrition plans and
                evidence-based guidance.
              </p>

              {/* Qualifications */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Qualifications
              </h2>
              <ul className="list-disc pt-5 pl-5">
                <li>PGD in Dietetics from Manipal University</li>
                <li>MSc in Dietetics and Food Service Management</li>
                <li>Bsc in allied sciences</li>
                <li>Member of Indian Dietetic Association since 2010</li>
                <li>Certified Bariatric Nutritionist</li>
                <li>Certified Diabetes Educator</li>
                <li>
                  Currently pursuing a PhD at Mangalore University, focusing on
                  advanced nutrition research to better serve my patients.
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
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
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/clinical_diet.jpg"
                  alt="Clinical Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Clinical Experience
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                Extensive experience working with leading hospitals in
                Mangalore, providing personalized nutrition counseling.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/college.png"
                  alt="Academic Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Academic Excellence
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                Former Assistant Professor and Head of Department for Food,
                Nutrition & Dietetics.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/media_presence.jpg"
                  alt="Media Presence"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Media Presence
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                Expert speaker of "Diet Tips with Sanjana Shenoy" on{" "}
                <a
                  href="https://www.daijiworld.com/news/newsDisplay?newsID=148614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-teal-400 underline"
                >
                  Daijiworld
                </a>{" "}
                and regular features on various channels.
              </p>
            </div>
          </div>

          {/* Comprehensive Care Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/comprehensive.jpg"
                alt="Comprehensive Nutrition Care"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                Comprehensive Nutrition Care
              </h2>
              <p className="mt-6 text-gray-800 dark:text-gray-300">
                Beyond consulting, I actively engage with schools and parents to
                promote healthy lifestyles for children. I also provide sports
                nutrition support to swimming and badminton associations in
                Mangalore. Today, I continue my mission to enhance lives through
                scientific, personalized nutrition plans at my private clinic in
                Ballalbagh, Mangalore, while also pursuing full-time research.
              </p>
              <figure className="mt-10 border-l border-indigo-600 dark:border-teal-400 pl-9">
                <blockquote className="font-semibold text-gray-900 dark:text-white">
                  <p>
                    "Let's embark on a journey toward better health, one step at
                    a time!"
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>

          <ClientList />

          <div className="mt-16">
            <Experience />
          </div>

          {/* Add FAQ Section for SEO */}
        </main>

        <Latestblogs posts={posts} />
        <Footer />
      </div>
    </>
  );
}
