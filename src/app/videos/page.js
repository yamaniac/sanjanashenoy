import React from 'react';
import { getVideoData } from '@/utils/videoData';
import VideoCard from '@/components/VideoCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata = {
  title: 'Nutrition & Wellness Videos | Dietitian Sanjana M Shenoy',
  description: 'Watch expert nutrition, health, and wellness videos by Dietitian Sanjana M Shenoy. Educational content on healthy eating, weight management, and dietary tips.',
  keywords: 'nutrition videos, dietitian videos, health videos, wellness content, Sanjana Shenoy, YouTube nutrition, diet tips',
  openGraph: {
    title: 'Nutrition & Wellness Videos | Dietitian Sanjana M Shenoy',
    description: 'Expert nutrition and wellness videos by Dietitian Sanjana M Shenoy',
    url: 'https://sanjanashenoy.in/videos',
    type: 'website',
    images: [
      {
        url: 'https://sanjanashenoy.in/images/videos-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanjana Shenoy Nutrition Videos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutrition & Wellness Videos | Dietitian Sanjana M Shenoy',
    description: 'Expert nutrition and wellness videos by Dietitian Sanjana M Shenoy',
    images: ['https://sanjanashenoy.in/images/videos-twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://sanjanashenoy.in/videos',
  },
};

export default function VideosPage() {
  const videos = getVideoData();
  const longFormVideos = videos.filter(video => video.type === "long");
  const shortFormVideos = videos.filter(video => video.type === "short");
  
  // Structured data for VideoGallery
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videos.map((video, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": video.thumbnail,
        "uploadDate": video.date,
        "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`,
        "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`
      }
    }))
  };
  
  return (
    <>
      <Script id="video-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      
      <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Videos', href: '/videos' }
          ]} />
          
          <article>
            <header>
              <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">Nutrition & Wellness Videos</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Expert video content on nutrition, health, and wellness topics by Dietitian Sanjana M Shenoy.</p>
            </header>
            
            <div className="bg-pink-100 dark:bg-gray-700 rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Subscribe to My YouTube Channel</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Stay updated with my latest nutrition and wellness videos by subscribing to my channel. New content posted regularly!</p>
              <a 
                href="https://www.youtube.com/@dietsanjana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                aria-label="Subscribe to Sanjana Shenoy's YouTube channel"
              >
                Subscribe Now
              </a>
            </div>
          
            <section className="mb-12" aria-labelledby="long-form-content">
              <h2 id="long-form-content" className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Detailed Diet & Nutrition Videos</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Detailed Diet & Nutrition videos covering important topics in depth.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {longFormVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>
            
            <section className="mb-12" aria-labelledby="youtube-shorts">
              <h2 id="youtube-shorts" className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Quick Nutrition Tips & Wellness Videos</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">Quick nutrition tips and wellness advice in bite-sized videos.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {shortFormVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>
          </article>
        </div>
        
        <Footer />
      </main>
    </>
  );
} 