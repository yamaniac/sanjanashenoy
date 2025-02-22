import { getPostsData } from '@/lib/posts'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  
  const data = await getPostsData(page)
  
  return Response.json(data)
} 