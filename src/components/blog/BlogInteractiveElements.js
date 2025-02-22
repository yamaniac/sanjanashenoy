'use client'

import dynamic from 'next/dynamic'

const ScrollToTop = dynamic(() => import('@/components/blog/ScrollToTop'), {
  ssr: false,
})

const ShareButton = dynamic(() => import('@/components/blog/ShareButton'), {
  ssr: false,
})

export default function BlogInteractiveElements({ url, title }) {
  return (
    <>
      <ScrollToTop />
      <ShareButton url={url} title={title} />
    </>
  )
} 