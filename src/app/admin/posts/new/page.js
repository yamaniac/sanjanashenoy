'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import PostEditor from '@/components/admin/PostEditor';

export default function NewPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (postData) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        router.push(`/admin/posts/${postData.slug}`);
      } else {
        setError(data.message || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      setError('An error occurred while creating the post');
    } finally {
      setIsLoading(false);
    }
  };
  
  const initialPostData = {
    title: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
    lastUpdated: '',
    category: '',
    excerpt: '',
    description: '',
    author: 'Sanjana Shenoy',
    tags: [],
    thumbnail: '/images/blog/default-blog-image.jpg',
    image: '/images/blog/default-blog-image.jpg',
    image_alt: '',
    imageLicense: '',
    imageCredit: '',
    imageSource: '',
    video: '',
    references: [],
    content: ''
  };
  
  return (
    <AdminLayout>
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">New Post</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Create a new blog post</p>
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
      
      <PostEditor 
        postData={initialPostData} 
        onSubmit={handleSubmit} 
        isLoading={isLoading} 
        isNewPost={true}
      />
    </AdminLayout>
  );
} 