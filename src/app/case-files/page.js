import Link from 'next/link';
import { format } from 'date-fns';
import Header from '@/components/Header';
import { getAllCaseFiles } from '@/lib/case-files';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata() {
  return {
    title: 'Medical Case Files - Sanjana M Shenoy',
    description: 'Explore medical case studies and patient outcomes by Sanjana M Shenoy, experienced dietitian and nutritionist',
    keywords: 'medical case studies, patient outcomes, clinical nutrition, dietitian cases, nutrition therapy',
    canonical: 'https://sanjanashenoy.in/case-files',
    alternates: {
      canonical: 'https://sanjanashenoy.in/case-files'
    }
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

function CaseFileCard({ caseFile }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/case-files/${caseFile.slug}`} className="block">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {caseFile.title}
            </h2>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
              {caseFile.category}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span className="text-gray-500">Age: </span>
              <span className="text-gray-800">{caseFile.age}</span>
            </div>
            <div>
              <span className="text-gray-500">Gender: </span>
              <span className="text-gray-800">{caseFile.gender}</span>
            </div>
            <div>
              <span className="text-gray-500">Duration: </span>
              <span className="text-gray-800">{caseFile.duration}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {caseFile.description}
          </p>

          <div className="flex items-center justify-between text-sm">
            <time dateTime={caseFile.date} className="text-gray-500">
              {format(new Date(caseFile.date), 'MMMM d, yyyy')}
            </time>
            
            {caseFile.symptoms && caseFile.symptoms.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {caseFile.symptoms.slice(0, 2).map((symptom) => (
                  <span
                    key={symptom}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    {symptom}
                  </span>
                ))}
                {caseFile.symptoms.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    +{caseFile.symptoms.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
            <div className="flex justify-between mt-4">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="flex gap-2">
                <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function CaseFilesIndex() {
  const caseFiles = await getAllCaseFiles();

  // Sort case files by date in descending order
  caseFiles.sort((a, b) => {
    try {
      if (!a.date || !b.date) return 0;
      return new Date(b.date) - new Date(a.date);
    } catch (error) {
      console.error('Error sorting dates:', error);
      return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/case-files', label: 'Case Files' },
          ]}
        />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Medical Case Files
          </h1>
          <p className="text-xl text-gray-600">
            Explore real patient cases and clinical outcomes in nutrition therapy
          </p>
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {caseFiles.map((caseFile) => (
              <CaseFileCard key={caseFile.id} caseFile={caseFile} />
            ))}
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
} 