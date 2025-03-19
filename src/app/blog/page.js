import Link from 'next/link'
import { format } from 'date-fns'
import Header from '@/components/Header'
import BlogImage from '@/components/blog/BlogImage'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Suspense } from 'react'
import Footer from '@/components/Footer'
import { getBlogPosts } from '@/lib/posts'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateMetadata() {
  const canonicalUrl = 'https://sanjanashenoy.in/blog'
  return {
    title: 'Sanjana M Shenoy - Dietitian & Nutritionist | Blog',
    description: 'Explore the latest articles and insights from Sanjana M Shenoy, an expereinced dietitian and nutritionist',
    keywords:'dietitian, nutritionist, mangalore, health articles, nutrition blog, healthy eating',
    metadataBase: new URL('https://sanjanashenoy.in'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-IN': canonicalUrl,
        'en-US': canonicalUrl,
        'x-default': canonicalUrl
      },
    },
    openGraph: {
      title: 'Sanjana M Shenoy - Dietitian & Nutritionist | Blog',
      description: 'Explore the latest articles and insights from Sanjana M Shenoy, an expereinced dietitian and nutritionist',
      type: 'website',
      url: canonicalUrl,
      siteName: 'Sanjana M Shenoy - Dietitian & Nutritionist',
      images: [
        {
          url: 'https://sanjanashenoy.in/images/sanjana_shenoy.png',
          width: 800,
          height: 800,
          alt: 'Sanjana M Shenoy - Dietitian & Nutritionist'
        }
      ]
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    canonical: canonicalUrl
  }
}

export const revalidate = 3600; // Revalidate every hour

// Pre-render the first few pages
export async function generateStaticParams() {
  return [
    { searchParams: { page: '1' } },
    { searchParams: { page: '2' } },
    { searchParams: { page: '3' } },
    { searchParams: { page: '4' } },
    { searchParams: { page: '5' } },
  ]
}

function BlogCard({ post }) {
  if (!post) return null;
  
  const postTitle = post.title || 'Untitled Post';
  const postSlug = post.slug || '';
  const postDate = post.date ? new Date(post.date) : new Date();
  const postExcerpt = post.excerpt || 'No excerpt available';
  const postImage = post.image || '/default-blog-image.jpg';
  const postTags = Array.isArray(post.tags) ? post.tags : [];
  const postSource = post.source || 'unknown';
  
  console.log(`Rendering blog card for post: ${postTitle}, slug: ${postSlug}, source: ${postSource}`);
  
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${postSlug}`} className="block">
        <div className="relative w-full h-[200px]">
          <BlogImage
            src={postImage}
            alt={postTitle}
            title={postTitle}
            fill
            className="object-cover"
            priority={false}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
          />
          <div className="absolute top-0 right-0 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-bl-md">
            {postSource === 'database' ? 'DB' : postSource === 'markdown' ? 'MD' : '?'}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {postTitle}
          </h2>
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">
            <time dateTime={postDate.toISOString()}>
              {format(postDate, 'MMMM d, yyyy')}
            </time>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {postExcerpt}
          </p>
          {postTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {postTags.slice(0, 3).map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
              {postTags.length > 3 && (
                <span
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                >
                  +{postTags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}

function Pagination({ currentPage, totalPages }) {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
          key={pageNum}
          href={`/blog?page=${pageNum}`}
          className={`px-4 py-2 rounded ${
            pageNum === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {pageNum}
        </Link>
      ))}
    </div>
  )
}

export default async function BlogPage({ searchParams }) {
  let posts = []
  let pagination = {}
  let errorMessage = null

  try {
    // Properly handle searchParams in Next.js 15
    const resolvedParams = await Promise.resolve(searchParams)
    const pageNumber = resolvedParams?.page ? parseInt(resolvedParams.page) : 1
    
    const data = await getBlogPosts(pageNumber)
    posts = data.posts || []
    pagination = data.pagination
    
    // Add console log to check where posts are coming from
    console.log(`Fetched ${posts.length} posts${posts.length > 0 && posts[0].isMdFile ? ' from markdown files' : ' from database'}`)
    
    // Sort posts by date in descending order (latest first)
    posts.sort((a, b) => {
      try {
        if (!a.date || !b.date) return 0;
        
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        // Check if dates are valid
        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
          console.error('Invalid date found:', { a: a.date, b: b.date });
          return 0;
        }
        
        return dateB.getTime() - dateA.getTime();
      } catch (error) {
        console.error('Error sorting dates:', error);
        return 0;
      }
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    errorMessage = 'Failed to load blog posts. Please try again later.'
  }


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/blog', label: 'Blog' },
          ]}
        />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Sanjana M Shenoy's Nutrition Blog
        </h1>
        
        <Suspense fallback={
          <div className="text-center mb-8">
            <p className="text-blue-600 dark:text-blue-400 mb-4">Loading blog posts from database and markdown files...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-3 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }>
          {errorMessage ? (
            <div className="text-center py-10">
              <div className="text-red-500 dark:text-red-400 mb-4">{errorMessage}</div>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-400">No blog posts found.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {posts.map((post) => (
                  <BlogCard key={`${post.source}-${post.slug}`} post={post} />
                ))}
              </div>
              
              {pagination && pagination.totalPages > 1 && (
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                />
              )}
            </>
          )}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
} 