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

// Add metadata export
export const metadata = {
  title: 'Sanjana M Shenoy - Dietitian & Nutrition Expert',
  description: 'Expert nutrition and diet consultation services by Dt. Sanjana Shenoy from Mangalore, India. Specializing in personalized diet plans, weight management, and holistic wellness since 2007.',
  keywords: 'nutrition expert, diet consultation, weight management, holistic wellness, Indian dietitian',
  openGraph: {
    title: 'Sanjana M Shenoy - Dietitian & Nutrition Expert',
    description: 'Expert nutrition and diet consultation services by Dt. Sanjana Shenoy from Mangalore, India. Specializing in personalized diet plans, weight management, and holistic wellness.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'sanjanashenoy.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  // Get the posts data
  const posts = await getSortedPosts();

  return (
    <main className="bg-white dark:bg-gray-900">
      <Header />
      <div className="relative isolate flex flex-col sm:flex-row items-center gap-x-6 overflow-hidden bg-teal-600 px-4 py-3 sm:px-6 sm:py-2.5 mt-16">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 w-full justify-center">
          <p className="text-base sm:text-lg leading-6 text-white text-center w-full">
            <strong className="font-semibold">Lifetime Member</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
            Indian Dietetics Association Since 2010
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          {/* <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="size-5 text-white" />
          </button> */}
        </div>
      </div>
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

      {/* Latest Blog Posts */}
      <div className="mt-8 sm:mt-16">
        <Latestblogs posts={posts} />
      </div>

      <Footer />
    </main>
  );
}
