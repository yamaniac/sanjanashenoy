'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BlogImage({ src, alt, title, ...props }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [validatedSrc, setValidatedSrc] = useState('/default-blog-image.jpg');

  useEffect(() => {
    // Validate image source
    if (!src || src === 'test' || typeof src !== 'string') {
      setError(true);
      return;
    }

    // Check if it's a valid URL or a valid path starting with /
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
      setValidatedSrc(src);
      setError(false);
    } else {
      // Attempt to fix relative paths by adding leading slash
      if (!src.startsWith('/')) {
        setValidatedSrc(`/${src}`);
      } else {
        setError(true);
      }
    }
  }, [src]);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Image not available</span>
      </div>
    );
  }

  // Set default alt and title if not provided
  const imageAlt = alt || 'Blog post image';
  const imageTitle = title || imageAlt;

  return (
    <div className="relative w-full h-full">
      <Image
        src={validatedSrc}
        alt={imageAlt}
        title={imageTitle}
        {...props}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
        className={`
          ${props.className || ''} 
          ${isLoading ? 'blur-sm' : 'blur-0'}
          transition-all duration-300
        `}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
    </div>
  );
} 