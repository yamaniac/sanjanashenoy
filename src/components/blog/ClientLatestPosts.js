'use client'

import dynamic from 'next/dynamic'

const LatestPosts = dynamic(() => import('./LatestPosts'), {
  loading: () => <div className="animate-pulse h-48 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>,
  ssr: false
})

export default function ClientLatestPosts({ posts }) {
  return <LatestPosts posts={posts} />
} 