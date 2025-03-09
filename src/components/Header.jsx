"use client"

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  const isActive = (path) => {
    return pathname === path ? 
      "text-teal-600 dark:text-teal-600" : 
      "text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
  }

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="h-16" />
      <header 
        className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              aria-label="Sanjana Shenoy homepage"
            >
              {/* Remove or comment out the Image component */}
              {/*<Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="dark:invert"
              />*/}
              <span className="font-bold text-xl text-gray-900 dark:text-white">
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
              <div 
                className="text-gray-800 dark:text-white relative group"
                role="complementary"
                aria-label="Theme toggle"
              >
                <ThemeToggle />
                <div 
                  className="absolute right-0 top-full mt-3 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 text-white text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50"
                  role="tooltip"
                  aria-hidden="true"
                >
                  Switch to dark/light mode
                  <div className="absolute right-4 top-0 -translate-y-1 w-0 h-0 border-4 border-transparent border-b-gray-800 dark:border-b-gray-700" />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <div 
                className="text-gray-800 dark:text-white relative group"
                role="complementary"
                aria-label="Theme toggle"
              >
                <ThemeToggle />
                <div 
                  className="absolute right-0 top-full mt-3 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 text-white text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50"
                  role="tooltip"
                  aria-hidden="true"
                >
                  Switch to dark/light mode
                  <div className="absolute right-4 top-0 -translate-y-1 w-0 h-0 border-4 border-transparent border-b-gray-800 dark:border-b-gray-700" />
                </div>
              </div>
              <button 
                className="text-gray-600 dark:text-gray-300"
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden"
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="px-6 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow-lg">
            <Link 
              href="/"
              className={`block py-2 ${isActive('/')}`}
              onClick={handleMobileMenuClick}
            >
              Home
            </Link>
            <Link 
             href="/about-sanjana-m-shenoy"
              className={`block py-2 ${isActive('/about')}`}
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
      )}
    </>
  )
} 