import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Latestblogs from "@/components/home/Latestblogs";
import { getSortedPosts } from "@/lib/posts";
import Experience from "@/components/about/Experience";
export default async function About() {

    const posts = await getSortedPosts();

  return (
    <>
    <Header />
    <div className="bg-white dark:bg-gray-900 py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-base/7 text-gray-700 dark:text-gray-300">
          <p className="text-base/7 font-semibold text-indigo-600 dark:text-teal-400">About Sanjana Shenoy</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
            Sanjana M. Shenoy
          </h1>
          <p className="mt-6 text-xl/8">
            A dedicated dietitian, educator, and health advocate based in Mangalore. With a strong academic background, I hold a PG Diploma in Dietetics from Manipal University and an MSc in Dietetics and Food Service Management from IGNOU. Currently, I'm pursuing my PhD at Mangalore University, focusing on advanced nutrition research.
          </p>
          <div className="mt-10">
            <p>
              With years of experience in clinical nutrition, I have worked with KMC Hospitals, Mangalore, and served as a visiting dietitian at esteemed hospitals like Yenepoya, Athena, City, and Tejasvini. My expertise extends to corporate wellness, where I have been invited as a speaker for organizations like Infosys, BPCL, HPCL, MRPL, and several Fortune 500 companies.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-400">
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-teal-600 dark:text-teal-400" />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">Clinical Experience.</strong> Extensive experience working with leading hospitals in Mangalore, providing personalized nutrition counseling and dietary management.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-teal-600 dark:text-teal-400" />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">Academic Excellence.</strong> Former Assistant Professor and Head of Department for Food, Nutrition & Dietetics at Besant and Shree Devi College.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-teal-600 dark:text-teal-400-400" />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-white">Media Presence.</strong> Host of "Diet Tips with Sanjana Shenoy" on Daijiworld, regular features on All India Radio and V4 local channels in multiple languages.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              I am passionate about spreading nutrition awareness and have conducted workshops and seminars on diabetes management, cholesterol control, weight loss, and overall wellness at various educational institutions, including NITTE, KMC, Yenepoya, M.V. Shetty Memorial, and SDM.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
            Comprehensive Nutrition Care
          </h2>
          <p className="mt-6">
            Beyond consulting, I actively engage with schools and parents to promote healthy lifestyles for children. I also provide sports nutrition support to swimming and badminton associations in Mangalore. Today, I continue my mission to enhance lives through scientific, personalized nutrition plans at my private clinic in Ballalbagh, Mangalore, while also pursuing full-time research.
          </p>
          <figure className="mt-10 border-l border-indigo-600 dark:border-teal-400 pl-9">
            <blockquote className="font-semibold text-gray-900 dark:text-white">
              <p>
                "Let's embark on a journey toward better health, one step at a time!"
              </p>
            </blockquote>
          </figure>
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
