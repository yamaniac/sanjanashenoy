import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { slug } = params

    // This is a placeholder - replace with your actual data fetching logic
    const post = {
      id: slug,
      title: 'Sample Blog Post',
      contentHtml: '<h2>Sample Content</h2><p>This is the blog post content...</p>',
      date: '2024-02-23',
      image: '/images/sample-post.jpg',
      author: 'Sanjana Shenoy',
      tags: ['nutrition', 'health']
    }

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error in /api/blog/[slug] route:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 