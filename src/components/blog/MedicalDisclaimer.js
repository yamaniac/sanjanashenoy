import React from 'react'

export default function MedicalDisclaimer() {
  return (
    <aside aria-label="Medical disclaimer" className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Medical Disclaimer</h2>
      <div className="text-gray-700 dark:text-gray-300">
        <p>
          The content provided is for informational and educational purposes only. It is not intended to be a substitute 
          for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
          qualified health provider with any questions you may have regarding a medical condition. Never disregard 
          professional medical advice or delay in seeking it because of something you have read on this website.
        </p>
      </div>
    </aside>
  )
} 