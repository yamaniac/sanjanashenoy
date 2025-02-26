import Link from 'next/link'
import BlogImage from './BlogImage'

export default function PostNavigation({ previousPost, nextPost }) {
  return (
    <div className="mt-16 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Continue Reading
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {previousPost && (
          <Link 
            href={`/blog/${previousPost.slug}`}
            className="group relative flex flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-4 left-4 z-10 text-sm text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              ← Previous Post
            </div>
            <div className="relative w-full h-48">
              {/* Large Arrow Overlay */}
              <div className="absolute inset-0 flex items-center justify-start z-10 px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-12 h-12 text-white drop-shadow-lg"
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
              </div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-[1]" />
              <BlogImage
                src={previousPost.image || '/images/default-blog-image.jpg'}
                alt={previousPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {previousPost.title}
              </h3>
            </div>
          </Link>
        )}

        {nextPost && (
          <Link 
            href={`/blog/${nextPost.slug}`}
            className="group relative flex flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-4 right-4 z-10 text-sm text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              Next Post →
            </div>
            <div className="relative w-full h-48">
              {/* Large Arrow Overlay */}
              <div className="absolute inset-0 flex items-center justify-end z-10 px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-12 h-12 text-white drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-[1]" />
              <BlogImage
                src={nextPost.image || '/images/default-blog-image.jpg'}
                alt={nextPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {nextPost.title}
              </h3>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
} 