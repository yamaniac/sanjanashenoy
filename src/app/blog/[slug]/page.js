import Link from 'next/link'
import { format } from 'date-fns'
import Header from '@/components/Header'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownIt from 'markdown-it'
import BlogImage from '@/components/blog/BlogImage'
import dynamicImport from 'next/dynamic'
import Script from 'next/script'
import ClientReadingProgress from '@/components/blog/ClientReadingProgress'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getAllPosts } from '@/lib/posts'
import Image from 'next/image'
import { Suspense } from 'react'
import { TableOfContents, FontSizeSlider, ThemeToggle } from '@/components/blog/DynamicComponents'

// Replace regular imports with dynamic imports for non-critical components
const LatestPosts = dynamicImport(() => import('@/components/blog/LatestPosts'), {
  loading: () => <div className="animate-pulse h-48 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
})

const References = dynamicImport(() => import('@/components/blog/References'))
const Disclaimer = dynamicImport(() => import('@/components/blog/Disclaimer'))
const AuthorSection = dynamicImport(() => import('@/components/blog/AuthorSection'))
const PostNavigation = dynamicImport(() => import('@/components/blog/PostNavigation'))

// This tells Next.js to pre-render all blog posts at build time
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Force static rendering since we're pre-rendering all posts
export const dynamic = 'force-static'
export const dynamicParams = false // Return 404 for non-existent blog posts

// Update viewport export with themeColor
export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ]
}

export async function generateMetadata({ params }) {
  try {
    // In Next.js 15, params is a Promise that must be awaited
    const { slug } = await params;
    
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(fileContents)
    
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
    const headings = getHeadings(data.content)

    return {
      title: `${data.title} | Sanjana Shenoy - Dietitian & Nutritionist`,
      description: `${data.description}. Article sections include: ${headings.map(h => h.text).join(', ')}`,
      metadataBase: new URL('https://sanjanashenoy.in'),
      other: {
        'preload': [
          { 'as': 'image', 'href': '/images/author.png' },
        ],
        'preconnect': [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com'
        ]
      },
      openGraph: {
        title: `${data.title} | Sanjana Shenoy - Dietitian & Nutritionist`,
        description: data.description,
        images: data.image ? [{
          url: data.image,
          license: data.imageLicense || 'Licensed Content',
          creator: data.imageCredit,
          source: data.imageSource,
          attribution: `Image by ${data.imageCredit} from ${data.imageSource}. ${data.imageLicense}`,
          usage_terms: 'This image is used under license. Redistribution not permitted.'
        }] : [],
      },
      accessibility: {
        features: ['adjustableTextSize'],
        description: 'This blog post includes an adjustable text size feature, allowing readers to customize font size from 16px to 32px for better readability.'
      },
      rights: {
        license: data.imageLicense || 'Licensed Content',
        creator: data.imageCredit,
        source: data.imageSource,
        attribution: `Image by ${data.imageCredit} from ${data.imageSource}. ${data.imageLicense}`,
        usage_terms: 'This image is used under license. Redistribution not permitted.'
      },
      canonical: `https://sanjanashenoy.in/blog/${slug}`,
    }
  } catch (error) {
    console.error('Error reading post:', error)
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found',
    }
  }
}

// Add this at the top of the file with other imports
const AUTHOR_INFO = {
  name: "Sanjana M Shenoy",
  image: "/images/author.png",
  jobTitle: "Dietitian & Nutrition expert",
  accreditations: "PDG Dietitics, BSc allied health sciences, MSc in Dietetics and Food Service Management",
};

// Add this function at the top of the file, after the imports
async function getLatestPosts(currentSlug) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fileContents = fs.readFileSync(path.join(postsDirectory, file), 'utf-8')
      const { data } = matter(fileContents)
      return {
        ...data,
        slug: file.replace('.md', ''),
      }
    })
    .filter(post => post.slug !== currentSlug) // Exclude current post
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)

  return posts
}

// Add this function after getLatestPosts
async function getAdjacentPosts(currentSlug) {
  const posts = await getAllPosts()
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  
  return {
    previousPost: currentIndex > 0 ? posts[currentIndex - 1] : null,
    nextPost: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  }
}

// Add this component for social sharing
const SocialShare = ({ url, title }) => {
  return (
    <div className="flex gap-4 items-center my-8">
      <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`)}>
        Share on Twitter
      </button>
      <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)}>
        Share on LinkedIn
      </button>
      {/* Add more social buttons */}
    </div>
  )
}

// Add this component at the top of the file
const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
)

// The server component
export default async function BlogPost({ params }) {
  // Await params
  const { slug } = await params;
  
  // We can now use slug directly
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  let post = null
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)

    // Modify markdown-it configuration
    const md = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })

    // Add custom renderer for code blocks
    md.renderer.rules.fence = function(tokens, idx) {
      const token = tokens[idx];
      const code = token.content.trim();
      const lang = token.info.trim();

      // Check if it's a mermaid diagram
      if (lang === 'mermaid') {
        return `<div class="mermaid-wrapper"><MermaidDiagram chart={\`${code}\`} /></div>`;
      }

      // Regular code block
      return `<pre><code class="language-${lang}">${code}</code></pre>`;
    };

    const contentHtml = md.render(content)

    // 3. Construct our "post" object
    post = {
      ...data,
      slug: slug, // Use the awaited slug
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

  // 7. (Optional) Structured data 
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sanjanashenoy.in/blog/${slug}`
    },
    "headline": post.title,
    "description": post.description || "",
    "image": post.image ? [`https://sanjanashenoy.in${post.image}`] : [],
    "author": {
      "@type": "Person",
      "name": AUTHOR_INFO.name,
      "jobTitle": AUTHOR_INFO.jobTitle,
      "image": `https://sanjanashenoy.in${AUTHOR_INFO.image}`,
      "url": "https://sanjanashenoy.in/about-sanjana-m-shenoy",
      "description": AUTHOR_INFO.accreditations,
      "sameAs": [
        "https://www.linkedin.com/in/sanjana-m-shenoy-21211125/",
        "https://www.instagram.com/dietsanjana/",
        "https://www.facebook.com/dietsanjana/",
        "https://www.youtube.com/@dietsanjana",
        "https://twitter.com/dietsanjana"
      ],
      "knowsAbout": ["Nutrition", "Dietetics", "Health", "Wellness"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sanjana Shenoy Nutrition",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sanjanashenoy.in/images/sanjana_shenoy.png",
        "width": "800",
        "height": "800"
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": post.lastUpdated 
      ? new Date(post.lastUpdated).toISOString() 
      : new Date(post.date).toISOString(),
    "keywords": post.tags ? post.tags.join(", ") : "",
    "wordCount": wordCount,
    "articleBody": post.contentHtml.replace(/<[^>]*>/g, ''),
    "inLanguage": "en-US",
    "timeRequired": `PT${readingTime}M`,
    "isAccessibleForFree": "true",
    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    "citation": post.references ? post.references.map(ref => ({
      "@type": "CreativeWork",
      "@id": ref.url || "",
      "headline": ref.title,
      "author": ref.authors,
      "datePublished": ref.year,
      "publisher": ref.journal,
      "url": ref.url || ""
    })) : [],
    "about": {
      "@type": "NutritionInformation",
      "name": post.title,
      "description": post.description
    },
    "articleSection": headings.map(h => h.text),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-title", ".article-content"]
    }
  }

  // If the post has video content, add videoObject
  if (post.video) {
    structuredData.video = {
      "@type": "VideoObject",
      "name": post.title,
      "description": post.description,
      "thumbnailUrl": post.image ? [`https://sanjanashenoy.in${post.image}`] : [],
      "uploadDate": new Date(post.date).toISOString(),
      "embedUrl": post.video
    }
  }

  // Add this line before the return statement
  const latestPosts = await getLatestPosts(slug)
  const { previousPost, nextPost } = await getAdjacentPosts(slug)

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
          {/* Add Breadcrumbs here */}
          <Breadcrumbs
            items={[
              { href: '/', label: 'Home' },
              { href: '/blog', label: 'Blog' },
              { href: `/blog/${slug}`, label: post.title },
            ]}
          />

          <div className="flex gap-16">
            {/* Main Article Content */}
            <div className="flex-1 max-w-[1100px]">
              {/* Back button */}
              <Link
                href="/blog"
                className="inline-flex items-center text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-500 mb-12 text-lg"
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

              {/* Featured Media (Video or Image) */}
              {post.video ? (
                <div className="relative w-full h-[300px] md:h-[600px] mb-6 md:mb-12 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={post.video}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              ) : post.image ? (
                <div className="relative w-full h-[300px] md:h-[600px] mb-6 md:mb-12 rounded-xl overflow-hidden shadow-lg">
                  <BlogImage
                    src={post.image}
                    alt={post.image_alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1100px"
                    priority={true}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,...`}
                    quality={75}
                  />
                </div>
              ) : null}

              {/* Article header */}
              <header className="mb-8 md:mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight article-title">
                  {post.title}
                </h1>
                
                {/* Author info */}
                {post.author && (
                  <div className="flex items-center mb-4">
                    <Image
                      src={AUTHOR_INFO.image}
                      alt={AUTHOR_INFO.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-3 object-cover"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <Link 
                        href="/about-sanjana-m-shenoy" 
                        className="text-lg font-medium hover:text-teal-700 dark:hover:text-teal-400 text-gray-900 dark:text-white"
                      >
                        {AUTHOR_INFO.name}
                      </Link>
                      <span className="text-sm text-gray-700 dark:text-gray-400">
                        {AUTHOR_INFO.jobTitle}
                      </span>
                      <span className="text-xs text-gray-700 dark:text-gray-400 mt-0.5">
                        {AUTHOR_INFO.accreditations}
                      </span>
                    </div>
                  </div>
                )}

                {/* Date and reading time */}
                <div className="flex items-center text-gray-700 dark:text-gray-400 text-sm mb-6">
                  <time dateTime={post.date} className="font-medium">
                    Published: {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  {post.lastUpdated && post.lastUpdated !== post.date && (
                    <>
                      <span className="mx-2">•</span>
                      <time dateTime={post.lastUpdated} className="font-medium">
                        Updated: {format(new Date(post.lastUpdated), 'MMMM d, yyyy')}
                      </time>
                    </>
                  )}
                  <span className="mx-2">•</span>
                  <span className="font-medium">{readingTime} min read</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">{wordCount.toLocaleString()} words</span>
                  <span className="mx-2">•</span>
                  <div className="inline-flex items-center gap-2">
                    <div className="relative group">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-sm rounded-lg p-2 text-center">
                        This article has been peer-reviewed for accuracy and quality
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-sm rounded-lg p-2 text-center">
                        100% human-written content. No AI was used in creating this article
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
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
                           prose-a:text-teal-700 dark:prose-a:text-teal-400
                           prose-img:shadow-lg [&_*]:!scale-[var(--scale-factor,100%)]
                           article-content"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
              
             
              
              {/* About the Author Section */}
              <AuthorSection />
              
              {/* Post Navigation */}
              
              {/* References and Share button */}
              <div className="mt-8 space-y-8">
                <References references={post.references} />
                <Disclaimer />

                <PostNavigation previousPost={previousPost} nextPost={nextPost} />
              </div>
            </div>

            {/* Sidebar: Table of Contents + Author Card */}
            <div className="hidden lg:block w-80 sticky top-24 self-start space-y-8">
              <FontSizeSlider />
              <TableOfContents headings={headings} />
              <Suspense fallback={<LoadingSkeleton />}>
                <LatestPosts posts={latestPosts} />
              </Suspense>
            </div>
          </div>
        </main>

        {/* Add sticky FontSizeSlider for mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
          <div className="flex items-center">
            <div className="flex-1">
              <FontSizeSlider variant="mobile" />
            </div>
            <div className="flex-shrink-0 ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  )
}