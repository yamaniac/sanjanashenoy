"use client"

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return pathname === path ? 
      "text-teal-600 dark:text-teal-400" : 
      "text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
  }

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow z-50">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          {/* Remove or comment out the Image component */}
          {/*<Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="dark:invert"
          />*/}
          <span className="font-bold text-xl text-gray-900 dark:text-white">
            Sanjana Shenoy
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link 
              href="/"
              className={`${isActive('/')} transition-colors`}
              title="Home"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`${isActive('/about')} transition-colors`}
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
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        <nav className="px-6 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow-lg">
          <Link 
            href="/"
            className={`block py-2 ${isActive('/')}`}
            onClick={handleMobileMenuClick}
          >
            Home
          </Link>
          <Link 
            href="/about"
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
  </header>
  )
} 