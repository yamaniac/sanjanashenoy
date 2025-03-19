'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PostEditor({ postData, onSubmit, isLoading, isNewPost, isMarkdownFile = false }) {
  const [formData, setFormData] = useState(postData);
  const [tagInput, setTagInput] = useState('');
  const [referenceInput, setReferenceInput] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    url: ''
  });
  const router = useRouter();
  
  useEffect(() => {
    // Update form data when postData changes (e.g., after saving)
    setFormData(postData);
  }, [postData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()]
        }));
      }
      setTagInput('');
    }
  };
  
  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };
  
  const handleReferenceInputChange = (e) => {
    const { name, value } = e.target;
    setReferenceInput(prev => ({ ...prev, [name]: value }));
  };
  
  const addReference = () => {
    if (referenceInput.title.trim() && referenceInput.authors.trim()) {
      setFormData(prev => ({
        ...prev,
        references: [...prev.references, { ...referenceInput }]
      }));
      
      setReferenceInput({
        title: '',
        authors: '',
        journal: '',
        year: '',
        url: ''
      });
    }
  };
  
  const removeReference = (index) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const generateSlugFromTitle = () => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '_');
      
      setFormData(prev => ({ ...prev, slug }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Main post info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Post Information</h2>
            
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="Post title"
                  />
                </div>
              </div>
              
              {/* Slug */}
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Slug*
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    required
                    value={formData.slug}
                    onChange={handleChange}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="post-slug-here"
                  />
                  <button
                    type="button"
                    onClick={generateSlugFromTitle}
                    className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-md bg-gray-50 dark:bg-gray-600 text-gray-500 dark:text-gray-300 text-sm"
                  >
                    Generate
                  </button>
                </div>
              </div>
              
              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Publication Date*
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date ? new Date(formData.date).toISOString().split('T')[0] : ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              {/* Last Updated */}
              <div>
                <label htmlFor="lastUpdated" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Updated <span className="text-gray-500">(optional)</span>
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="lastUpdated"
                    name="lastUpdated"
                    value={formData.lastUpdated ? new Date(formData.lastUpdated).toISOString().split('T')[0] : ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category <span className="text-gray-500">(optional)</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="e.g. Food Products"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Content</h2>
            
            <div className="space-y-4">
              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Excerpt*
                </label>
                <div className="mt-1">
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={2}
                    required
                    value={formData.excerpt || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="Brief summary of the post"
                  />
                </div>
              </div>
              
              {/* Description (for SEO) */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description (for SEO) <span className="text-gray-500">(optional)</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={2}
                    value={formData.description || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="SEO description"
                  />
                </div>
              </div>
              
              {/* Main Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Content* {isMarkdownFile && <span className="text-amber-600">(Markdown file - read-only)</span>}
                </label>
                <div className="mt-1">
                  <textarea
                    id="content"
                    name="content"
                    rows={16}
                    required
                    value={formData.content || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white font-mono"
                    placeholder="Post content in Markdown format"
                    readOnly={isMarkdownFile}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Use Markdown for formatting. {isMarkdownFile && "This content is from a Markdown file and can't be edited directly here."}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - Meta information */}
        <div className="space-y-6">
          {/* Author */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Author</h2>
            
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Author Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author || ''}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Author name"
                />
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Tags</h2>
            
            <div>
              <label htmlFor="tagInput" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Add Tags
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="tagInput"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagInputKeyDown}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Press Enter to add tag"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.tags && formData.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {tag}
                    <button 
                      type="button" 
                      onClick={() => removeTag(tag)} 
                      className="ml-1.5 inline-flex text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                    >
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Images</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Main Image URL
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="/images/blog/image.jpg"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Thumbnail URL (if different)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="thumbnail"
                    name="thumbnail"
                    value={formData.thumbnail || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="/images/blog/thumbnail.jpg"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="image_alt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Image Alt Text
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="image_alt"
                    name="image_alt"
                    value={formData.image_alt || ''}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="Description of the image"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="imageLicense" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    License
                  </label>
                  <input
                    type="text"
                    id="imageLicense"
                    name="imageLicense"
                    value={formData.imageLicense || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="imageCredit" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Credit
                  </label>
                  <input
                    type="text"
                    id="imageCredit"
                    name="imageCredit"
                    value={formData.imageCredit || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="imageSource" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Source
                  </label>
                  <input
                    type="text"
                    id="imageSource"
                    name="imageSource"
                    value={formData.imageSource || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Video */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Video</h2>
            
            <div>
              <label htmlFor="video" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Video Embed URL <span className="text-gray-500">(optional)</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="video"
                  name="video"
                  value={formData.video || ''}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="https://www.youtube.com/embed/VIDEO_ID"
                />
              </div>
            </div>
          </div>
          
          {/* References */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">References</h2>
            
            <div className="space-y-4">
              {/* Reference List */}
              {formData.references && formData.references.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Current References</h3>
                  {formData.references.map((ref, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md relative">
                      <button
                        type="button"
                        onClick={() => removeReference(index)}
                        className="absolute top-1 right-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <p className="text-sm font-medium">{ref.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{ref.authors}</p>
                      {ref.journal && <p className="text-xs text-gray-500 dark:text-gray-400">{ref.journal}, {ref.year}</p>}
                      {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">{ref.url}</a>}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Add Reference Form */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Add New Reference</h3>
                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Title*"
                      name="title"
                      value={referenceInput.title}
                      onChange={handleReferenceInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Authors*"
                      name="authors"
                      value={referenceInput.authors}
                      onChange={handleReferenceInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Journal"
                      name="journal"
                      value={referenceInput.journal}
                      onChange={handleReferenceInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Year"
                      name="year"
                      value={referenceInput.year}
                      onChange={handleReferenceInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      name="url"
                      value={referenceInput.url}
                      onChange={handleReferenceInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={addReference}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Reference
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Actions */}
      <div className="flex justify-end space-x-3 px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg">
        <button
          type="button"
          onClick={() => router.push('/admin/posts')}
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </>
          ) : (
            <>{isNewPost ? 'Create Post' : 'Update Post'}</>
          )}
        </button>
      </div>
    </form>
  );
} 