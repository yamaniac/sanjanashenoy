import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Latestblogs from "@/components/home/Latestblogs";
import { getSortedPosts } from "@/lib/posts";
import Experience from "@/components/about/Experience";

export async function generateMetadata() {
  return {
    title: 'About Sanjana Shenoy | Dietitian & Nutritionist in Mangalore',
    description: 'Learn more about Sanjana Shenoy, a registered dietitian based in Mangalore, India. Discover her background, qualifications, and commitment to providing personalized nutrition counseling.',
  }
}

export default async function About() {
    const posts = await getSortedPosts();

    return (
        <>
        <Header />
        <div className="bg-white dark:bg-gray-900 py-32">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Hero Section with Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-gray-200 dark:border-gray-700 ">
                    <div className="text-base/7 text-gray-800 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 pr-12 ">
                        <p className="text-base/7 font-semibold text-indigo-600 dark:text-teal-400">About Sanjana Shenoy</p>
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                           Sanjana M Shenoy
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-800 dark:text-gray-300">
                            A dietitian & nutritionist and educator based in Mangalore, India. With a strong academic background, I hold a PG Diploma in Dietetics from Manipal University and an MSc in Dietetics and Food Service Management. Pursuing a PhD at Mangalore University, focusing on advanced nutrition research.
                        </p>
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
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                        <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/clinical_diet.jpg"
                                alt="Clinical Experience"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Clinical Experience</h3>
                        <p className="mt-2 text-gray-800 dark:text-gray-300">
                            Extensive experience working with leading hospitals in Mangalore, providing personalized nutrition counseling.
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
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Academic Excellence</h3>
                        <p className="mt-2 text-gray-800 dark:text-gray-300">
                            Former Assistant Professor and Head of Department for Food, Nutrition & Dietetics.
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
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Media Presence</h3>
                        <p className="mt-2 text-gray-800 dark:text-gray-300">
                            Expert speaker of "Diet Tips with Sanjana Shenoy" on <a href="https://www.daijiworld.com/news/newsDisplay?newsID=148614" target="_blank" rel="noopener noreferrer" className='text-indigo-600 dark:text-teal-400 underline'>Daijiworld</a> and regular features on various channels.
                        </p>
                    </div>
                </div>

                {/* Comprehensive Care Section with Image */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                            Beyond consulting, I actively engage with schools and parents to promote healthy lifestyles for children. I also provide sports nutrition support to swimming and badminton associations in Mangalore. Today, I continue my mission to enhance lives through scientific, personalized nutrition plans at my private clinic in Ballalbagh, Mangalore, while also pursuing full-time research.
                        </p>
                        <figure className="mt-10 border-l border-indigo-600 dark:border-teal-400 pl-9">
                            <blockquote className="font-semibold text-gray-900 dark:text-white">
                                <p>"Let's embark on a journey toward better health, one step at a time!"</p>
                            </blockquote>
                        </figure>
                    </div>
                </div>

                <div className="mt-16">
                    <Experience />
                </div>
            </div>
        </div>
        <Latestblogs posts={posts} />
        <Footer />
        </>
    )
}
