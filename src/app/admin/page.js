'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to ensure client-only components work properly
const AdminLayout = dynamic(() => import('@/components/admin/AdminLayout'), { ssr: false });

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    mdPosts: 0,
    dbPosts: 0,
    recentPosts: []
  });
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        
        if (response.ok) {
          const posts = data.posts || [];
          const mdPosts = posts.filter(post => post.isMdFile).length;
          const dbPosts = posts.filter(post => !post.isMdFile).length;
          
          setStats({
            totalPosts: posts.length,
            mdPosts,
            dbPosts,
            recentPosts: posts.slice(0, 5) // Get 5 most recent posts
          });
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, []);
  
  return (
    <AdminLayout>
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Blog post management overview</p>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <>
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Total Posts</h2>
              <p className="mt-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stats.totalPosts}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Markdown Posts</h2>
              <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">{stats.mdPosts}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Database Posts</h2>
              <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.dbPosts}</p>
            </div>
          </div>
          
          {/* Recent posts */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Posts</h2>
              <Link 
                href="/admin/posts" 
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                View all
              </Link>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {stats.recentPosts.length > 0 ? (
                stats.recentPosts.map((post) => (
                  <div key={post.slug} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Link 
                          href={`/admin/posts/${post.slug}`} 
                          className="text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          {post.title}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {new Date(post.date).toLocaleDateString()} - {post.isMdFile ? 'Markdown File' : 'Database Post'}
                        </p>
                      </div>
                      <Link 
                        href={`/admin/posts/${post.slug}`} 
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-md text-sm"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-4 text-gray-500 dark:text-gray-400">
                  No posts found. <Link href="/admin/posts/new" className="text-indigo-600 dark:text-indigo-400">Create your first post</Link>.
                </div>
              )}
            </div>
          </div>
          
          {/* Quick actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/admin/posts/new" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow p-6 flex items-center justify-between transition-colors duration-200"
            >
              <div>
                <h3 className="text-lg font-medium">Create New Post</h3>
                <p className="text-indigo-100 mt-1">Start writing a new blog post</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Link>
            
            <Link 
              href="/blog" 
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow p-6 flex items-center justify-between transition-colors duration-200"
            >
              <div>
                <h3 className="text-lg font-medium">View Blog</h3>
                <p className="text-gray-300 mt-1">See how your blog looks to visitors</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </AdminLayout>
  );
} 