'use client'

import dynamic from 'next/dynamic'

export const TableOfContents = dynamic(() => import('@/components/blog/TableOfContents'), {
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
})

export const FontSizeSlider = dynamic(() => import('@/components/blog/FontSizeSlider'), {
  ssr: false
})

export const ThemeToggle = dynamic(() => import('@/components/blog/ThemeToggle'), {
  ssr: false
}) 