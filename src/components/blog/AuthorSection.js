import Link from 'next/link'

const AUTHOR_INFO = {
  name: "Sanjana M Shenoy",
  image: "/images/author.png",
  jobTitle: "Dietitian & Nutrition expert",
  degrees: [
    "PDG Dietitics",
    "BSc Allied Health Sciences",
    "MSc in Dietetics and Food Service Management"
  ],
  accreditations: "PDG Dietitics, BSc allied health sciences, MSc in Dietetics and Food Service Management",
  bio: "Sanjana Shenoy is a dedicated dietitian and nutrition expert with 2 decades of extensive experience in helping people achieve their health goals through personalized diet and nutrition plans. She combines evidence-based practice with a holistic approach to wellness.",
  certifications: [
    {
      title: "Lifetime Member - Indian Dietetics Association Since 2010",
    },
    {
      title: "Certified Bariatric Nutritionist",
      organization: "CODS",
      year: "2012"
    },
    {
      title: "Certified Diabetes Educator",
      organization: "HOPE",
      year: "2010"
    },
   
  ]
};

export default function AuthorSection() {
  return (
    <div className="mt-16 mb-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        About the Author
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <img
            src={AUTHOR_INFO.image}
            alt={AUTHOR_INFO.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
          />
        </div>
        <div className="flex-grow">
          <Link 
            href="/about-sanjana-m-shenoy"
            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {AUTHOR_INFO.name}
          </Link>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1">
            {AUTHOR_INFO.jobTitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {AUTHOR_INFO.degrees.map((degree, index) => (
              <span 
                key={index}
                className="text-sm text-blue-800 dark:text-blue-200"
              >
                {index > 0 ? ' • ' : ''}{degree}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {AUTHOR_INFO.bio}
          </p>
          <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Certifications & Memberships
            </h3>
            <div className="space-y-3">
              {AUTHOR_INFO.certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {cert.title}
                    {cert.organization && (
                      <span className="ml-1">
                        • {cert.organization}
                      </span>
                    )}
                    {cert.year && (
                      <span className="ml-1">
                        • {cert.year}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Link 
            href="/about-sanjana-m-shenoy"
            className="inline-flex items-center mt-4 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
          >
            Learn more about Sanjana
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 