import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <p className="text-base font-semibold text-primary-600">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 