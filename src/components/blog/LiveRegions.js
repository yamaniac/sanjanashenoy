'use client'

import { useEffect } from 'react'

export function announceUpdate(message) {
  const region = document.getElementById('content-updates')
  if (region) {
    region.textContent = message
  }
}

export function announceLoadingStatus(message) {
  const region = document.getElementById('loading-status')
  if (region) {
    region.textContent = message
  }
}

export function announceNavigation(message) {
  const region = document.getElementById('navigation')
  if (region) {
    region.textContent = message
  }
}

export function announceDynamicContent(message) {
  const region = document.getElementById('dynamic-content')
  if (region) {
    region.textContent = message
  }
}

export default function LiveRegions() {
  useEffect(() => {
    // Create live regions if they don't exist
    const regions = [
      {
        id: 'content-updates',
        label: 'Content updates'
      },
      {
        id: 'loading-status',
        label: 'Loading status'
      },
      {
        id: 'navigation',
        label: 'Navigation updates'
      },
      {
        id: 'dynamic-content',
        label: 'Dynamic content changes'
      }
    ]

    regions.forEach(({ id, label }) => {
      if (!document.getElementById(id)) {
        const region = document.createElement('div')
        region.id = id
        region.setAttribute('role', 'status')
        region.setAttribute('aria-live', 'polite')
        region.setAttribute('aria-label', label)
        region.className = 'sr-only'
        document.body.appendChild(region)
      }
    })

    // Cleanup function
    return () => {
      regions.forEach(({ id }) => {
        const region = document.getElementById(id)
        if (region) {
          region.remove()
        }
      })
    }
  }, [])

  return null
} 