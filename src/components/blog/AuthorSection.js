import Link from 'next/link'
import Image from 'next/image'

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
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": AUTHOR_INFO.name,
    "jobTitle": AUTHOR_INFO.jobTitle,
    "image": AUTHOR_INFO.image,
    "description": AUTHOR_INFO.bio,
    "hasCredential": AUTHOR_INFO.certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": cert.title,
      "recognizedBy": cert.organization,
      "dateCreated": cert.year
    }))
  };

  return (
    <article className="mt-16 mb-12 p-4 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About the Author
        </h2>
        <div className="block md:flex md:items-start md:gap-8">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Image
              src={AUTHOR_INFO.image}
              alt={`Portrait of ${AUTHOR_INFO.name}`}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover"
              width={192}
              height={192}
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {AUTHOR_INFO.name}
            </h3>
            
            <div className="mt-2">
              <p className="text-gray-800 dark:text-gray-300 text-base italic">
                {AUTHOR_INFO.degrees.join(" • ")}
              </p>
            </div>

            <p className="text-gray-800 dark:text-gray-300 mt-4 text-lg">
              {AUTHOR_INFO.bio}
            </p>

            <div className="mt-6 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Certifications & Memberships
              </h4>
              <ul className="list-disc list-inside space-y-2 text-left">
                {AUTHOR_INFO.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-800 dark:text-gray-300">
                    {cert.title}
                    {cert.organization && cert.year && (
                      <span className="text-gray-700 dark:text-gray-400">
                        {' '}
                        - {cert.organization}, {cert.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/about-sanjana-m-shenoy"
              className="inline-flex items-center text-teal-800 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 mt-6 text-lg"
            >
              Learn more about Sanjana
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
} 