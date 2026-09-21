'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BlogImage({ src, alt, title, ...props }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  // Set default alt and title if not provided
  const imageAlt = alt || 'Blog post image';
  const imageTitle = title || imageAlt;

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={imageAlt}
        title={imageTitle}
        {...props}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
        className={`${props.className || ''} 
 ${isLoading ? 'blur-sm' : 'blur-0'}
 transition-all duration-300`}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
} 