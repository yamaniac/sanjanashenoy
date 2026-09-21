"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Award, BookOpen, Users } from 'lucide-react'

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
    Award,
    BookOpen,
    Users
  };

  const IconComponent = icons[iconName] || Award;
  return <IconComponent className="h-5 w-5" aria-hidden="true" />;
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
    <article className="mt-16 mb-12 border-t border-stone-200" itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <h2 className="pt-10 font-display text-2xl font-medium text-gray-900">
        Written by Medical Professional
      </h2>

      <div className="pt-8">
        <div className="block md:flex md:items-start md:gap-10">
          <div className="mb-8 flex flex-col items-center md:mb-0 md:items-start">
            <Image
              src={AUTHOR_INFO.image}
              alt={`Dr. ${AUTHOR_INFO.name}, ${AUTHOR_INFO.jobTitle}`}
              title={`${AUTHOR_INFO.name} - ${AUTHOR_INFO.jobTitle}`}
              className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
              width={192}
              height={192}
            />

            <p className="mt-4 flex items-center text-sm font-medium text-teal-800">
              <Award className="mr-2 h-4 w-4" aria-hidden="true" />
              Verified Medical Professional
            </p>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl font-medium text-gray-900">
              {AUTHOR_INFO.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-teal-800">
              {AUTHOR_INFO.jobTitle}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start">
              {AUTHOR_INFO.degrees.map((degree, idx) => (
                <span key={idx} className="flex items-center text-sm text-stone-700">
                  <BookOpen className="mr-1 h-4 w-4 text-teal-700" aria-hidden="true" />
                  {degree}
                </span>
              ))}
            </div>

            <p className="mt-5 max-w-prose text-stone-700">
              {AUTHOR_INFO.bio}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <dt className="text-sm font-medium text-stone-600">Clinical Experience</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-gray-900">
                  {AUTHOR_INFO.clinicalExperience.split(' ')[0]}
                </dd>
                <p className="mt-0.5 text-xs text-stone-600">Years in Practice</p>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-600">Patients Helped</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-gray-900">
                  {AUTHOR_INFO.patientsCounted}
                </dd>
                <p className="mt-0.5 text-xs text-stone-600">Patient Cases</p>
              </div>
            </dl>

            <div className="mt-10">
              <h4 className="flex items-center justify-center font-medium text-gray-900 md:justify-start">
                <Award className="mr-2 h-5 w-5 text-teal-700" aria-hidden="true" />
                Medical Credentials & Specializations
              </h4>

              <h5 className="mt-6 font-medium text-gray-900">Certifications & Memberships</h5>
              <ul className="mt-3 space-y-4">
                {AUTHOR_INFO.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start justify-center md:justify-start">
                    <div className="mr-2 mt-0.5 shrink-0 text-teal-700">
                      {getIconComponent(cert.icon)}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">
                        {cert.title}
                      </p>
                      {cert.organization && cert.year && (
                        <p className="text-sm text-stone-600">
                          {cert.organization}, {cert.year}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <h5 className="mt-8 font-medium text-gray-900">
                Areas of Clinical Expertise
              </h5>
              <p className="mt-3 text-sm text-stone-700">
                {AUTHOR_INFO.expertise.join(' · ')}
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="/about-sanjana-m-shenoy"
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-600"
              >
                Full Professional Profile
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-teal-800 underline decoration-teal-800/30 underline-offset-4 hover:decoration-teal-800"
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
