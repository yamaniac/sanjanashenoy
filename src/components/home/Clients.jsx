import Image from 'next/image'
import Link from 'next/link'

export default function Clients() {
    return (
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900 dark:text-white">
              Consultant Dietitian for Indias's most Prestigious Companies
            </h2>
            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
              <Image
                alt="Infosys"
                title="Infosys"
                src="/images/logos/infosys.png"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="Mphasis"
                title="Mphasis"
                src="/images/logos/mphasis.png"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="Amway"
                title="Amway"
                src="/images/logos/amway.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="Mahindra Retail"
                title="Mahindra Retail"
                src="/images/logos/mahindra_logo.png"
                width={300}
                height={300}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="MCF"
                title="MCF"
                src="/images/logos/mcf.png"
                width={300}
                height={300}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
            </div>
            
            {/* View All Clients button */}
            <div className="mt-12 flex justify-center">
              <Link 
                href="/clients"
                className="rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                View All Clients
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}