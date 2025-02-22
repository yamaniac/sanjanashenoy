import Link from 'next/link'
import { format } from 'date-fns'
import Header from '@/components/Header'
import BlogImage from '@/components/blog/BlogImage'

// Add route segment config
export const runtime = 'edge' // Use edge runtime
export const preferredRegion = 'auto' // Automatically choose closest region
export const dynamic = 'force-dynamic'

export default async function Blog(props) {
  const searchParams = await props.searchParams
  const page = searchParams && 'page' in searchParams ? Number(searchParams.page) : 1
  
  // Fetch posts from API instead of using fs directly
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?page=${page}`)
  const { posts, pagination } = await response.json()
  
  // Map image to featuredImage for consistency
  const postsWithImages = posts.map(post => ({
    ...post,
    featuredImage: post.image
  }))
  
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://sanjanashenoy.com/blog",
    "name": "Sanjana Shenoy",
    "description": "Sanjana Shenoy - Dietitian and Nutritionist Blog posts",
    "url": "https://sanjanashenoy.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Sanjana Shenoy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sanjanashenoy.com/logo.png"
      }
    },
    "blogPost": postsWithImages.map((post) => ({
      "@type": "BlogPosting",
      "@id": `https://sanjanashenoy.com/blog/${post.id}`,
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://sanjanashenoy.com/blog/${post.id}`,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author || ""
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sanjana Shenoy"
      },
      "keywords": post.tags?.join(", ") || ""
    }))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />

      <div className="container mx-auto px-6 py-8 pt-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Blog Posts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsWithImages.map((post) => (
            <article 
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <Link href={`/blog/${post.id}`} className="block flex-1">
                {(post.featuredImage || post.image) && (
                  <div className="relative w-full h-[200px]">
                    <BlogImage
                      src={post.featuredImage || post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority={true}
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    {post.author && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          {pagination.currentPage > 1 && (
            <Link
              href={`/blog?page=${pagination.currentPage - 1}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Previous
            </Link>
          )}
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/blog?page=${pageNum}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                pageNum === pagination.currentPage
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {pageNum}
            </Link>
          ))}
          {pagination.currentPage < pagination.totalPages && (
            <Link
              href={`/blog?page=${pagination.currentPage + 1}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 