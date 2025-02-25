export default function References({ references }) {
  if (!references || references.length === 0) return null
  
  return (
    <div className="mt-16">
      <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-8">
        <h2 
          id="references" 
          className="text-2xl font-serif font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-3"
        >
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          References
        </h2>
        <ol className="list-none pl-0 space-y-4">
          {references.map((ref, index) => {
            // Format the citation text
            const citationText = `${ref.authors}. (${ref.year}). ${ref.title}. ${ref.journal}`;
            
            return (
              <li 
                key={index}
                className="flex gap-4 text-gray-600 dark:text-gray-300 leading-relaxed group hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 p-2 -ml-2"
              >
                <span className="font-mono text-sm min-w-[2rem] pt-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200">
                  [{index + 1}]
                </span>
                {ref.url ? (
                  <a 
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline"
                  >
                    {citationText}
                  </a>
                ) : (
                  <span className="font-light">{citationText}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  )
} 