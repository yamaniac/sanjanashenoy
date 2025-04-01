'use client';

export default function References({ references }) {
  if (!references || references.length === 0) return null
  
  const copyCitation = (citationText) => {
    navigator.clipboard.writeText(citationText);
  };
  
  return (
    <div className="mt-16">
      <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-8">
        <h2 
          id="references" 
          className="text-2xl font-serif font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center gap-3"
        >
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          Research & References
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          A curated list of academic sources and references cited in this article. Click on any reference to view the source, or use the copy button to get the citation in your clipboard.
        </p>
        <ol className="list-none pl-0 space-y-6">
          {references.map((ref, index) => {
            const citationText = `${ref.authors}. (${ref.year}). ${ref.title}. ${ref.journal}`;
            
            return (
              <li 
                key={index}
                className="flex gap-4 text-gray-600 dark:text-gray-300 leading-relaxed group hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 p-3 -ml-2"
              >
                <span 
                  className="font-mono text-sm min-w-[2.5rem] pt-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 font-semibold"
                  aria-label={`Reference number ${index + 1}`}
                >
                  [{index + 1}]
                </span>
                <div className="flex-1">
                  {ref.url ? (
                    <a 
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-light hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline block"
                      aria-label={`View reference ${index + 1} (opens in new tab)`}
                    >
                      {citationText}
                    </a>
                  ) : (
                    <span className="font-light block">{citationText}</span>
                  )}
                </div>
                <button
                  onClick={() => copyCitation(citationText)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  aria-label={`Copy citation for reference ${index + 1}`}
                >
                  <svg 
                    className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" 
                    fill="none" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  )
} 