'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getEventData } from '@/utils/eventData';

// This component will display the latest 3 events from the news-events page
export default function LatestNews() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get data from shared utility
    const events = getEventData();
    
    // Take just the first 3 items
    setGalleryImages(events.slice(0, 3));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 dark:border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Latest Workshops & Seminars</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Latest workshops, on diet, nutrition, health education programs, and community events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((event) => (
            <article 
              key={event.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-52 w-full">
                <Image 
                  src={event.src}
                  alt={event.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full dark:bg-blue-700">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 dark:text-gray-400">{event.date}</time>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/news-events" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 transition duration-300"
          >
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 