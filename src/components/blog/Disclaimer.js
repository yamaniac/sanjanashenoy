"use client"

import Link from 'next/link'
import MedicalDisclaimer from './MedicalDisclaimer'
import { UserCheck } from 'lucide-react'

export default function Disclaimer() {
  return (
    <div className="disclaimer-wrapper space-y-6">
      {/* Article Authenticity */}
      <aside 
        aria-label="Article authenticity disclaimer" 
        className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-blue-500 overflow-hidden"
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-center space-x-3 mb-3">
            <UserCheck className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Human Expert Content</h2>
          </div>
          
          <div className="text-gray-700 dark:text-gray-300">
            <p>
              This article was written entirely by a human expert{' '}
              <Link 
                href="/about-sanjana-m-shenoy" 
                className="text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-500 font-medium"
                title="About Sanjana M Shenoy"
              >
                Sanjana M Shenoy
              </Link>
              {' '}and has undergone thorough peer review to ensure scientific accuracy. 
              No AI language models were used in the creation of this content. All information is based on professional expertise, 
              scientific research, and clinical experience.
            </p>
          </div>
        </div>
      </aside>
      
      {/* Medical Disclaimer */}
      <MedicalDisclaimer />
    </div>
  )
} 