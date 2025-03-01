export default function Disclaimer() {
  return (
    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Medical Disclaimer
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        The content provided in this article is for informational purposes only and is not intended as medical advice, 
        diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any 
        questions you may have regarding a medical condition. Never disregard professional medical advice or delay in 
        seeking it because of something you have read on this website. 
      </p>
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
        For more information, please read our{' '}
        <a 
          href="/disclaimer" 
          aria-label="Full Disclaimer"
          title="Full Disclaimer for the website"
          alt="Full Disclaimer for the website"
          className="text-blue-600 dark:text-teal-300 underline hover:underline"
        >
          full disclaimer
        </a>
        .
      </p>
    </div>
  )
} 