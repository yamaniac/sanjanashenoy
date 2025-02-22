import { NextResponse } from 'next/server'
import { getPostsData } from '@/lib/posts'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    
    const data = await getPostsData(page)
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
} 