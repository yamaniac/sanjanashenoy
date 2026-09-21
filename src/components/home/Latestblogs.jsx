import Image from 'next/image'
import Link from 'next/link'

export default function Latestblogs({ posts = [] }) {
    return (
        <div className="bg-[#FBF7F2] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Latest from the Blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-stone-700">
              Expert insights, tips, and advice for your nutrition journey.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.slice(0, 6).map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={post.image || "/images/blog-placeholder.jpg"}
                    alt={post.title}
                    title={post.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full bg-stone-200 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    priority={false}
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-6 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-stone-600">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="relative z-10 font-medium text-stone-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-medium leading-6 text-gray-900 group-hover:text-teal-800">
                      <Link href={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-stone-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
}
