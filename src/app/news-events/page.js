'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs'
import Script from 'next/script';
import { getEventData } from '@/utils/eventData';

const FILTERS = [
  { id: 'all', label: 'All Events' },
  { id: 'health', label: 'Health' },
  { id: 'community', label: 'Community' },
  { id: 'education', label: 'Education' },
  { id: 'corporate', label: 'Corporate' },
];

export default function NewsEvents() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const closeButtonRef = useRef(null);
  const lastFocusRef = useRef(null);

  const galleryImages = useMemo(() => getEventData(), []);

  const filteredImages = useMemo(() => {
    return filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);
  }, [filter, galleryImages]);

  const openModal = (image, index) => {
    lastFocusRef.current = document.activeElement;
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    if (lastFocusRef.current instanceof HTMLElement) {
      lastFocusRef.current.focus();
    }
  }, []);

  const navigateImage = useCallback((direction) => {
    if (!filteredImages.length) return;

    setCurrentImageIndex((idx) => {
      const newIndex = direction === 'next'
        ? (idx + 1) % filteredImages.length
        : (idx - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[newIndex]);
      return newIndex;
    });
  }, [filteredImages]);

  useEffect(() => {
    if (!selectedImage) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowRight') navigateImage('next');
      if (event.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage, closeModal, navigateImage]);

  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": galleryImages.map((event, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Event",
          "name": event.title,
          "description": event.description,
          "image": `https://sanjanashenoy.in${event.src}`,
          "startDate": event.date,
          "endDate": event.endDate,
          "location": {
            "@type": "Place",
            "name": event.location.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": event.location.addressLocality,
              "addressRegion": event.location.addressRegion,
              "addressCountry": event.location.addressCountry
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/SoldOut",
            "validFrom": event.date
          },
          "performer": {
            "@type": "Person",
            "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy",
            "name": "Sanjana M Shenoy"
          },
          "organizer": {
            "@type": "Person",
            "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy"
          },
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled"
        }
      }))
    },
    "headline": "Sanjana M. Shenoy: Mangalore's Leading Dietitian and Nutritionist",
    "description": "Browse through a collection of Diet & nutrition workshops and health education programs where Sanjana M Shenoy shares evidence-based dietary guidance and practical wellness strategies.",
    "author": {
      "@type": "Person",
      "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy"
    },
    "publisher": {
      "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Script id="event-schema" type="application/ld+json">
        {JSON.stringify(eventsSchema)}
      </Script>

      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 pt-20">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Home' },
              { href: '/news-events', label: 'News & Events' },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
              {"Sanjana M. Shenoy: Mangalore's Leading Dietitian and Nutritionist"}
            </h1>
            <p className="mt-6 text-xl leading-8 text-stone-700">
              {"Sanjana M. Shenoy, Consultant Dietitian from Mangalore, has conducted various workshops and health education programs. Here you'll find a collection of events where she've shared evidence-based dietary guidance and practical wellness strategies. Browse through these programs to see how she've been transforming community health through proper Diet, nutrition and lifestyle education."}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16">
          <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="font-display text-3xl font-medium text-gray-900">
              Community Health Initiatives
            </h2>
            <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Event categories">
              {FILTERS.map((item) => {
                const isActive = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFilter(item.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-teal-800 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="gallery-items"
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </section>

          <div id="gallery-items" className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
            {filteredImages.length === 0 ? (
              <p className="text-stone-700 sm:col-span-2 lg:col-span-3">
                No events in this category.
              </p>
            ) : (
              filteredImages.map((image, index) => (
                <article key={image.id}>
                  <button
                    type="button"
                    onClick={() => openModal(image, index)}
                    className="group block w-full text-left"
                    aria-label={`Open ${image.title}`}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 bg-teal-800 px-2 py-1 text-xs capitalize text-white">
                        {image.category}
                      </span>
                    </div>
                    <time className="mt-5 block text-sm text-stone-600" dateTime={image.date}>
                      {image.date}
                    </time>
                    <h3 className="mt-2 text-xl font-medium text-gray-900 group-hover:text-teal-800">
                      {image.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-stone-600">{image.description}</p>
                  </button>
                </article>
              ))
            )}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative flex h-[90vh] w-full max-w-5xl flex-col" onClick={(e) => e.stopPropagation()}>
              <button
                ref={closeButtonRef}
                type="button"
                className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 text-gray-900 hover:bg-stone-100"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                type="button"
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-gray-900 hover:bg-stone-100"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-gray-900 hover:bg-stone-100"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="relative flex-grow">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority={true}
                />
              </div>

              <div className="bg-white px-6 py-5">
                <p className="text-xs font-medium capitalize text-teal-800">{selectedImage.category}</p>
                <h3 id="modal-title" className="mt-2 font-display text-2xl font-medium text-gray-900">
                  {selectedImage.title}
                </h3>
                <time className="mt-1 block text-sm text-stone-600" dateTime={selectedImage.date}>
                  {selectedImage.date}
                </time>
                <p className="mt-3 text-stone-700">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
