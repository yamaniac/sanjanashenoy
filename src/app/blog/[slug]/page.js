import Link from 'next/link'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
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
import ShareButton from '@/components/blog/ShareButton'
import { TableOfContents, FontSizeSlider, ThemeToggle } from '@/components/blog/DynamicComponents'
import LiveRegions, { announceUpdate, announceLoadingStatus, announceNavigation, announceDynamicContent } from '@/components/blog/LiveRegions'
import ClientLatestPosts from '@/components/blog/ClientLatestPosts'

// Replace regular imports with dynamic imports for non-critical components
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
    const { slug } = await params;
    
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(fileContents)
    
    // Ensure consistent date handling
    const publishDate = new Date(data.date).toISOString()
    const modifiedDate = data.lastUpdated 
      ? new Date(data.lastUpdated).toISOString()
      : publishDate

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

    // Define the canonical URL
    const canonicalUrl = `https://sanjanashenoy.in/blog/${slug}`

    // Create a more detailed description that's at least 150 characters
    let metaDescription = data.description || '';
    if (metaDescription.length < 150 && data.excerpt) {
      metaDescription = data.excerpt;
    }
    if (metaDescription.length > 160) {
      metaDescription = metaDescription.substring(0, 157) + '...';
    }

    return {
      title: `${data.title} - Sanjana Shenoy`,
      description: metaDescription,
      metadataBase: new URL('https://sanjanashenoy.in'),
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'en-IN': canonicalUrl,
          'en-US': canonicalUrl,
          'x-default': canonicalUrl
        },
      },
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
        title: `${data.title} - Sanjana Shenoy, Dietitian & Nutritionist`,
        description: metaDescription,
        type: 'article',
        url: canonicalUrl,
        images: data.image ? [{
          url: data.image,
          license: data.imageLicense || 'Licensed Content',
          creator: data.imageCredit,
          source: data.imageSource,
          attribution: `Image by ${data.imageCredit} from ${data.imageSource}. ${data.imageLicense}`,
          usage_terms: 'This image is used under license. Redistribution not permitted.'
        }] : [],
        siteName: 'Sanjana M Shenoy - Dietitian & Nutritionist',
      },
      accessibility: {
        features: ['adjustableTextSize', 'screenReaderSupport', 'ariaLiveRegions', 'highContrastMode', 'keyboardNavigation'],
        description: 'This blog post includes comprehensive accessibility features including adjustable text size (16px to 32px), screen reader support with ARIA live regions, high contrast mode, and keyboard navigation support.',
        accessibilityControl: ['textSize', 'highContrast', 'keyboardOnly'],
        accessibilityHazard: ['none'],
        accessibilityAPI: ['ARIA', 'ATK', 'AXAPI'],
        accessibilityFeature: [
          'readingOrder',
          'structuralNavigation',
          'alternativeText',
          'longDescription',
          'highContrastDisplay',
          'resizeText',
          'screenReaderOptimization',
          'captions',
          'audioDescription',
          'signLanguage'
        ],
        accessibilitySummary: 'This content is optimized for accessibility with features including adjustable text size, screen reader support, ARIA live regions for dynamic content, high contrast mode, keyboard navigation, and semantic HTML structure.'
      },
      rights: {
        license: data.imageLicense || 'Licensed Content',
        creator: data.imageCredit,
        source: data.imageSource,
        attribution: `Image by ${data.imageCredit} from ${data.imageSource}. ${data.imageLicense}`,
        usage_terms: 'This image is used under license. Redistribution not permitted.'
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
      canonical: canonicalUrl,
      datePublished: publishDate,
      dateModified: modifiedDate,
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


// Add this component at the top of the file
const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-4" aria-live="polite" aria-busy="true">
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
      "knowsAbout": ["Nutrition", "Dietetics", "Health", "Wellness"],
      "affiliation": {
        "@type": "Organization",
        "name": "Sanjana Shenoy Nutrition",
        "url": "https://sanjanashenoy.in"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sanjana Shenoy Nutrition",
      "url": "https://sanjanashenoy.in"
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://sanjanashenoy.in/images/sanjana_shenoy.png",
      "width": "800",
      "height": "800"
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
      <LiveRegions />
      <ClientReadingProgress />

      {/* (Optional) Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 py-8 pt-5">
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
                    title={post.title}
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
                <div className="flex flex-wrap items-center text-gray-700 dark:text-gray-400 text-sm mb-6 gap-2">
                  <time dateTime={post.date} className="font-medium">
                    Published: {format(new Date(post.date), 'MMMM d, yyyy', { locale: enUS })}
                  </time>
                  {post.lastUpdated && post.lastUpdated !== post.date && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <time dateTime={post.lastUpdated} className="font-medium">
                        Updated: {format(new Date(post.lastUpdated), 'MMMM d, yyyy', { locale: enUS })}
                      </time>
                    </>
                  )}
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium">{readingTime} min read</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium">{wordCount.toLocaleString()} words</span>
                  <span className="hidden sm:inline">•</span>
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
                    <div className="relative group">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-sm rounded-lg p-2 text-center">
                        Content is based on scientific research and evidence
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-sm rounded-lg p-2 text-center">
                        Written by certified nutrition expert
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-gray-900 text-white text-sm rounded-lg p-2 text-center">
                        Accessibility-friendly with screen reader support, adjustable text size, and ARIA live regions
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <div className="relative group">
                        <span
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium cursor-help"
                        >
                          +{post.tags.length - 3} more
                        </span>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-sm rounded-lg p-3 shadow-lg z-10">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </header>
              <ShareButton url={`https://sanjanashenoy.in/blog/${slug}`} title={post.title} />
              {/* Article content */}
              <div
                className="prose dark:prose-invert prose-xl max-w-none
                           prose-headings:text-gray-800 dark:prose-headings:text-white
                           prose-img:rounded-xl prose-headings:font-bold
                           prose-p:text-lg prose-p:leading-relaxed
                           prose-a:text-teal-700 dark:prose-a:text-teal-400
                           prose-img:shadow-lg [&_*]:!scale-[var(--scale-factor,100%)]
                           article-content
                           [&_p]:text-[clamp(1rem,1.5vw,1.25rem)]
                           [&_h1]:text-[clamp(2rem,4vw,3rem)]
                           [&_h2]:text-[clamp(1.5rem,3vw,2.25rem)]
                           [&_h3]:text-[clamp(1.25rem,2vw,1.75rem)]
                           [&_li]:text-[clamp(1rem,1.5vw,1.25rem)]
                           [&_blockquote]:text-[clamp(1rem,1.5vw,1.25rem)]
                           [&_pre]:text-[clamp(0.875rem,1.25vw,1rem)]
                           [&_code]:text-[clamp(0.875rem,1.25vw,1rem)]
                           [&_*]:leading-[1.6]"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                aria-live="polite"
              />
              
              {/* About the Author Section */}
              <Suspense fallback={<LoadingSkeleton />}>
                <AuthorSection />
              </Suspense>
              
              {/* Post Navigation */}
              <Suspense fallback={<LoadingSkeleton />}>
                <PostNavigation previousPost={previousPost} nextPost={nextPost} />
              </Suspense>
              
              {/* References and Disclaimer at the bottom only for better SEO */}
              <div className="mt-8 space-y-8">
                <Suspense fallback={<LoadingSkeleton />}>
                  <References references={post.references} />
                </Suspense>
                <Suspense fallback={<LoadingSkeleton />}>
                  <Disclaimer />
                </Suspense>
              </div>
            </div>

            {/* Sidebar: Table of Contents + Author Card */}
            <div className="hidden lg:block w-80 sticky top-24 self-start space-y-8">
              <FontSizeSlider />
              <TableOfContents headings={headings} />
              <Suspense fallback={<LoadingSkeleton />}>
                <ClientLatestPosts posts={latestPosts} />
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
      <Footer />
    </>
  )
}