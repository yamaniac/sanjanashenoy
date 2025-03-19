import Link from 'next/link';
import connectToDatabase from '@/lib/mongodb';
import Post from '@/models/Post';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TestMongoDBPost() {
  let post = null;
  let error = null;
  
  try {
    console.log('Connecting to MongoDB...');
    await connectToDatabase();
    
    console.log('Fetching test post from MongoDB...');
    post = await Post.findOne({ slug: 'this_is_a_test_post' }).lean();
    
    if (!post) {
      throw new Error('Test post not found in MongoDB');
    }
    
    console.log(`Found post: ${post.title}`);
  } catch (err) {
    console.error('Error fetching MongoDB post:', err);
    error = err;
  }
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">MongoDB Post Test</h1>
      
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8">
          <h2 className="font-bold mb-2">Error loading post:</h2>
          <p className="mb-2">{error.message}</p>
          <pre className="bg-red-50 p-3 rounded text-sm overflow-auto">
            {error.stack}
          </pre>
        </div>
      ) : post ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              MongoDB Post
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              <strong>ID:</strong> {post._id.toString()}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Slug:</strong> {post.slug}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Excerpt:</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Content:</h3>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <p className="text-gray-500 italic">No content available</p>
                )}
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href={`/blog/${post.slug}`} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                View on Blog
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          No post data available.
        </div>
      )}
      
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
} 