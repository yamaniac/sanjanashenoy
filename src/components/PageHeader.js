import React from 'react';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-teal-600 mx-auto mt-6"></div>
    </div>
  );
} 