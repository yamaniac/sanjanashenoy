import { createTestPost } from '@/lib/posts';

export default async function DebugPage() {
  let result = { success: false, message: 'No action performed' };
  
  try {
    if (process.env.NODE_ENV === 'development') {
      const testPost = await createTestPost();
      result = { 
        success: true, 
        message: 'Test post created successfully',
        post: {
          id: testPost._id.toString(),
          title: testPost.title,
          slug: testPost.slug,
          link: `/blog/${testPost.slug}`
        }
      };
    } else {
      result = { success: false, message: 'Debug page only available in development mode' };
    }
  } catch (error) {
    result = { success: false, message: error.message, stack: error.stack };
  }
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Debug Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Test Post Creation Result</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
          {JSON.stringify(result, null, 2)}
        </pre>
        
        {result.success && (
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Post Created</h3>
            <p>Title: {result.post.title}</p>
            <p>Slug: {result.post.slug}</p>
            <a 
              href={result.post.link} 
              className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Post
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 