"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Award, Bookmark, BookOpen, Briefcase, Users, FileText } from 'lucide-react'

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
  bio: "Sanjana Shenoy is a dedicated dietitian and nutrition expert with 20 years of extensive experience in helping people achieve their health goals through personalized diet and nutrition plans. She combines evidence-based practice with a holistic approach to wellness.",
  certifications: [
    {
      title: "Lifetime Member - Indian Dietetics Association Since 2010",
      type: "membership",
      icon: "Users"
    },
    {
      title: "Certified Bariatric Nutritionist",
      organization: "CODS",
      year: "2012",
      type: "certification",
      icon: "Award"
    },
    {
      title: "Certified Diabetes Educator",
      organization: "HOPE",
      year: "2010",
      type: "certification",
      icon: "Award"
    },
  ],
  expertise: [
    "Weight Management",
    "Diabetes Management",
    "Clinical Nutrition",
    "Therapeutic Diets",
    "Cancer Nutrition",
    "Pediatric Nutrition",
    "Sports Nutrition",
  ],
  affiliations: [
    {
      name: "Indian Dietetics Association",
      role: "Lifetime Member",
      since: "2010"
    }
  ],
  clinicalExperience: "20 years of clinical experience in hospital and private practice settings",
  patientsCounted: "5000+"
};

function getIconComponent(iconName) {
  const icons = {
    'Award': Award,
    'Bookmark': Bookmark,
    'BookOpen': BookOpen,
    'Briefcase': Briefcase,
    'Users': Users,
    'FileText': FileText
  };
  
  const IconComponent = icons[iconName] || Award;
  return <IconComponent className="h-5 w-5" />;
}

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
    <article className="mt-16 mb-12 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      <div className="bg-gradient-to-r from-teal-700 to-blue-700 px-6 py-4">
        <h2 className="text-2xl font-bold text-white text-center">
          Written by Medical Professional
        </h2>
      </div>
      
      <div className="bg-white dark:bg-gray-900 p-4 sm:p-8">
        <div className="block md:flex md:items-start md:gap-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="relative rounded-full p-1 bg-gradient-to-r from-teal-400 to-blue-500">
              <div className="rounded-full overflow-hidden bg-white">
                <Image
                  src={AUTHOR_INFO.image}
                  alt={`Dr. ${AUTHOR_INFO.name}, ${AUTHOR_INFO.jobTitle}`}
                  title={`${AUTHOR_INFO.name} - ${AUTHOR_INFO.jobTitle}`}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover"
                  width={192}
                  height={192}
                />
              </div>
            </div>
            
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-1 rounded-full flex items-center text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Verified Medical Professional
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {AUTHOR_INFO.name}
            </h3>
            
            <div className="mt-1 mb-4">
              <p className="inline-block text-teal-800 dark:text-teal-300 font-semibold px-3 py-1 bg-teal-100 dark:bg-teal-900/50 rounded-md text-sm">
                {AUTHOR_INFO.jobTitle}
              </p>
            </div>
            
            <div className="mt-2 mb-4">
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {AUTHOR_INFO.degrees.map((degree, idx) => (
                  <span key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md">
                    <BookOpen className="h-4 w-4 mr-1 text-teal-600 dark:text-teal-400" />
                    {degree}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-4">
              {AUTHOR_INFO.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg text-center">
                <p className="text-blue-900 dark:text-blue-100 text-sm font-medium">Clinical Experience</p>
                <p className="text-blue-900 dark:text-blue-100 text-xl font-bold mt-1">{AUTHOR_INFO.clinicalExperience.split(' ')[0]}</p>
                <p className="text-blue-800 dark:text-blue-200 text-xs">Years in Practice</p>
              </div>
              <div className="bg-teal-100 dark:bg-teal-900/50 p-4 rounded-lg text-center">
                <p className="text-teal-900 dark:text-teal-100 text-sm font-medium">Patients Helped</p>
                <p className="text-teal-900 dark:text-teal-100 text-xl font-bold mt-1">{AUTHOR_INFO.patientsCounted}</p>
                <p className="text-teal-800 dark:text-teal-200 text-xs">Patient Cases</p>
              </div>
            </div>

            <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
                  Medical Credentials & Specializations
                </h4>
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Certifications & Memberships</h5>
                <ul className="space-y-3">
                  {AUTHOR_INFO.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5 text-teal-600 dark:text-teal-400 mr-2">
                        {getIconComponent(cert.icon)}
                      </div>
                      <div>
                        <p className="text-gray-800 dark:text-gray-300 font-medium">
                          {cert.title}
                        </p>
                        {cert.organization && cert.year && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {cert.organization}, {cert.year}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Areas of Clinical Expertise
                </h5>
                <div className="flex flex-wrap gap-2">
                  {AUTHOR_INFO.expertise.map((area, idx) => (
                    <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/about-sanjana-m-shenoy"
                className="inline-flex items-center justify-center px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-colors"
              >
                Full Professional Profile
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 border-2 border-teal-700 text-teal-700 hover:bg-teal-50 dark:text-teal-300 dark:border-teal-300 dark:hover:bg-teal-900/50 rounded-md transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 