import { useId } from 'react';

export default function Featured() {
    const sectionId = useId();
    const services = [
        {
          name: "Personalized Nutrition Plans",
          description:
            "Expert-crafted meal plans tailored specifically to your metabolic needs, dietary preferences, and health objectives. My evidence-based nutrition strategies optimize yMy energy levels, support immune function, and help achieve sustainable weight management.",
          benefits: ["Custom macronutrient ratios", "Allergen-free options", "Seasonal meal variations"],
          href: "/consultation",
          icon: ClipboardIcon,
        },
        {
          name: "One-on-One Health Coaching",
          description:
            "Transformative coaching sessions that empower you to overcome health challenges and build sustainable wellness habits. My certified nutritionists provide accountability, motivation, and practical strategies for lasting lifestyle changes.",
          benefits: ["Weekly progress tracking", "Behavioral change techniques", "Personalized goal setting"],
          href: "/consultation",
          icon: UserGroupIcon,
        },
        {
          name: "Specialized Nutrition Programs",
          description:
            "Targeted therapeutic nutrition programs designed for specific health conditions including diabetes management, heart health, digestive disorders, sports performance, and prenatal/postnatal nutrition care.",
          benefits: ["Condition-specific protocols", "Medical professional coordination", "Ongoing assessment"],
          href: "/consultation",
          icon: StarIcon,
        },
      ];
      function ClipboardIcon(props) {
        return (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            {...props}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        );
      }
      
      function UserGroupIcon(props) {
        return (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            {...props}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        );
      }
      
      function StarIcon(props) {
        return (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            {...props}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.414 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        );
      }
    return (
        <section 
          id={sectionId}
          className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50 dark:bg-gray-800 mb-20"
          aria-labelledby={`${sectionId}-heading`}
        >
          {/* Schema.org structured data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Nutrition Services",
              "provider": {
                "@type": "HealthAndBeautyBusiness",
                "name": "Nutritionist Services"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Nutrition Services",
                "itemListElement": services.map((service, index) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.name,
                    "description": service.description
                  },
                  "position": index + 1
                }))
              }
            })}
          </script>

          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 
              id={`${sectionId}-heading`}
              className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400"
            >
              Expert Nutrition Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Transformative Nutrition Solutions for Optimal Health
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover science-backed nutrition plans, professional health coaching, and specialized dietary programs 
              designed to optimize your wellbeing, boost energy levels, and help you achieve sustainable health outcomes.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col hover:shadow-md transition-shadow p-6 rounded-lg">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <service.icon
                      className="h-5 w-5 flex-none text-teal-600 dark:text-teal-400"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{service.description}</p>
                    
                    <ul className="mt-4 space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-teal-600 dark:text-teal-400">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
    )
}