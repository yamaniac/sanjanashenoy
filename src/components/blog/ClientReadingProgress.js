'use client'

import dynamic from 'next/dynamic'

const ReadingProgressBar = dynamic(() => import('@/components/blog/ReadingProgress'), {
  ssr: false,
})

export default function ClientReadingProgress() {
  return <ReadingProgressBar />
} 