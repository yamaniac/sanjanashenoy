import Image from 'next/image'
import Link from 'next/link'
import happyfamily from '../../../public/images/happy_family.png'

export default function Experience() {
    const stats = [
        { id: 1, name: "Success Stories", value: "2,000+" },
        { id: 2, name: "Years of Experience", value: "20" },
        { id: 3, name: "Corporate Clients", value: "20+" },
        { id: 4, name: "Weight Loss Programs", value: "50+" },
    ];
    return (
        <div className="relative bg-white dark:bg-gray-900">
        <Image
          alt=""
          src={happyfamily}
          className="h-56 w-full bg-gray-50 dark:bg-gray-800 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400">
                Two decades of experience
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                Trusted by thousands of Patients and families Worldwide
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              With over two decades of  diet consultancy experience, thousands of success stories and speaking engagements, her ideology has been to spread research based knowledge and awareness on nutrition and health. 

              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-teal-900/10 dark:border-teal-100/10 pl-6"
                  >
                    <dt className="text-sm/6 text-gray-600 dark:text-gray-400">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
}