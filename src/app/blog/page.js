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
  return {
    title: 'Blog | Sanjana Shenoy - Dietitian & Nutritionist',
    description: 'Read the latest articles and insights from Sanjana Shenoy, a registered dietitian based in Mangalore, India.',
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.image && (
          <div className="relative w-full h-[200px]">
            <BlogImage
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {post.title}
          </h2>
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
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

  try {
    // Properly handle searchParams in Next.js 15
    const resolvedParams = await Promise.resolve(searchParams)
    const pageNumber = resolvedParams?.page ? parseInt(resolvedParams.page) : 1
    
    const data = await getBlogPosts(pageNumber)
    posts = data.posts || []
    
    // Sort posts by date in descending order (latest first)
    posts.sort((a, b) => {
      try {
        // Log dates to debug
        console.log('Sorting dates:', {
          aDate: a.date,
          bDate: b.date
        });
        
        // Ensure we have valid dates before comparing
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
    
    pagination = data.pagination
  } catch (error) {
    console.error('Error fetching blog posts:', error)
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
          Blog Posts
        </h1>
        
        <Suspense fallback={
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
        }>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {posts.map((post) => (
              <BlogCard key={post.slug || post.id} post={post} />
            ))}
          </div>
          
          {pagination && pagination.totalPages > 1 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
            />
          )}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
} 