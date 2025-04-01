'use client'

import { useEffect } from 'react'

export default function LiveRegions() {
  useEffect(() => {
    // Create live regions if they don't exist
    const regions = {
      'content-updates': 'Content updates',
      'loading-status': 'Loading status',
      'navigation': 'Navigation updates',
      'dynamic-content': 'Dynamic content changes'
    }

    Object.entries(regions).forEach(([id, label]) => {
      if (!document.getElementById(id)) {
        const region = document.createElement('div')
        region.id = id
        region.setAttribute('aria-live', 'polite')
        region.setAttribute('aria-label', label)
        region.className = 'sr-only'
        document.body.appendChild(region)
      }
    })

    return () => {
      // Clean up live regions on unmount
      Object.keys(regions).forEach(id => {
        const region = document.getElementById(id)
        if (region) {
          region.remove()
        }
      })
    }
  }, [])

  return null
}

// Utility function to announce updates
export function announceUpdate(message, priority = 'polite') {
  const region = document.getElementById('content-updates')
  if (region) {
    region.setAttribute('aria-live', priority)
    region.textContent = message
    // Reset to polite after announcement
    setTimeout(() => {
      region.setAttribute('aria-live', 'polite')
    }, 100)
  }
}

// Utility function to announce loading status
export function announceLoadingStatus(status) {
  const region = document.getElementById('loading-status')
  if (region) {
    region.textContent = status
  }
}

// Utility function to announce navigation updates
export function announceNavigation(message) {
  const region = document.getElementById('navigation')
  if (region) {
    region.textContent = message
  }
}

// Utility function to announce dynamic content changes
export function announceDynamicContent(message) {
  const region = document.getElementById('dynamic-content')
  if (region) {
    region.textContent = message
  }
} 