"use client";

import { useState, useEffect } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');
  const [tocSchema, setTocSchema] = useState(null);

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

  useEffect(() => {
    // Handle initial URL fragment
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveId(hash);
      }
    }
  }, []);

  useEffect(() => {
    // Generate schema markup after component mounts
    setTocSchema({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": headings.map((heading, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": heading.text,
        "url": `${window.location.href}#${heading.id}`
      }))
    });
  }, [headings]);

  // Add keyboard navigation support
  const handleKeyPress = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trackTocClick = (headingId) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'toc_click', {
        'event_category': 'Table of Contents',
        'event_label': headingId
      });
    }
  };

  if (headings.length === 0) return null;
  
  return (
    <>
      {tocSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tocSchema) }}
        />
      )}
      <nav 
        aria-label="Table of contents"
        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <h2 
          id="toc-heading"
          className="text-xl font-semibold mb-6 text-gray-900 dark:text-white"
          itemProp="name"
        >
          Table of Contents
        </h2>
        <ul 
          aria-labelledby="toc-heading"
          className="space-y-3"
        >
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
                aria-current={activeId === heading.id ? 'location' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  trackTocClick(heading.id);
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onKeyPress={(e) => handleKeyPress(e, heading.id)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default TableOfContents; 