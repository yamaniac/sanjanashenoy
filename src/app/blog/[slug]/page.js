import Link from 'next/link'
import { format } from 'date-fns'
import Header from '@/components/Header'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownIt from 'markdown-it'
import BlogImage from '@/components/blog/BlogImage'
import TableOfContents from '@/components/blog/TableOfContents'
import AuthorCard from '@/components/blog/AuthorCard'
import BlogInteractiveElements from '@/components/blog/BlogInteractiveElements'
import Script from 'next/script'
import ClientReadingProgress from '@/components/blog/ClientReadingProgress'


// Remove fetchCache and use these configurations
export const runtime = 'nodejs'
export const revalidate = false

// Move the client-side components to a separate Client Component file
// Create a new file: src/components/blog/BlogInteractiveElements.js

// The server component
export default async function BlogPost({ params }) {
  const { slug } = params

  // 1. Read the .md file from the filesystem on the server
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  let post = null
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)

    // 2. Convert Markdown to HTML
    const md = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
    const contentHtml = md.render(content)

    // 3. Construct our "post" object
    post = {
      ...data,
      slug,
      contentHtml,
    }
  } catch (error) {
    // If the file isn't found or there's an error, handle it
    console.error('Error reading post:', error)
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="pt-20 text-center">
          <p className="text-red-500">Error loading post: {error.message}</p>
        </div>
      </div>
    )
  }

  // 4. Calculate reading time
  const wordsPerMinute = 200
  const wordCount = post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  // 5. Extract headings for the Table of Contents
  function getHeadings(html) {
    const regex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/g
    const headings = []
    let match

    while ((match = regex.exec(html)) !== null) {
      headings.push({
        level: Number(match[1]),
        text: match[2].replace(/<[^>]*>/g, ''),
        id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      })
    }
    return headings
  }
  const headings = getHeadings(post.contentHtml)

  // 6. Automatically add IDs to <h2> and <h3> for anchor links
  const contentWithIds = post.contentHtml.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/g,
    (match, level, attrs, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`
    }
  )

  // 7. (Optional) Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sanjanashenoy.com/blog/${slug}`
    },
    "headline": post.title,
    "description": post.description || "",
    "image": post.image ? `https://sanjanashenoy.com${post.image}` : "",
    "author": {
      "@type": "Person",
      "name": post.author || "",
    },
    "datePublished": post.date,
    "dateModified": post.date,
  }

  // 8. Return the complete page UI
  return (
    <>
      <ClientReadingProgress />

      {/* (Optional) Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 py-8 pt-20">
          <div className="flex gap-16">
            {/* Main Article Content */}
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
                <div className="relative w-full h-[300px] md:h-[600px] mb-6 md:mb-12 rounded-xl overflow-hidden shadow-lg">
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
              <header className="mb-8 md:mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-8 leading-tight">
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
                className="prose dark:prose-invert prose-xl max-w-none
                           prose-headings:text-gray-800 dark:prose-headings:text-white
                           prose-img:rounded-xl prose-headings:font-bold
                           prose-p:text-lg prose-p:leading-relaxed
                           prose-a:text-teal-600 dark:prose-a:text-teal-400
                           prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
            </div>

            {/* Sidebar: Table of Contents + Author Card */}
            <div className="hidden lg:block w-80 sticky top-24 self-start space-y-8">
              <TableOfContents headings={headings} />
              <AuthorCard />
            </div>
          </div>

          {/* Add the client component at the bottom */}
          <div className="hidden md:block">
            <BlogInteractiveElements 
              url={`https://sanjanashenoy.com/blog/${params.slug}`}
              title={post.title}
            />
          </div>
        </main>
      </div>
    </>
  )
}