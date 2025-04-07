'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs'
import Script from 'next/script';
import { getEventData } from '@/utils/eventData';

// Note: This metadata won't be used in client components
// It's defined in layout.js for this section, but added here as documentation
/*
export const metadata = {
  title: 'News & Events | Sanjana M Shenoy - Dietitian and Nutritionist',
  description: 'Explore nutrition workshops, health education programs, and community events led by Sanjana M Shenoy, a leading dietitian in Mangalore.',
  canonical: 'https://sanjanashenoy.in/news-events',
  alternates: {
    canonical: 'https://sanjanashenoy.in/news-events'
  }
}
*/

export default function NewsEvents() {
  // State to manage which image is selected and if modal is open
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Get event data from shared utility
  const galleryImages = getEventData();
  
  // Simulating loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Function to open modal with selected image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };
  
  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigation for modal gallery
  const navigateImage = (direction) => {
    const filteredImages = filter === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === filter);
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Filtered images based on category
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Create JSON-LD schema for the events collection
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
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      {/* Add schema markup */}
      <Script id="event-schema" type="application/ld+json">
        {JSON.stringify(eventsSchema)}
      </Script>
      
      <Header />
      <main className="flex-grow">
        {/* Hero Banner - Updated to match consultations page style */}
        <div className="bg-white dark:bg-gray-900">
          <div className="container mx-auto px-2 lg:px-4 pt-20">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Home' },
                { href: '/news-events', label: 'News & Events' },
              ]}
            />
            <div className="text-base/7 text-gray-700 dark:text-gray-300">
              <p className="text-base/7 font-semibold text-indigo-600 dark:text-teal-400">News & Events</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
              Sanjana M. Shenoy: Mangalore's Leading Dietitian and Nutritionist
              </h1>
              <p className="mt-6 text-xl/8">
               Sanjana M. Shenoy, Consultant Dietitian from Mangalore, has conducted various workshops and health education programs. Here you'll find a collection of events where she've shared evidence-based 
                dietary guidance and practical wellness strategies. Browse through these programs to see how 
                she've been transforming community health through proper Diet, nutrition and lifestyle education.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Latest News Section */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Latest Updates</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md dark:from-blue-900/20 dark:to-purple-900/20 dark:shadow-gray-800/30">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 relative h-72">
                  <Image 
                    src="/images/events/lions_club.webp"
                    alt="Latest event"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                    Featured Event
                  </span>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">Upcoming Health Awareness Workshop</h3>
                  <p className="text-gray-500 mb-2 dark:text-gray-300">October 15, 2023</p>
                  <p className="mb-4 dark:text-gray-200">
                    Join us for a comprehensive health awareness workshop where Sanjana M. Shenoy will
                    discuss crucial aspects of preventive healthcare and wellness strategies. This
                    interactive session aims to empower participants with practical knowledge for better health.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </section> */}
          
          {/* Category Filters */}
          <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-3xl font-bold mb-6 text-center dark:text-white">Community Health Initiatives</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist" aria-label="Event categories">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white dark:bg-blue-700' 
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={filter === 'all'}
                aria-controls="gallery-items"
              >
                All Events
              </button>
              <button 
                onClick={() => setFilter('health')}
                className={`px-4 py-2 rounded-full ${
                  filter === 'health' 
                    ? 'bg-blue-600 text-white dark:bg-blue-700' 
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={filter === 'health'}
                aria-controls="gallery-items"
              >
                Health
              </button>
              <button 
                onClick={() => setFilter('community')}
                className={`px-4 py-2 rounded-full ${
                  filter === 'community' 
                    ? 'bg-blue-600 text-white dark:bg-blue-700' 
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={filter === 'community'}
                aria-controls="gallery-items"
              >
                Community
              </button>
              <button 
                onClick={() => setFilter('education')}
                className={`px-4 py-2 rounded-full ${
                  filter === 'education' 
                    ? 'bg-blue-600 text-white dark:bg-blue-700' 
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={filter === 'education'}
                aria-controls="gallery-items"
              >
                Education
              </button>
              <button 
                onClick={() => setFilter('corporate')}
                className={`px-4 py-2 rounded-full ${
                  filter === 'corporate' 
                    ? 'bg-blue-600 text-white dark:bg-blue-700' 
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={filter === 'corporate'}
                aria-controls="gallery-items"
              >
                Corporate
              </button>
            </div>
          </section>
          
          {/* Gallery Grid with Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64" aria-live="polite" aria-busy="true">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 dark:border-blue-500" aria-label="Loading content"></div>
            </div>
          ) : (
            <div id="gallery-items" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel">
              {filteredImages.map((image, index) => (
                <article 
                  key={image.id} 
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700 dark:shadow-gray-900/30"
                  onClick={() => openModal(image, index)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full dark:bg-blue-700">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <time className="text-sm text-gray-500 mb-2 dark:text-gray-400" dateTime={image.date}>{image.date}</time>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">{image.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 dark:text-gray-300">{image.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          
          {/* Newsletter Signup */}
          {/* <section className="mt-20 bg-gray-50 rounded-xl p-8 text-center dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Stay Updated</h2>
            <p className="mb-6 max-w-2xl mx-auto dark:text-gray-300">
              Subscribe to our newsletter to receive updates about upcoming events, 
              health tips, and exclusive content from Sanjana M. Shenoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </section> */}
        </div>
        
        {/* Enhanced Modal with Navigation */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" 
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative max-w-5xl w-full h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 z-10 hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation buttons */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 z-10 hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
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
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 z-10 hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
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
              
              {/* Image container */}
              <div className="flex-grow relative">
                <Image 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority={true}
                />
              </div>
              
              {/* Image details */}
              <div className="bg-white p-6 rounded-b-xl dark:bg-gray-800">
                <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs mb-2 dark:bg-blue-700">
                  {selectedImage.category}
                </span>
                <h3 id="modal-title" className="text-2xl font-bold mb-1 dark:text-white">{selectedImage.title}</h3>
                <time className="text-gray-500 mb-3 dark:text-gray-400" dateTime={selectedImage.date}>{selectedImage.date}</time>
                <p className="text-gray-700 dark:text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
