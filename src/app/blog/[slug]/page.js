'use client'

import { format } from 'date-fns'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import { useEffect, useState, use } from 'react'
import Script from 'next/script'
import ReadingProgress from '@/components/blog/ReadingProgress'
import ScrollToTop from '@/components/blog/ScrollToTop'
import ShareButton from '@/components/blog/ShareButton'
import TableOfContents from '@/components/blog/TableOfContents'
import AuthorCard from '@/components/blog/AuthorCard'
import BlogImage from '@/components/blog/BlogImage'

// Dynamically import components that aren't needed immediately
const ReadingProgressDynamic = dynamic(() => import('@/components/blog/ReadingProgress'), {
  ssr: false
})
const ScrollToTopDynamic = dynamic(() => import('@/components/blog/ScrollToTop'), {
  ssr: false
})
const ShareButtonDynamic = dynamic(() => import('@/components/blog/ShareButton'), {
  ssr: false
})
const TableOfContentsDynamic = dynamic(() => import('@/components/blog/TableOfContents'))
const AuthorCardDynamic = dynamic(() => import('@/components/blog/AuthorCard'))
const BlogImageDynamic = dynamic(() => import('@/components/blog/BlogImage'))

// Add route segment config
export const runtime = 'edge'
export const preferredRegion = 'auto'

// Convert BlogPost to client component and add reading time calculation
export default function BlogPost({ params }) {
  const unwrappedParams = use(params);
  const [post, setPost] = useState(null);
  const [readingTime, setReadingTime] = useState(0);
  
  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/api/posts/${unwrappedParams.slug}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        const data = await response.json();
        setPost(data);
        
        // Calculate reading time when post is loaded
        const wordsPerMinute = 200;
        const wordCount = data.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length;
        setReadingTime(Math.ceil(wordCount / wordsPerMinute));
      } catch (error) {
        // Handle error silently or show user-friendly message
      }
    }
    loadPost();
  }, [unwrappedParams.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="pt-20 text-center">
          Loading...
        </div>
      </div>
    );
  }

  // Extract headings from the HTML content
  const getHeadings = (content) => {
    const regex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/g;
    const headings = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      headings.push({
        level: Number(match[1]),
        text: match[2].replace(/<[^>]*>/g, ''),
        id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-')
      });
    }
    
    return headings;
  };

  const headings = getHeadings(post.contentHtml);

  // Modify the HTML content to add IDs to headings
  const contentWithIds = post.contentHtml.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/g,
    (match, level, attrs, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    }
  );

  // Create the structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sanjanashenoy.com/blog/${unwrappedParams.slug}`
    },
    "headline": post.title,
    "description": post.description || "",
    "image": post.image ? `https://sanjanashenoy.com${post.image}` : "",
    "author": {
      "@type": "Person",
      "name": post.author || ""
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Sanjana Shenoy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sanjanashenoy.com/logo.png"
      }
    },
    "keywords": post.tags?.join(", ") || "",
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://sanjanashenoy.com/blog",
      "name": "Sanjana Shenoy",
      "description": "Sanjana Shenoy - Dietitian and Nutritionists Blog posts"
    }
  }

  return (
    <>
      <ReadingProgressDynamic />
      <ScrollToTopDynamic />
      <ShareButtonDynamic 
        title={post.title} 
        url={`https://sanjanashenoy.com/blog/${unwrappedParams.slug}`}
      />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-6 py-8 max-w-[1600px] relative">
            <div className="flex gap-16">
              {/* Main content */}
              <div className="flex-1 max-w-[1100px]">
                {/* Back button */}
                <Link
                  href="/blog"
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-12 text-lg"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Blog
                </Link>

                {/* Featured Image */}
                {post.image && (
                  <div className="relative w-full h-[600px] mb-12 rounded-xl overflow-hidden shadow-lg">
                    <BlogImage
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1100px"
                      priority
                      quality={90}
                    />
                  </div>
                )}

                {/* Article header */}
                <header className="mb-12">
                  <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-base mb-6">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    {post.author && (
                      <>
                        <span className="mx-3">•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                    <span className="mx-3">•</span>
                    <span>{readingTime} min read</span>
                  </div>
                  {post.tags && (
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-base font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </header>

                {/* Article content */}
                <div 
                  className="prose dark:prose-invert prose-xl max-w-none prose-headings:text-gray-800 dark:prose-headings:text-white prose-img:rounded-xl prose-headings:font-bold prose-p:text-lg prose-p:leading-relaxed prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }} 
                />
              </div>

              {/* Table of Contents and Author Info Sidebar */}
              <div className="hidden lg:block w-80 sticky top-24 self-start space-y-8">
                <TableOfContents headings={headings} />
                <AuthorCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}