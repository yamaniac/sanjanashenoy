import Image from 'next/image'

export default function Clients() {
    return (
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg/8 font-semibold text-gray-900 dark:text-white">
              Trusted by the world's most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
              <Image
                alt="Transistor"
                src="https://tailwindui.com/plus-assets/img/logos/transistor-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="Reform"
                src="https://tailwindui.com/plus-assets/img/logos/reform-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="Tuple"
                src="https://tailwindui.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="SavvyCal"
                src="https://tailwindui.com/plus-assets/img/logos/savvycal-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
              <Image
                alt="Statamic"
                src="https://tailwindui.com/plus-assets/img/logos/statamic-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1 dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    )
}