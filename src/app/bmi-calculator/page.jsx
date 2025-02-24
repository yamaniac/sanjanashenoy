'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Add structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BMI Calculator",
  "description": "Free online Body Mass Index (BMI) calculator to help you determine if you're at a healthy weight",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [isAsian, setIsAsian] = useState(false);
  const [isMetric, setIsMetric] = useState(true);
  const [animation, setAnimation] = useState(false);

  const calculateBMI = () => {
    if (height && weight) {
      let bmiValue;
      if (isMetric) {
        const heightInMeters = height / 100;
        bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      } else {
        // Imperial calculation (height in inches, weight in pounds)
        bmiValue = ((weight * 703) / (height * height)).toFixed(1);
      }
      setBmi(bmiValue);
      setAnimation(true);

      // Different BMI thresholds for Asian populations
      if (isAsian) {
        if (bmiValue < 18.5) setStatus('Underweight');
        else if (bmiValue < 23) setStatus('Normal weight');
        else if (bmiValue < 27.5) setStatus('Overweight');
        else setStatus('Obese');
      } else {
        // Standard WHO BMI classifications
        if (bmiValue < 18.5) setStatus('Underweight');
        else if (bmiValue < 24.9) setStatus('Normal weight');
        else if (bmiValue < 29.9) setStatus('Overweight');
        else setStatus('Obese');
      }
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Underweight': return 'text-blue-500 dark:text-blue-400';
      case 'Normal weight': return 'text-green-500 dark:text-green-400';
      case 'Overweight': return 'text-orange-500 dark:text-orange-400';
      case 'Obese': return 'text-red-500 dark:text-red-400';
      default: return 'text-gray-700 dark:text-gray-300';
    }
  };

  const getStatusBackground = () => {
    switch (status) {
      case 'Underweight': return 'bg-blue-50 dark:bg-blue-900/20';
      case 'Normal weight': return 'bg-green-50 dark:bg-green-900/20';
      case 'Overweight': return 'bg-orange-50 dark:bg-orange-900/20';
      case 'Obese': return 'bg-red-50 dark:bg-red-900/20';
      default: return 'bg-gray-50 dark:bg-gray-800';
    }
  };

  const renderHealthAction = () => {
    if (status === 'Overweight' || status === 'Obese') {
      return (
        <div className="mt-12 max-w-4xl mx-auto animate-fade-in mb-12">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                <div className="mb-6 md:mb-0 flex-shrink-0">
                  <Image
                    src="/images/author.png"
                    alt="Sanjana Shenoy"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white/20"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-4">
                    Take the First Step Towards Better Health
                  </h2>
                  <p className="text-lg opacity-90">
                    Let me help you achieve your health goals with personalized nutrition guidance and sustainable lifestyle changes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">2000+</div>
                  <div className="text-sm opacity-80">Clients Helped</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold mb-1">20 Years</div>
                  <div className="text-sm opacity-80">Experience</div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-center">
                <a
                  href="/consultations"
                  className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 transform hover:scale-105"
                >
                  Book a Consultation
                </a>
                <a
                  href="/blog"
                  className="inline-block px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 transform hover:scale-105"
                >
                  Read Health Tips
                </a>
              </div>
              
              <div className="mt-6 text-center text-sm opacity-80">
                Join thousands of others who have transformed their health with personalized guidance
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => setAnimation(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animation]);

  return (
    <>
      <Head>
        <title>BMI Calculator | Check Your Body Mass Index | Sanjana Shenoy</title>
        <meta name="description" content="Calculate your Body Mass Index (BMI) with our free online calculator. Learn if you're at a healthy weight and understand BMI categories." />
        <meta name="keywords" content="BMI calculator, body mass index, healthy weight calculator, weight health, BMI categories" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="BMI Calculator | Check Your Body Mass Index" />
        <meta property="og:description" content="Calculate your Body Mass Index (BMI) with our free online calculator. Learn if you're at a healthy weight and understand BMI categories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/bmi" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="BMI Calculator | Check Your Body Mass Index" />
        <meta name="twitter:description" content="Calculate your Body Mass Index (BMI) with our free online calculator. Learn if you're at a healthy weight." />
        
        {/* Structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="max-w-6xl mx-auto pt-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              BMI Calculator
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Calculate your Body Mass Index to check if you're at a healthy weight
            </p>
          </div>

          {/* Add explanation section before the calculator */}
          <section className="max-w-4xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                How Does BMI Calculator Work?
              </h2>
              
              <div className="space-y-4">
                <p>
                  Body Mass Index (BMI) is a simple measurement that uses your height and weight to determine 
                  if you are at a healthy weight. The formula is:
                </p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg my-4">
                  <p className="font-mono text-center">
                    For metric: BMI = weight(kg) / height(m)²
                    <br />
                    For imperial: BMI = (weight(lbs) × 703) / height(inches)²
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Standard BMI Ranges:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Below 18.5 - Underweight</li>
                      <li>18.5 to 24.9 - Normal weight</li>
                      <li>25.0 to 29.9 - Overweight</li>
                      <li>30.0 or higher - Obese</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Asian BMI Ranges:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Below 18.5 - Underweight</li>
                      <li>18.5 to 23.0 - Normal weight</li>
                      <li>23.0 to 27.5 - Overweight</li>
                      <li>27.5 or higher - Obese</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg">
                    <strong>Note:</strong> BMI is a general guideline and doesn't account for factors like muscle mass, 
                    bone density, age, or gender. For a more accurate health assessment, consult with a healthcare professional.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10" aria-label="BMI Input Form">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Settings Row */}
                <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  {/* Ethnicity Toggle */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Ethnicity
                    </label>
                    <div className="flex rounded-lg shadow-sm">
                      <button
                        type="button"
                        onClick={() => setIsAsian(false)}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-lg ${
                          !isAsian
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        Non-Asian
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAsian(true)}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-lg ${
                          isAsian
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        Asian
                      </button>
                    </div>
                  </div>

                  {/* Unit System Toggle */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Unit System
                    </label>
                    <div className="flex rounded-lg shadow-sm">
                      <button
                        type="button"
                        onClick={() => setIsMetric(true)}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-lg ${
                          isMetric
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        Metric
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMetric(false)}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-lg ${
                          !isMetric
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        Imperial
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="height" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Height {isMetric ? '(cm)' : '(inches)'}
                  </label>
                  <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="block w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    placeholder={`Enter height in ${isMetric ? 'centimeters' : 'inches'}`}
                    min="0"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="weight" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Weight {isMetric ? '(kg)' : '(lbs)'}
                  </label>
                  <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="block w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    placeholder={`Enter weight in ${isMetric ? 'kilograms' : 'pounds'}`}
                    min="0"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={calculateBMI}
                  className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Calculate BMI"
                >
                  Calculate BMI
                </button>
              </form>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10" aria-label="BMI Results">
              {bmi ? (
                <div className={`space-y-8 ${animation ? 'animate-fade-in' : ''}`}>
                  <div className={`p-8 rounded-xl ${getStatusBackground()} transition-colors duration-300`}>
                    <div className="text-6xl font-bold text-gray-900 dark:text-white mb-3">
                      {bmi}
                    </div>
                    <div className={`text-3xl font-semibold ${getStatusColor()} transition-colors duration-300`}>
                      {status}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">BMI Categories</h3>
                    <div className="grid gap-4">
                      {[
                        { label: 'Underweight', range: '< 18.5', color: 'blue' },
                        { label: 'Normal weight', range: '18.5 - 24.9', color: 'green' },
                        { label: 'Overweight', range: '25 - 29.9', color: 'orange' },
                        { label: 'Obese', range: '≥ 30', color: 'red' }
                      ].map((category) => (
                        <div
                          key={category.label}
                          className={`p-4 rounded-lg bg-${category.color}-50 dark:bg-${category.color}-900/20 flex justify-between items-center text-lg`}
                        >
                          <span className={`text-${category.color}-600 dark:text-${category.color}-400 font-medium`}>
                            {category.label}
                          </span>
                          <span className={`text-${category.color}-600 dark:text-${category.color}-400`}>
                            {category.range}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-xl text-gray-500 dark:text-gray-400">
                  Enter your height and weight to see your BMI result
                </div>
              )}
            </section>
          </div>

          {/* Add the health action section */}
          {renderHealthAction()}
        </main>
      </div>
      <Footer />
    </>
  );
}
