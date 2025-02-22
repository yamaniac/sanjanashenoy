import Image from 'next/image'
import Link from 'next/link'

const AuthorCard = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        About the Author
      </h2>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-6">
          <Image
            src="/images/author.png"
            fill
            alt="Sanjana Shenoy"
            className="rounded-full object-cover shadow-md border-2 border-gray-200 dark:border-gray-700"
            sizes="128px"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Sanjana Shenoy
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Registered Dietitian & Nutritionist with expertise in clinical nutrition and wellness coaching.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
        >
          Read More 
          <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default AuthorCard; 