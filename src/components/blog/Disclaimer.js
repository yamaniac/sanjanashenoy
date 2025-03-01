import Link from 'next/link'

export default function Disclaimer() {
  return (
    <aside aria-label="Article authenticity disclaimer" className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Article Authenticity</h2>
      <div className="text-gray-700 dark:text-gray-300">
        <p>
          This article was written entirely by a human expert{' '}
          <Link 
            href="/about-sanjana-m-shenoy" 
            className="text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-500"
            title="About Sanjana M Shenoy"
          >
            Sanjana M Shenoy
          </Link>
          {' '}and has undergone thorough review to ensure accuracy. 
          No AI language models were used in the creation of this content. All information is based on professional expertise, 
          scientific research, and clinical experience.
        </p>
      </div>
    </aside>
  )
} 