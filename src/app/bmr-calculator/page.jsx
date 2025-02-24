'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function BMRCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [isMetric, setIsMetric] = useState(true);
  const [bmr, setBmr] = useState(null);
  const [animation, setAnimation] = useState(false);

  const activityMultipliers = {
    sedentary: { factor: 1.2, label: 'Sedentary: little or no exercise' },
    light: { factor: 1.375, label: 'Exercise 1-3 times/week' },
    moderate: { factor: 1.465, label: 'Exercise 4-5 times/week' },
    active: { factor: 1.55, label: 'Daily exercise or intense exercise 3-4 times/week' },
    veryActive: { factor: 1.725, label: 'Intense exercise 6-7 times/week' },
    extraActive: { factor: 1.9, label: 'Very intense exercise daily, or physical job' }
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'BMR Calculator',
    description: 'Calculate your Basal Metabolic Rate (BMR) and daily calorie needs',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const calculateBMR = () => {
    if (age && height && weight) {
      let weightKg = weight;
      let heightCm = height;

      // Convert imperial to metric if needed
      if (!isMetric) {
        weightKg = weight * 0.453592;
        heightCm = height * 2.54;
      }

      // Mifflin-St Jeor Equation
      let bmrValue = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
      bmrValue = gender === 'male' ? bmrValue + 5 : bmrValue - 161;

      setBmr(Math.round(bmrValue));
      setAnimation(true);
    }
  };

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => setAnimation(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animation]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="max-w-6xl mx-auto pt-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              BMR Calculator
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Calculate your Basal Metabolic Rate - the amount of energy your body burns while at rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10" aria-label="BMR Calculator Form">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Settings Row */}
                <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  {/* Gender Toggle */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Gender
                    </label>
                    <div className="flex rounded-lg shadow-sm">
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-lg ${
                          gender === 'male'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-lg ${
                          gender === 'female'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        Female
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

                {/* Input Fields */}
                <div className="relative">
                  <label htmlFor="age" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Age (15-80)
                  </label>
                  <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="block w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                    placeholder="Enter your age"
                    min="15"
                    max="80"
                    required
                  />
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

                <div className="relative">
                  <label htmlFor="activity" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Activity Level
                  </label>
                  <select
                    id="activity"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="block w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    {Object.entries(activityMultipliers).map(([key, { label }]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  onClick={calculateBMR}
                  className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Calculate BMR"
                >
                  Calculate BMR
                </button>
              </form>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10" aria-label="BMR Results">
              {bmr ? (
                <div className={`space-y-8 ${animation ? 'animate-fade-in' : ''}`}>
                  <div className="p-8 rounded-xl bg-indigo-50 dark:bg-indigo-900/20">
                    <div className="text-6xl font-bold text-gray-900 dark:text-white mb-3">
                      {bmr}
                    </div>
                    <div className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
                      Base Calories/day
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      Daily Calorie Needs by Activity Level
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(activityMultipliers).map(([key, { factor, label }]) => (
                        <div
                          key={key}
                          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex justify-between items-center"
                        >
                          <span className="text-gray-700 dark:text-gray-300">{label}</span>
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            {Math.round(bmr * factor)} cal
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-xl text-gray-500 dark:text-gray-400">
                  Enter your details to see your BMR and daily calorie needs
                </div>
              )}
            </section>
          </div>

          <section className="mt-16 prose dark:prose-invert max-w-none">
            <h2>What is Basal Metabolic Rate (BMR)?</h2>
            <p>
              Basal Metabolic Rate (BMR) represents the minimum amount of energy your body needs to perform basic life-sustaining functions while at rest. These functions include breathing, blood circulation, cell production, and maintaining body temperature.
            </p>
            
            <h2>How to Use This BMR Calculator</h2>
            <ol>
              <li>Select your preferred unit system (Metric or Imperial)</li>
              <li>Choose your gender</li>
              <li>Enter your age (between 15-80 years)</li>
              <li>Input your height and weight</li>
              <li>Select your activity level</li>
              <li>Click "Calculate BMR" to see your results</li>
            </ol>

            <h2>Understanding Your Results</h2>
            <p>
              Your BMR calculation uses the Mifflin-St Jeor Equation, which is considered one of the most accurate methods for estimating basal metabolic rate. The calculator also provides adjusted calorie needs based on your activity level to help you maintain your current weight.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
