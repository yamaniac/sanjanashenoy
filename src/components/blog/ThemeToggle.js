'use client'

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Handle initial theme setup once the component mounts
  useEffect(() => {
    setMounted(true);
    // Check system preference and stored preference on mount
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Render nothing until client-side hydration completes
  if (!mounted) return null;

  return (
    <>
      <Script id="theme-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "accessibilityControl": "FullKeyboardControl",
            "accessibilityFeature": [
              "highContrastDisplay",
              "readingOrder",
              "structuralNavigation"
            ],
            "accessMode": ["textual", "visual"],
            "accessModeSufficient": ["textual"]
          }
        `}
      </Script>
      
      <button 
        id="theme-toggle"
        type="button"
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        aria-pressed={theme === 'dark'}
        onClick={toggleTheme}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
          }
        }}
      >
        <span className="sr-only">
          {theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
        </span>
        
        {/* Sun icon (for dark mode) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 hidden dark:block" 
          viewBox="0 0 20 20" 
          fill="currentColor"
          aria-hidden="true"
          role="presentation"
        >
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
        
        {/* Moon icon (for light mode) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 block dark:hidden" 
          viewBox="0 0 20 20" 
          fill="currentColor"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </>
  );
} 