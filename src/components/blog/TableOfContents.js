"use client";

import { useState, useEffect } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;
  
  return (
    <nav className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Table of Contents
      </h2>
      <ul className="space-y-3">
        {headings.map((heading, index) => (
          <li 
            key={index}
            className={`${heading.level === 2 ? '' : 'pl-6'}`}
          >
            <a
              href={`#${heading.id}`}
              className={`
                text-base transition-colors duration-200
                ${activeId === heading.id 
                  ? 'text-teal-600 dark:text-teal-400 font-medium' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'}
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents; 