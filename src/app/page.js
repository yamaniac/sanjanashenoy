import Image from "next/image";
import Link from "next/link";
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
import Testimonials from "@/components/home/Testimonials";
import Featured from "@/components/home/Featured";
import { XMarkIcon } from '@heroicons/react/20/solid';

export default async function Home() {
  // Get the posts data
  const posts = await getSortedPosts();

  return (
    <main className="bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <Hero />
      
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-teal-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-white">
            <strong className="font-semibold">Lifetime Member</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
            Indian Diatetics Association
          </p>
         
        </div>
        <div className="flex flex-1 justify-end">
          {/* <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="size-5 text-white" />
          </button> */}
        </div>
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Specializations Section */}
      <Specializations />
      {/* Clients Section */}
      <Clients />

      {/* Featured Services */}
      <Featured />
      {/* Testimonials Section */}

      {/* Latest Blog Posts */}
      <Latestblogs posts={posts} />

      <Footer />
    </main>
  );
}
