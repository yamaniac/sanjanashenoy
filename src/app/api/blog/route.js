import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // This is a placeholder - replace with your actual data fetching logic
    const posts = [
      {
        id: '1',
        title: 'Sample Blog Post',
        excerpt: 'This is a sample blog post excerpt...',
        date: '2024-02-23',
        image: '/images/sample-post.jpg',
        author: 'Sanjana Shenoy',
        tags: ['nutrition', 'health']
      }
      // Add more sample posts as needed
    ]

    return NextResponse.json({
      posts,
      pagination: {
        currentPage: 1,
        totalPages: 1
      }
    })
  } catch (error) {
    console.error('Error in /api/blog route:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 