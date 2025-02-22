import { getPostData } from '@/lib/posts'

export async function GET(request, { params }) {
  try {
    // Await the params object before destructuring
    const resolvedParams = await params
    const { slug } = resolvedParams
    
    const post = await getPostData(slug)
    return Response.json(post)
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
} 