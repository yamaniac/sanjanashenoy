'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Move all the existing component code here
export default function BMICalculator() {
  // ... all the existing state and functions ...
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      {/* ... rest of the existing JSX ... */}
      <Footer />
    </div>
  );
} 