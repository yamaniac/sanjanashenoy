"use client"

import React, { useState, useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'; // You may need to install lucide-react or use another icon library

export default function MedicalDisclaimer({ className = "", type = "blog" }) {
  // State to track if user has seen the disclaimer before
  const [isExpanded, setIsExpanded] = useState(true);

  // Check localStorage on component mount (client-side only)
  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenMedicalDisclaimer');
    if (hasSeenDisclaimer) {
      setIsExpanded(false);
    }
  }, []);

  // Mark disclaimer as seen when collapsed
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      localStorage.setItem('hasSeenMedicalDisclaimer', 'true');
    }
  };

  // Get current date for the disclaimer
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const disclaimerContent = {
    case: {
      title: "Medical Case Disclaimer & Legal Notice",
      content: [
        "This case study is derived from real medical scenarios but has been modified to protect patient privacy and confidentiality in accordance with HIPAA guidelines.",
        "This content is thoroughly researched and written with reference to peer-reviewed medical journals, clinical guidelines, and professional medical networks. It is provided solely for educational and informational purposes and does not establish a physician-patient relationship.",
        "The standard of care may have changed since this case was documented. Always consult with a qualified healthcare provider regarding any medical condition or treatment options. Never disregard professional medical advice or delay seeking it because of something you have read on this website.",
        "The author and publisher disclaim any liability arising directly or indirectly from the use of this information."
      ]
    },
    blog: {
      title: "Medical Blog Disclaimer & Legal Notice",
      content: [
        "This article contains general medical information and opinions, thoroughly researched with reference to peer-reviewed medical journals, clinical guidelines, and professional medical networks. It is provided for educational and informational purposes only and is not medical advice.",
        "This content does not establish a physician-patient relationship and is not intended to replace professional medical advice, diagnosis, or treatment.",
        "Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.",
        "The author and publisher disclaim any liability arising directly or indirectly from the use of this information."
      ]
    }
  };

  const currentDisclaimer = disclaimerContent[type] || disclaimerContent.blog;

  return (
    <aside 
      aria-label="Medical disclaimer" 
      className={`border-l-4 border-red-500 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md ${className} my-6 transition-all duration-300 animate-pulse-once`}
    >
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {currentDisclaimer.title}
            </h2>
          </div>
          <button 
            onClick={handleToggle}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-expanded={isExpanded}
            aria-controls="disclaimer-content"
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>
        
        {isExpanded && (
          <div 
            id="disclaimer-content" 
            className="mt-4 text-gray-700 dark:text-gray-300 space-y-3"
          >
            {currentDisclaimer.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Last updated: {currentDate}
            </p>
          </div>
        )}
      </div>
    </aside>
  )
} 