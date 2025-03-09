import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPosts() {
  const files = await fs.readdir(postsDirectory)
  
  // First, filter out directories
  const markdownFiles = []
  for (const fileName of files) {
    const stat = await fs.stat(path.join(postsDirectory, fileName))
    if (!stat.isDirectory() && fileName.endsWith('.md')) {
      markdownFiles.push(fileName)
    }
  }

  // Then process the markdown files
  const allPostsData = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        id,
        ...matterResult.data
      }
    })
  )

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostsData(page = 1, limit = 10) {
  const files = await fs.readdir(postsDirectory)
  
  // First, filter out directories
  const markdownFiles = []
  for (const fileName of files) {
    const stat = await fs.stat(path.join(postsDirectory, fileName))
    if (!stat.isDirectory() && fileName.endsWith('.md')) {
      markdownFiles.push(fileName)
    }
  }

  const allPostsData = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        id,
        ...matterResult.data,
        featuredImage: matterResult.data.image
      }
    })
  )

  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  const totalPosts = sortedPosts.length
  const totalPages = Math.ceil(totalPosts / limit)
  const offset = (page - 1) * limit
  const paginatedPosts = sortedPosts.slice(offset, offset + limit)

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts
    }
  }
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export async function getAllPosts() {
  const files = await fs.readdir(postsDirectory)
  
  // First, filter out directories
  const markdownFiles = []
  for (const fileName of files) {
    const stat = await fs.stat(path.join(postsDirectory, fileName))
    if (!stat.isDirectory() && fileName.endsWith('.md')) {
      markdownFiles.push(fileName)
    }
  }

  const posts = await Promise.all(
    markdownFiles.map(async (file) => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, file)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      }
    })
  )

  return posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
  }
}

export async function getBlogPosts(page = 1, postsPerPage = 9) {
  try {
    const files = await fs.readdir(postsDirectory)
    
    // First, filter out directories
    const markdownFiles = []
    for (const fileName of files) {
      const stat = await fs.stat(path.join(postsDirectory, fileName))
      if (!stat.isDirectory() && fileName.endsWith('.md')) {
        markdownFiles.push(fileName)
      }
    }

    const allPosts = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(postsDirectory, file)
        const fileContent = await fs.readFile(filePath, 'utf8')
        const { data } = matter(fileContent)
        
        return {
          ...data,
          slug: file.replace('.md', ''),
        }
      })
    )

    const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
    const totalPosts = sortedPosts.length
    const totalPages = Math.ceil(totalPosts / postsPerPage)
    const startIndex = (page - 1) * postsPerPage
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage)

    return { 
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        postsPerPage
      }
    }
  } catch (error) {
    console.error('Error reading blog posts:', error)
    throw error
  }
} 