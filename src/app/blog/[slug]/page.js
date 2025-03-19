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
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Image from 'next/image'
import { Suspense } from 'react'
import { TableOfContents, FontSizeSlider, ThemeToggle } from '@/components/blog/DynamicComponents'

// Use Incremental Static Regeneration (ISR) with a reasonable revalidation period
// This allows CDN caching while still updating periodically
export const revalidate = 3600; // Revalidate pages every 1 hour

// Allow dynamic params to handle MongoDB posts not known at build time
export const dynamicParams = true;

// Helper function to extract headings from HTML content
function getHeadings(html) {
  if (!html) return [];
  
  const regex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/g;
  const headings = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    headings.push({
      level: Number(match[1]),
      text: match[2].replace(/<[^>]*>/g, ''),
      id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    });
  }
  return headings;
}

// Add helper function to get latest posts
async function getLatestPosts(currentSlug) {
  try {
    const allPosts = await getAllPosts();
    return allPosts
      .filter(post => post.slug !== currentSlug)
      .slice(0, 5);
  } catch (error) {
    console.error('Error getting latest posts:', error);
    return [];
  }
}

// Add helper function to get adjacent posts
async function getAdjacentPosts(currentSlug) {
  try {
    const allPosts = await getAllPosts();
    const currentIndex = allPosts.findIndex(post => post.slug === currentSlug);
    
    return {
      previousPost: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      nextPost: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
    };
  } catch (error) {
    console.error('Error getting adjacent posts:', error);
    return { previousPost: null, nextPost: null };
  }
}

// Replace regular imports with dynamic imports for non-critical components
const LatestPosts = dynamicImport(() => import('@/components/blog/LatestPosts'), {
  loading: () => <div className="animate-pulse h-48 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
})

const References = dynamicImport(() => import('@/components/blog/References'))
const Disclaimer = dynamicImport(() => import('@/components/blog/Disclaimer'))
const AuthorSection = dynamicImport(() => import('@/components/blog/AuthorSection'))
const PostNavigation = dynamicImport(() => import('@/components/blog/PostNavigation'))

// The server component
export default async function BlogPost({ params }) {
  // Await params
  const { slug } = await params;
  console.log(`Blog post page for slug: "${slug}"`);
  
  let post = null;
  let contentWithIds = '';
  let readingTime = 0;
  let headings = [];
  
  try {
    // Get post from either database or markdown
    console.log(`Attempting to get post by slug: "${slug}"`);
    post = await getPostBySlug(slug);
    console.log(`Retrieved post from ${post.source}: "${post.title}"`);
    
    // Process post content based on source
    if (post.source === 'markdown') {
      console.log('Processing markdown content to HTML');
      // For markdown files, we need to render the content to HTML
      const md = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
      });
      
      post.contentHtml = md.render(post.content);
    } else if (post.source === 'database') {
      console.log('Processing database post content');
      // For database posts, content is already HTML, but check if we need additional processing
      if (!post.contentHtml && post.content) {
        const md = markdownIt({
          html: true,
          breaks: true,
          linkify: true,
        });
        post.contentHtml = md.render(post.content);
      }
      
      // Ensure we have content
      if (!post.contentHtml) {
        post.contentHtml = `<h1>${post.title}</h1><p>This post was loaded from the database.</p>`;
      }
    }
    
    console.log('Calculating reading time');
    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length;
    readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    console.log('Extracting headings for Table of Contents');
    // Extract headings for Table of Contents
    headings = getHeadings(post.contentHtml);
    
    console.log('Adding IDs to headings');
    // Add IDs to headings for anchor links
    contentWithIds = post.contentHtml.replace(
      /<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/g,
      (match, level, attrs, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
      }
    );
    
    console.log('Finished processing post');
  } catch (error) {
    console.error('Error loading post:', error);
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="container mx-auto pt-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Error loading post: {error.message}
          </p>
          <pre className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded mb-8 overflow-auto">
            {JSON.stringify({ slug, error: error.stack }, null, 2)}
          </pre>
          <Link href="/blog" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Define author info
  const AUTHOR_INFO = {
    name: "Sanjana M Shenoy",
    image: "/images/author.png",
    jobTitle: "Dietitian & Nutrition expert",
    accreditations: "PDG Dietitics, BSc allied health sciences, MSc in Dietetics and Food Service Management",
  };
  
  // Get adjacent posts and latest posts
  const { previousPost, nextPost } = await getAdjacentPosts(slug);
  const latestPosts = await getLatestPosts(slug);

  // 8. Return the complete page UI
  return (
    <>
      <ClientReadingProgress />

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

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Main Article Content */}
            <div className="flex-1 max-w-[1100px]">
              {/* Back button */}
              <Link
                href="/blog"
                className="inline-flex items-center text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-500 mb-8 text-lg"
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

              {/* Add post source indicator */}
              <div className="mb-4 inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                Source: {post.source === 'database' ? 'Database' : 'Markdown'}
              </div>

              {/* Featured Media (Image) */}
              {post.image && (
                <div className="relative w-full h-[300px] md:h-[400px] mb-6 md:mb-8 rounded-xl overflow-hidden shadow-lg">
                  <BlogImage
                    src={post.image}
                    alt={post.image_alt || post.title}
                    title={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1100px"
                    priority={true}
                    quality={75}
                  />
                </div>
              )}

              {/* Article header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight article-title">
                  {post.title}
                </h1>
                
                {/* Author info */}
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
                
                {/* Date and reading time */}
                <div className="flex flex-wrap items-center text-gray-700 dark:text-gray-400 text-sm mb-6">
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
                  <span className="font-medium">{post.contentHtml.replace(/<[^>]*>/g, '').split(/\s+/).length.toLocaleString()} words</span>
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
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={`${tag}-${index}`}
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
                className="prose dark:prose-invert prose-lg max-w-none
                           prose-headings:text-gray-800 dark:prose-headings:text-white
                           prose-img:rounded-xl prose-headings:font-bold
                           prose-p:text-lg prose-p:leading-relaxed
                           prose-a:text-teal-700 dark:prose-a:text-teal-400
                           prose-img:shadow-lg article-content"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
              
              {/* Add sections at the bottom */}
              <div className="mt-8 space-y-8">
                {post.references && <References references={post.references} />}
                <Disclaimer />
                <AuthorSection />
                <PostNavigation previousPost={previousPost} nextPost={nextPost} />
              </div>
            </div>

            {/* Sidebar: Table of Contents */}
            <div className="hidden lg:block w-80 sticky top-24 self-start">
              <FontSizeSlider />
              {headings.length > 0 && <TableOfContents headings={headings} />}
              <Suspense fallback={<div className="animate-pulse h-48 bg-gray-100 dark:bg-gray-800 rounded-lg mt-8"></div>}>
                <div className="mt-8">
                  <LatestPosts posts={latestPosts} />
                </div>
              </Suspense>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

// Generate static params for common blog posts at build time
export async function generateStaticParams() {
  try {
    // Get posts from markdown files which are known at build time
    const postsDirectory = path.join(process.cwd(), 'posts');
    const files = await fs.readdir(postsDirectory);
    
    const markdownSlugs = files
      .filter(file => file.endsWith('.md'))
      .map(file => ({ slug: file.replace(/\.md$/, '') }));
    
    console.log(`Pre-rendering ${markdownSlugs.length} markdown blog posts at build time`);
    
    return markdownSlugs;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}