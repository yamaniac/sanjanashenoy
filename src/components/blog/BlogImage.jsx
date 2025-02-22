'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BlogImage({ src, alt, ...props }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onError={() => setError(true)}
    />
  );
} 