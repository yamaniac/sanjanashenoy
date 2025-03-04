import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedPosts } from "@/lib/posts";
import Hero from "@/components/home/Hero";
import Specializations from "@/components/home/Specializations";
import Experience from "@/components/home/Experience";
import Clients from "@/components/home/Clients";
import Latestblogs from "@/components/home/Latestblogs";
import Featured from "@/components/home/Featured";
import LatestNews from "@/components/home/LatestNews";

// Add metadata export
export const metadata = {
  title: "Consultant Dietitian & Nutritionist | Mangalore | Sanjana M Shenoy",
  description:
    "Expert nutrition consultation in Mangalore by Dt. Sanjana Shenoy. Specializing in weight management, clinical nutrition, diabetes care, and personalized diet plans. Book your consultation today for a healthier lifestyle.",
  keywords:
    "nutrition expert, diet consultation, weight management, clinical dietitian, mangalore dietitian",
  openGraph: {
    title: "Sanjana M Shenoy -Consultant Dietitian & Nutritionist, Mangalore",
    description:
      "Expert nutrition consultation in Mangalore by Dt. Sanjana Shenoy. Specializing in weight management, clinical nutrition, diabetes care, and personalized diet plans. Book your consultation today for a healthier lifestyle.",
    type: "website",
    locale: "en_IN",
    siteName: "sanjanashenoy.in",
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://sanjanashenoy.in",
};

// Add JSON-LD structured data
export const generateJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sanjanashenoy.in/#dietitian",
        name: "Sanjana M Shenoy",
        jobTitle: "Consultant Dietitian & Nutritionist",
        description:
          "Dt. Sanjana Shenoy is a Consultant Dietitian & Nutritionist in Mangalore with over 13 years of experience",
        image: "https://sanjanashenoy.in/images/sanjana-shenoy.jpg", // Update with actual image path
        url: "https://sanjanashenoy.in",
        sameAs: [
          "https://www.linkedin.com/in/sanjana-shenoy", // Update with actual social links
          "https://www.instagram.com/dt.sanjanashenoy",
        ],
        memberOf: {
          "@type": "Organization",
          name: "Indian Dietetics Association",
          url: "https://idaindia.com",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy",
        name: "Dt. Sanjana M Shenoy Nutrition Clinic",
        image: "https://sanjanashenoy.in/images/sanjana-shenoy.jpg", // Update with actual image path
        "@context": "https://schema.org",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd floor, Lalbagh Towers, Ballalbagh Junction",
          addressLocality: "Mangalore",
          postalCode: "575003",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.8827016,
          longitude: 74.8394863,
        },
        url: "https://sanjanashenoy.in",
        telephone: "+919880268082", // Update with actual phone
        priceRange: "₹₹",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "17:00",
            closes: "20:00",
          },
        ],
      },
    ],
  };
};

export default async function Home() {
  // Get the posts data
  const posts = await getSortedPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
      />
      <main className="bg-white dark:bg-gray-900">
        <Header />
        
        {/* Hero Section */}
        <Hero />

        {/* Experience Section */}
        <div className="mt-8 sm:mt-0">
          <Experience />
        </div>

        {/* Specializations Section */}
        <div className="mt-8 sm:mt-16">
          <Specializations />
        </div>
        {/* Clients Section */}
        <div className="mt-8 sm:mt-16">
          <Clients />
        </div>

        {/* Featured Services */}
        <div className="mt-8 sm:mt-16">
          <Featured />
        </div>
        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* Latest News & Events Section */}
        <div className="mt-8 sm:mt-16">
          <LatestNews />
        </div>

        {/* Latest Blog Posts */}
        <div className="mt-8 sm:mt-16">
          <Latestblogs posts={posts} />
        </div>

        <Footer />
      </main>
    </>
  );
}
