import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function LatestPosts({ posts }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Latest Posts</h3>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-3 last:pb-0">
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-center gap-3"
            >
              {post.thumbnail && (
                <div className="flex-shrink-0">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </div>
              )}
              <div>
             
                <h4 className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 text-sm font-medium">
                  {post.title}
                </h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 