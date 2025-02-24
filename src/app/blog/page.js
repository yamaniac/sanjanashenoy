import Link from 'next/link'
import { format } from 'date-fns'
import Header from '@/components/Header'
import BlogImage from '@/components/blog/BlogImage'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Suspense } from 'react'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getBlogPosts(page = 1, postsPerPage = 9) {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const files = fs.readdirSync(postsDirectory)
    
    const allPosts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(postsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContent)
        
        return {
          ...data,
          slug: file.replace('.md', ''),
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    const totalPosts = allPosts.length
    const totalPages = Math.ceil(totalPosts / postsPerPage)
    const startIndex = (page - 1) * postsPerPage
    const paginatedPosts = allPosts.slice(startIndex, startIndex + postsPerPage)

    return { 
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        postsPerPage
      }
    }
  } catch (error) {
    console.error('Error reading blog posts:', error)
    throw error
  }
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

export default async function Blog({ searchParams }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
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
          <BlogContent searchParams={searchParams} />
        </Suspense>
      </main>
    </div>
  )
}

async function BlogContent({ searchParams }) {
  let posts = []
  let pagination = null
  let error = null

  try {
    const page = parseInt(searchParams?.page) || 1
    const data = await getBlogPosts(page)
    posts = data.posts || []
    pagination = data.pagination
  } catch (e) {
    error = e
  }

  return (
    <>
      {error && (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Error loading blog posts. Please try again later.
          </p>
          <p className="text-sm text-red-600 dark:text-red-400">
            {error.message}
          </p>
        </div>
      )}

      {!error && posts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts available at the moment. Please check back later.
          </p>
        </div>
      )}

      {!error && posts.length > 0 && (
        <>
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
        </>
      )}
      <Footer />
    </>
  )
} 