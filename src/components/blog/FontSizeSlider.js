'use client'

import { useState, useEffect, useRef } from 'react'

export default function FontSizeSlider({ variant = 'desktop' }) {
  const [fontSize, setFontSize] = useState(20)
  const [isExpanded, setIsExpanded] = useState(false)
  const sliderRef = useRef(null)

  useEffect(() => {
    const content = document.querySelector('.prose')
    if (content) {
      // Apply base size to prose container
      content.style.fontSize = `${fontSize}px`

      // Target specific elements for consistent scaling
      const elements = {
        'p': 1,           // paragraphs at base size
        'li': 1,          // list items at base size
        'h1': 2,          // h1 at 2x base size
        'h2': 1.5,        // h2 at 1.5x base size
        'h3': 1.25,       // h3 at 1.25x base size
        'blockquote': 1,  // blockquotes at base size
        'code': 0.875,    // code slightly smaller
        'pre': 0.875,     // pre blocks slightly smaller
        'a': 1,           // links at base size
        'strong': 1,      // bold text at base size
        'em': 1           // italic text at base size
      }

      // Apply sizes to all elements
      Object.entries(elements).forEach(([tag, scale]) => {
        const elements = content.querySelectorAll(tag)
        elements.forEach(el => {
          el.style.fontSize = `${fontSize * scale}px`
        })
      })
    }
  }, [fontSize])

  useEffect(() => {
    if (variant === 'mobile') {
      const handleClickOutside = (event) => {
        if (sliderRef.current && !sliderRef.current.contains(event.target)) {
          setIsExpanded(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [variant])

  const adjustFontSize = (increment) => {
    setFontSize(prevSize => {
      const newSize = prevSize + increment
      return Math.min(Math.max(newSize, 16), 32) // Clamp between 16 and 32
    })
  }

  if (variant === 'mobile') {
    return (
      <div className="relative" ref={sliderRef}>
        {/* Collapsed state - just shows the button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
          className={`flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg mx-auto ${isExpanded ? 'mb-3' : ''}`}
          aria-expanded={isExpanded}
          aria-label="Toggle text size controls"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-teal-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
            />
          </svg>
          <span className="font-medium text-gray-900 dark:text-white">Aa</span>
        </button>

        {/* Expanded state - shows the full slider */}
        {isExpanded && (
          <div 
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in"
            role="region"
            aria-label="Text size adjustment"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => adjustFontSize(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Decrease text size"
            >
              <span className="text-xl font-medium">−</span>
            </button>
            <input
              type="range"
              min="16"
              max="32"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600 touch-none"
              aria-valuemin="16"
              aria-valuemax="32"
              aria-valuenow={fontSize}
              aria-label="Adjust text size from 16px to 32px"
            />
            <button
              onClick={() => adjustFontSize(1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Increase text size"
            >
              <span className="text-xl font-medium">+</span>
            </button>
          </div>
        )}
      </div>
    )
  }

  // Desktop variant (existing layout)
  return (
    <div 
      className="flex flex-col gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm w-full max-w-md mx-auto lg:mx-0"
      role="region"
      aria-label="Text size adjustment"
      itemScope
      itemType="https://schema.org/InteractionCounter"
    >
      {/* Header with icon */}
      <div className="flex items-center gap-2 mb-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-teal-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
          />
        </svg>
        <h3 className="font-medium text-gray-900 dark:text-white">Adjust Text Size</h3>
      </div>

      {/* Slider controls */}
      <div className="flex items-center gap-3 touch-none">
        <label 
          htmlFor="font-size-slider" 
          className="sr-only"
        >
          Adjust text size
        </label>
        <button
          onClick={() => adjustFontSize(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Decrease text size"
        >
          <span className="text-xl font-medium">−</span>
        </button>
        <input
          id="font-size-slider"
          type="range"
          min="16"
          max="32"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600 touch-none"
          aria-valuemin="16"
          aria-valuemax="32"
          aria-valuenow={fontSize}
          aria-label="Adjust text size from 16px to 32px"
        />
        <button
          onClick={() => adjustFontSize(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Increase text size"
        >
          <span className="text-xl font-medium">+</span>
        </button>
      </div>

      <meta itemProp="interactionType" content="https://schema.org/AdjustAction" />
      <meta itemProp="name" content="Text Size Adjustment" />
      <meta itemProp="description" content="Adjust text size from 16px to 32px for better readability" />
    </div>
  )
} 