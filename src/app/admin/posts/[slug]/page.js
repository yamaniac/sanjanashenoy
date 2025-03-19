'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import PostEditor from '@/components/admin/PostEditor';

export default function EditPostPage({ params }) {
  const { slug } = params;
  const router = useRouter();
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}`);
        const data = await response.json();
        
        if (response.ok) {
          setPostData(data.post);
        } else {
          setError(data.message || 'Failed to load post');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('An error occurred while loading the post');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  const handleSubmit = async (updatedPostData) => {
    setIsSaving(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPostData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSuccess('Post updated successfully!');
        setPostData(data.post);
        
        // If slug changed, redirect to new URL
        if (updatedPostData.slug !== slug) {
          router.push(`/admin/posts/${updatedPostData.slug}`);
        }
      } else {
        setError(data.message || 'Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      setError('An error occurred while updating the post');
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <AdminLayout>
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Edit Post</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {postData?.isMdFile ? 'Editing Markdown post' : 'Edit blog post'}
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700 dark:text-green-200">{success}</p>
            </div>
          </div>
        </div>
      )}
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : postData ? (
        <PostEditor 
          postData={postData} 
          onSubmit={handleSubmit} 
          isLoading={isSaving} 
          isNewPost={false}
          isMarkdownFile={postData.isMdFile}
        />
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-200">Post not found. <button onClick={() => router.push('/admin/posts')} className="font-medium underline">Go back to posts</button>.</p>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
} 