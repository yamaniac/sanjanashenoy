'use client'
import { useState, useEffect } from 'react'

const ShareButton = ({ title, url }) => {
  const [currentUrl, setCurrentUrl] = useState(url || '');

  useEffect(() => {
    // Update URL on the client side if not provided as prop
    if (!url && typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const shareOptions = [
    {
      name: 'X',
      ariaLabel: 'Share on X',
      title: 'Share on X',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title || '')}&url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Facebook',
      ariaLabel: 'Share on Facebook',
      title: 'Share on Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'LinkedIn',
      ariaLabel: 'Share on LinkedIn',
      title: 'Share on LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    }
  ];

  return (
    <div className="hidden md:block fixed left-8 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {shareOptions.map((option) => (
        <div key={option.name} className="relative group">
          <a
            href={option.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
            aria-label={option.ariaLabel}
          >
            <div className="w-5 h-5">
              {option.icon}
            </div>
          </a>
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 text-white text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
            {option.title}
            {/* Triangle pointer */}
            <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-0 h-0 border-4 border-transparent border-r-gray-800 dark:border-r-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShareButton; 