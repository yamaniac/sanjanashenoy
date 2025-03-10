import { CalendarIcon, AcademicCapIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

export default function Experience() {
  const experiences = [
    {
      type: 'Academic',
      icon: AcademicCapIcon,
      positions: [
        
        {
          title: 'Head of Department',
          institution: 'Shree Devi College of Hotel Management',
          department: 'Department of Nutrition',
          period: '2015 - present',
        },
        {
            title: 'Head of Department',
            institution: 'Besant Women\'s College',
            department: 'Department of Food, Nutrition and Dietetics',
            period: '2010 - 2015',
          },
          {
            title: 'Guest Lecturer',
            institution: 'Zulekha College of Nursing',
            department: 'Department of Allied Science',
            period: '2010 - 2011',
          },

      ],
    },
    {
      type: 'Clinical',
      icon: BuildingOffice2Icon,
      positions: [
        {
          title: 'Dietitian Consultant',
          institution: 'Baby Nine - IVF Center',
          period: '2024 - Present',
        },
        {
          title: 'Clinical Dietitian ',
          institution: 'KMC Hospitals',
          period: '2012 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Tejasvini Hospital',
          period: '2012 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'City Hospital',
          period: '2010 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Athena Hospital',
          period: '2010 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Yenepoya Hospital',
          period: '2010 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Highland Hospital',
          period: '2009 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Unity Hospital',
          period: '2008 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Vijaya Clinic',
          period: '2008 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'SCS Hospital',
          period: '2008 - Present',
        },
        {
          title: 'Dietitian Consultant',
          institution: 'Indira Hospital',
          period: '2008 - Present',
        },
      ],
    },
  ]

  const education = [
    {
      year: "2022",
      title: "PhD Candidate",
      institution: "Mangalore University",
      details: "Currently pursuing doctoral research"
    },
    {
      year: "2012",
      title: "Certified Bariatric Nutritionist",
      institution: "CODS",
      details: "Specialized certification in bariatric nutrition"
    },
    {
      year: "2010",
      title: "Certified Diabetes Educator",
      institution: "HOPE",
      details: "Advanced certification in diabetes management"
    },
    {
      year: "2009",
      title: "MSC in Dietetics",
      institution: "Mount Carmel College, IGNOU",
      details: "Master's degree specializing in dietetics"
    },
    {
      year: "2006",
      title: "PG Diploma in Dietetics",
      institution: "WGSHA, Manipal University",
      details: "Postgraduate specialization in dietetics"
    },
  ]

  return (
    <section id="professional-experience" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">
            Professional Journey
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experience & Education
          </h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Academic leadership and clinical dietetics expertise spanning over 15 years
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Academic Experience */}
          {experiences.filter(cat => cat.type === 'Academic').map((category) => (
            <div key={category.type} className="flex flex-col items-center">
              <div className="flex items-center gap-x-3">
                <category.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.type} Experience
                </h3>
              </div>

              <div className="mt-6 w-full border-l-2 border-teal-600 dark:border-teal-400">
                {category.positions.map((position, index) => (
                  <article 
                    key={index}
                    className="relative pl-6 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-600 dark:bg-teal-400" />
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                        <time dateTime={position.period.replace(' - ', '–')}>{position.period}</time>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {position.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {position.institution}
                      </p>
                      {position.department && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {position.department}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* Education Timeline */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-x-3">
              <AcademicCapIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education & Certifications
              </h3>
            </div>

            <div className="mt-6 w-full border-l-2 border-teal-600 dark:border-teal-400">
              {education.map((edu, index) => (
                <article
                  key={index}
                  className="relative pl-6 pb-6 last:pb-0"
                >
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-600 dark:bg-teal-400" />
                  <div className="flex flex-col gap-y-1">
                    <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={edu.year}>{edu.year}</time>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.details}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Clinical Experience */}
          {experiences.filter(cat => cat.type === 'Clinical').map((category) => (
            <div key={category.type} className="flex flex-col items-center">
              <div className="flex items-center gap-x-3">
                <category.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.type} Experience
                </h3>
              </div>

              <div className="mt-6 w-full border-l-2 border-teal-600 dark:border-teal-400">
                {category.positions.map((position, index) => (
                  <article
                    key={index}
                    className="relative pl-6 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-600 dark:bg-teal-400" />
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                        <time dateTime={position.period.replace(' - ', '–')}>{position.period}</time>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {position.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {position.institution}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}