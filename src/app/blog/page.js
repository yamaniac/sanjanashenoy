import Link from 'next/link'
import { format } from 'date-fns'
import Header from '@/components/Header'
import BlogImage from '@/components/blog/BlogImage'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const files = fs.readdirSync(postsDirectory)
    
    const posts = files
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

    return { posts }
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

export default async function Blog() {
  let posts = []
  let error = null

  try {
    const data = await getBlogPosts()
    posts = data.posts || []
  } catch (e) {
    error = e
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Blog Posts
        </h1>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug || post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
} 