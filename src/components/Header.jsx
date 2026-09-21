"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef(null)

  // Mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      
      // Show header at top
      if (currentScrollY < 100) {
        setIsVisible(true)
        setLastScrollY(currentScrollY)
        return
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (path) => {
    return pathname === path ? 
      "text-teal-600" : 
      "text-gray-600 hover:text-teal-600"
  }

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Mobile Menu Portal Component
  const MobileMenuPortal = () => {
    if (!mounted) return null
    
    return createPortal(
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Menu */}
        <div 
          className="fixed top-16 left-0 right-0 z-50 bg-white shadow-lg overflow-y-auto"
          style={{
            maxHeight: 'calc(100vh - 64px)'
          }}
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex justify-end p-4 border-b">
            <button 
              className="text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-6 pt-2 pb-4 space-y-2">
            <Link 
              href="/"
              className={`block py-2 ${isActive('/')}`}
              onClick={handleMobileMenuClick}
            >
              Home
            </Link>
            <Link 
              href="/about-sanjana-m-shenoy"
              className={`block py-2 ${isActive('/about-sanjana-m-shenoy')}`}
              onClick={handleMobileMenuClick}
            >
              About
            </Link>
            <Link 
              href="/consultations"
              className={`block py-2 ${isActive('/consultations')}`}
              onClick={handleMobileMenuClick}
            >
              Consultations
            </Link>
            <Link 
              href="/news-events"
              className={`block py-2 ${isActive('/news-events')}`}
              onClick={handleMobileMenuClick}
            >
              News & Events
            </Link>
            <Link 
              href="/videos"
              className={`block py-2 ${isActive('/videos')}`}
              onClick={handleMobileMenuClick}
            >
              Videos
            </Link>
            <Link 
              href="/case-files"
              className={`block py-2 ${isActive('/case-files')}`}
              onClick={handleMobileMenuClick}
            >
              Case Files
            </Link>
            <Link 
              href="/blog"
              className={`block py-2 ${isActive('/blog')}`}
              onClick={handleMobileMenuClick}
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className={`block py-2 ${isActive('/contact')}`}
              onClick={handleMobileMenuClick}
            >
              Contact
            </Link>
          </nav>
        </div>
      </>,
      document.body
    )
  }

  return (
    <>
      <div className="h-16" />
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 bg-white shadow z-40 transition-transform duration-300 ${
 isVisible ? 'translate-y-0' : '-translate-y-full'
 }`}
        role="banner"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              title="Logo of Sanjana Shenoy"
              className="flex items-center space-x-2"
              aria-label="Sanjana Shenoy homepage"
              alt="Logo of Sanjana Shenoy"
            >
              <span className="font-bold text-xl text-gray-900">
                Dt.Sanjana Shenoy
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <nav 
                className="flex items-center space-x-8"
                role="navigation"
                aria-label="Main navigation"
              >
                <Link 
                  href="/"
                  className={`${isActive('/')} transition-colors`}
                  title="Home"
                >
                  Home
                </Link>
                <Link 
                  href="/about-sanjana-m-shenoy"
                  className={`${isActive('/about-sanjana-m-shenoy')} transition-colors`}
                  title="About"
                >
                  About
                </Link>
               
                <Link 
                  href="/consultations"
                  className={`${isActive('/consultations')} transition-colors`}
                  title="Consultations"
                >
                  Consultations
                </Link>
                <Link 
                  href="/news-events"
                  className={`${isActive('/news-events')} transition-colors`}
                  title="News & Events"
                >
                  News & Events
                </Link>
                <Link 
                  href="/videos"
                  className={`${isActive('/videos')} transition-colors`}
                  title="Videos"
                >
                  Videos
                </Link>
                <Link 
                  href="/case-files"
                  className={`${isActive('/case-files')} transition-colors`}
                  title="Case Files"
                >
                  Case Files
                </Link>
                <Link 
                  href="/blog"
                  className={`${isActive('/blog')} transition-colors`}
                  title="Blog"
                >
                  Blog
                </Link>
                <Link 
                  href="/contact"
                  className={`${isActive('/contact')} transition-colors`}
                  title="Contact"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button 
                className="text-gray-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Render mobile menu with portal */}
      {isMobileMenuOpen && <MobileMenuPortal />}
    </>
  )
} 