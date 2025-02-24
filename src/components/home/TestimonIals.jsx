export default function Testimonials() {
  const testimonials = [
    {
      body: 'Dt. Sanjana helped me achieve my health goals through personalized nutrition plans. Her approach is scientific and practical, making it easy to follow.',
      author: {
        name: 'Priya Sharma',
        handle: 'Homemaker',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
        rating: 5,
        gender: 'female'
      },
    },
    {
      body: 'The diet plan was perfectly tailored to my lifestyle. I\'ve seen remarkable improvements in my energy levels and overall health.',
      author: {
        name: 'Rahul Nair',
        handle: 'Software Engineer',
        imageUrl: '/images/testimonials/testimonial2.jpg',
        rating: 5,
        gender: 'male'
      },
    },
    {
      body: 'Professional, knowledgeable, and supportive throughout my weight loss journey. Highly recommend her services!',
      author: {
        name: 'Meera Patel',
        handle: 'Business Owner',
        imageUrl: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=300&auto=format&fit=crop',
        rating: 5,
        gender: 'female'
      },
    },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              Over 2000+ Happy Clients
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
            Success Stories from Happy Clients            </h2>
          </div>

          <div className="relative mt-10 md:mt-24">
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.name} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-900 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(testimonial.author.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 dark:text-white">
                          "{testimonial.body}"
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      {testimonial.author.gender === 'female' ? (
                        <svg className="flex-shrink-0 w-11 h-11 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      ) : (
                        <svg className="flex-shrink-0 w-11 h-11 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      )}
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          {testimonial.author.name}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.author.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  