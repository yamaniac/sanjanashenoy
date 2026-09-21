'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getEventData } from '@/utils/eventData';

export default function LatestNews() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const events = getEventData();
    setGalleryImages(events.slice(0, 3));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-700 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-medium text-gray-900 md:text-4xl">Latest Workshops & Seminars</h2>
          <p className="mt-4 max-w-3xl text-xl text-stone-700">
            Latest workshops, on diet, nutrition, health education programs, and community events
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((event) => (
            <article 
              key={event.id} 
              className="overflow-hidden"
            >
              <div className="relative h-52 w-full">
                <Image 
                  src={event.src}
                  alt={event.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-teal-800 px-2 py-1 text-xs text-white">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="pt-5">
                <time className="text-sm text-stone-600">{event.date}</time>
                <h3 className="mt-2 text-xl font-medium text-gray-900">{event.title}</h3>
                <p className="mt-3 line-clamp-2 text-stone-600">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/news-events" 
            className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-base font-medium text-white hover:bg-teal-600"
          >
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
