import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ThemeToggle } from '@/components/ThemeToggle'
import Header from '@/components/Header'
import { getSortedPosts } from '@/lib/posts'

export default async function Home() {
  // Get the posts data
  const posts = await getSortedPosts()
  
  return (
    <main className="bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-200 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Your Journey to Better Health Starts Here
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                Hi, I'm Sanjana Shenoy, a registered dietitian and nutritionist dedicated to helping you achieve your health goals through personalized nutrition guidance and evidence-based strategies.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Book a Consultation
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-10 h-96 w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL || ''}/images/Sanjana_shenoy.png`}
                alt="Sanjana Shenoy - Professional Dietitian"
                width={800}
                height={600}
                className="aspect-[5/3] w-full rounded-2xl object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Add a negative margin to remove bottom padding */}
        <div className="-mb-24 sm:-mb-32 lg:-mb-40"></div>
      </div>

      {/* Specializations Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">Expert Care</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Specialized Nutrition Services
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{spec}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">Professional Experience</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Two Decades of Excellence
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Positions</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>HOD of Department of Food, Nutrition and Dietetics at Besant Women's College</li>
                  <li>HOD at Shree Devi College of Hotel Management</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hospital Consultations</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>KMC Hospitals</li>
                  <li>Yenepoya Hospital</li>
                  <li>Unity Hospital</li>
                  <li>And several other leading hospitals in Mangalore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">Educational Background</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Academic Excellence
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <p className="text-gray-900 dark:text-white">{edu}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">Comprehensive Care</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need for a healthier lifestyle
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover personalized nutrition plans, expert guidance, and ongoing support to help you achieve your health and wellness goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <service.icon className="h-5 w-5 flex-none text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link href={service.href} className="text-sm font-semibold leading-6 text-teal-600 dark:text-teal-400">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Latest from the Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Expert insights, tips, and advice for your nutrition journey.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    priority={false}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      <Link href={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-teal-200 to-teal-400" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ready to transform your health?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Take the first step towards a healthier you. Schedule a consultation and let's create your personalized nutrition plan together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Get Started
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

const services = [
  {
    name: 'Personalized Nutrition Plans',
    description: 'Custom-tailored meal plans and nutrition strategies designed specifically for your lifestyle, preferences, and health goals.',
    href: '/services#nutrition-plans',
    icon: ClipboardIcon,
  },
  {
    name: 'Health Coaching',
    description: 'One-on-one coaching sessions to help you develop sustainable healthy habits and overcome obstacles in your wellness journey.',
    href: '/services#health-coaching',
    icon: UserGroupIcon,
  },
  {
    name: 'Specialized Programs',
    description: 'Targeted nutrition programs for specific health conditions, weight management, sports nutrition, and prenatal care.',
    href: '/services#specialized-programs',
    icon: StarIcon,
  },
]

function ClipboardIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  )
}

function UserGroupIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

const specializations = [
  'Weight Management',
  'Diabetes Management',
  'Kidney Related Disorders',
  'Gastrointestinal Diseases',
  'Heart Diseases',
  'Child Nutrition',
  'Hormonal Disorders',
  'Sports Nutrition',
  'Pregnancy Nutrition'
];

const education = [
  'PG diploma in Dietetics from WGSHA, Manipal University',
  'MSC in Dietetics and Food service management, Mount Carmel College, IGNOU',
  'Registered for PhD under Mangalore University',
  'Certified Bariatric Nutritionist from CODS',
  'Certified Diabetes Educator from HOPE'
];
