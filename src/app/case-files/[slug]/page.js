import Link from "next/link";
import { format } from "date-fns";
import Header from "@/components/Header";
import { getCaseFileBySlug, getAllCaseFiles } from "@/lib/case-files";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Script from "next/script";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorSection from "@/components/blog/AuthorSection";
import MedicalDisclaimer from "@/components/blog/MedicalDisclaimer";
// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const caseFile = await getCaseFileBySlug(params.slug);

  return {
    title: `${caseFile.title} - Medical Case Study, Sanjana M Shenoy`,
    description:
      caseFile.description ||
      `Medical case study about ${caseFile.title} - Patient age: ${caseFile.age}, Gender: ${caseFile.gender}`,
    keywords: [caseFile.category, ...caseFile.symptoms],
    openGraph: {
      title: `${caseFile.title} - Medical Case Study`,
      description: caseFile.description,
      type: "article",
      publishedTime: caseFile.date,
      authors: [caseFile.author],
      tags: ["medical case study", caseFile.category, ...caseFile.symptoms],
    },
  };
}

// This tells Next.js to pre-render all case files at build time
export async function generateStaticParams() {
  const caseFiles = await getAllCaseFiles();
  return caseFiles.map((caseFile) => ({
    slug: caseFile.slug,
  }));
}

export default async function CaseFile({ params }) {
  const caseFile = await getCaseFileBySlug(params.slug);

  const { content } = await compileMDX({
    source: caseFile.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        format: "mdx",
      },
    },
  });

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: caseFile.title,
    datePublished: caseFile.date,
    author: {
      "@type": "Person",
      name: caseFile.author,
    },
    description: caseFile.description,
    keywords: [caseFile.category, ...caseFile.symptoms],
    articleBody: caseFile.content,
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/case-files", label: "Case Files" },
              { href: `/case-files/${params.slug}`, label: caseFile.title },
            ]}
          />

          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {caseFile.title}
            </h1>
            {caseFile.description && (
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {caseFile.description}
              </p>
            )}
          </div>

          {/* Profile Card Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-800 dark:to-cyan-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Case File #{caseFile.id}
                      </p>
                      <time
                        dateTime={caseFile.date}
                        className="text-teal-100 text-xs"
                      >
                        {format(new Date(caseFile.date), "MMMM d, yyyy")}
                      </time>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                    role="tag"
                  >
                    {caseFile.category}
                  </span>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6" aria-label="Case Details">
                {/* Top Grid for Patient Details, Symptoms, and Risk Factors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Patient Details */}
                  <section
                    className="space-y-2"
                    aria-labelledby="patient-details-heading"
                  >
                    <h2
                      id="patient-details-heading"
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Patient Details
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <dl className="space-y-2">
                        <div>
                          <dt className="text-xs text-gray-500 dark:text-gray-400">
                            Age
                          </dt>
                          <dd className="text-sm font-medium text-gray-900 dark:text-white">
                            {caseFile.age}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-500 dark:text-gray-400">
                            Gender
                          </dt>
                          <dd className="text-sm font-medium text-gray-900 dark:text-white">
                            {caseFile.gender}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-gray-500 dark:text-gray-400">
                            Duration
                          </dt>
                          <dd className="text-sm font-medium text-gray-900 dark:text-white">
                            {caseFile.duration}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </section>

                  {/* Key Symptoms */}
                  <section
                    className="space-y-2"
                    aria-labelledby="symptoms-heading"
                  >
                    <h2
                      id="symptoms-heading"
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Key Symptoms
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      {caseFile.symptoms && (
                        <div>
                          <dd className="text-sm text-gray-900 dark:text-white">
                            <ul
                              className="list-disc list-inside space-y-1"
                              role="list"
                            >
                              {caseFile.symptoms.map((symptom, index) => (
                                <li key={index} className="text-sm">
                                  {symptom}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Risk Factors */}
                  <section
                    className="space-y-2"
                    aria-labelledby="risk-factors-heading"
                  >
                    <h2
                      id="risk-factors-heading"
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Risk Factors
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      {caseFile.risk_factors && (
                        <div>
                          <dd className="text-sm text-gray-900 dark:text-white">
                            <ul
                              className="list-disc list-inside space-y-1"
                              role="list"
                            >
                              {caseFile.risk_factors.map((factor, index) => (
                                <li key={index} className="text-sm">
                                  {factor}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      )}
                    </div>
                  </section>
                </div>

                {/* Treatment & Outcome - Full Width */}
                <section
                  className="space-y-2"
                  aria-labelledby="treatment-outcome-heading"
                >
                  <h2
                    id="treatment-outcome-heading"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Treatment & Outcome
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseFile.treatment_approach && (
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <dt className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          Treatment Approach
                        </dt>
                        <dd className="text-sm text-gray-900 dark:text-white">
                          {caseFile.treatment_approach}
                        </dd>
                      </div>
                    )}
                    {caseFile.outcome && (
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <dt className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          Outcome
                        </dt>
                        <dd className="text-sm text-gray-900 dark:text-white">
                          {caseFile.outcome}
                        </dd>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
              {/* Main Article Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose dark:prose-invert prose-lg max-w-none
                              prose-headings:text-teal-900 dark:prose-headings:text-teal-100
                              prose-h2:text-2xl prose-h2:font-semibold
                              prose-p:text-gray-700 dark:prose-p:text-gray-300
                              prose-a:text-teal-600 dark:prose-a:text-teal-400
                              prose-strong:text-teal-700 dark:prose-strong:text-teal-300
                              prose-ul:list-none prose-ul:pl-0
                              prose-li:mb-4 prose-li:pl-6 prose-li:relative
                              prose-table:w-full
                              prose-table:my-8
                              prose-th:bg-gray-100 dark:prose-th:bg-gray-800
                              prose-th:p-3 prose-td:p-3
                              prose-th:text-left prose-td:text-left
                              prose-th:border prose-td:border
                              prose-th:border-gray-300 prose-td:border-gray-300
                              dark:prose-th:border-gray-700 dark:prose-td:border-gray-700
                              before:prose-li:content-['•'] before:prose-li:text-teal-500
                              before:prose-li:absolute before:prose-li:left-0
                              before:prose-li:top-0"
                >
                  {content}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Key Learnings Card */}
                  {caseFile.key_learnings && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Key Learnings
                      </h3>
                      <ul className="space-y-2">
                        {caseFile.key_learnings.map((learning, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <span className="text-teal-500 mt-1">•</span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {learning}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <MedicalDisclaimer />
          {/* Author Section */}
          <AuthorSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
