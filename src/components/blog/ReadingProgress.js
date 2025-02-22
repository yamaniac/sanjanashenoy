'use client'
import { useState, useEffect } from 'react'

const ReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    }
    
    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-[100]">
      <div 
        className="h-full bg-teal-600 dark:bg-teal-400 transition-all duration-100"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}

export default ReadingProgress; 