'use client'
import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Reduce the scroll threshold and add console.log for debugging
    let timeoutId;
    function toggleVisibility() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const shouldBeVisible = window.pageYOffset > 250; // Reduced from 300 to 100
        setIsVisible(shouldBeVisible);
      }, 100);
    }

    // Initial check
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      aria-label="Return to top of page"
      title="Return to top of page"
      tabIndex={0}
      role="button"
      className={`
        fixed bottom-8 right-8 
        bg-teal-600 dark:bg-teal-500 
        text-white 
        p-4 md:p-3
        rounded-full 
        shadow-lg 
        transition-all duration-200 
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        hover:bg-teal-700 dark:hover:bg-teal-600 
        focus:outline-none 
        focus:ring-4 
        focus:ring-teal-500 
        focus:ring-offset-2 
        focus:ring-offset-white
        dark:focus:ring-offset-gray-900
        z-50
        min-w-[44px]
        min-h-[44px]
        flex
        items-center
        justify-center
      `}
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}

export default ScrollToTop; 