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
  let dbPosts = [];
  let mdPosts = [];
  
  // Try to get database posts
  try {
    // Connect to the database
    const connectToDatabase = (await import('@/lib/mongodb')).default;
    await connectToDatabase();
    
    // Import the Post model
    const Post = (await import('@/models/Post')).default;
    
    // Fetch all posts from MongoDB
    const posts = await Post.find().lean();
    
    // Format MongoDB posts
    dbPosts = posts.map(post => ({
      slug: post.slug,
      title: post.title || 'Untitled Post',
      date: post.date || new Date(),
      excerpt: post.excerpt || 'No excerpt available',
      image: post.image || post.thumbnail || '/default-blog-image.jpg',
      source: 'database'
    }));
    
    console.log(`getAllPosts: Successfully fetched ${dbPosts.length} posts from database`);
  } catch (dbError) {
    console.error('getAllPosts: Error fetching from database:', dbError);
  }
  
  // Get markdown posts
  try {
    const files = await fs.readdir(postsDirectory);
    
    // First, filter out directories
    const markdownFiles = [];
    for (const fileName of files) {
      const stat = await fs.stat(path.join(postsDirectory, fileName));
      if (!stat.isDirectory() && fileName.endsWith('.md')) {
        markdownFiles.push(fileName);
      }
    }
    
    mdPosts = await Promise.all(
      markdownFiles.map(async (file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, file);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug,
          title: data.title || 'Untitled Post',
          date: data.date || new Date(),
          excerpt: data.excerpt || 'No excerpt available',
          image: data.image || '/default-blog-image.jpg',
          source: 'markdown'
        };
      })
    );
    
    console.log(`getAllPosts: Successfully fetched ${mdPosts.length} posts from markdown files`);
  } catch (mdError) {
    console.error('getAllPosts: Error fetching from markdown files:', mdError);
  }
  
  // Combine and sort all posts
  const allPosts = [...dbPosts, ...mdPosts];
  
  return allPosts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}

export async function getPostBySlug(slug) {
  console.log(`Starting getPostBySlug for slug: "${slug}"`);
  
  let dbError = null;
  
  // First try to get the post from MongoDB
  try {
    // Connect to the database
    console.log('Attempting to connect to MongoDB...');
    const connectToDatabase = (await import('@/lib/mongodb')).default;
    const mongoose = await connectToDatabase();
    console.log(`MongoDB connection state: ${mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'}`);
    
    // Import the Post model
    const Post = (await import('@/models/Post')).default;
    
    // Try to find the post in MongoDB
    console.log(`Looking for post with slug "${slug}" in MongoDB...`);
    const dbPost = await Post.findOne({ slug }).lean();
    
    if (dbPost) {
      console.log(`Found post "${slug}" in database with title: "${dbPost.title}"`);
      
      // Dump post structure for debugging
      console.log('MongoDB post structure:', JSON.stringify({
        _id: dbPost._id?.toString(),
        title: dbPost.title,
        slug: dbPost.slug,
        hasContent: !!dbPost.content,
        contentLength: dbPost.content?.length
      }));
      
      // Format the MongoDB post
      return {
        slug,
        title: dbPost.title || 'Untitled Post',
        date: dbPost.date || new Date(),
        content: dbPost.content || '',
        excerpt: dbPost.excerpt || '',
        image: dbPost.image || dbPost.thumbnail || '/default-blog-image.jpg',
        tags: dbPost.tags || [],
        category: dbPost.category || '',
        author: dbPost.author || 'Sanjana M Shenoy',
        source: 'database',
        contentHtml: dbPost.content || ''  // This will need to be processed by the page component
      };
    } else {
      console.log(`No post found in MongoDB with slug "${slug}"`);
    }
  } catch (error) {
    dbError = error;
    console.error('Error fetching from database:', dbError);
  }
  
  // If not found in MongoDB, try to get from markdown file
  try {
    console.log(`Trying to find post "${slug}" in markdown files`);
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    console.log(`Found post "${slug}" in markdown files with title: "${data.title}"`);
    
    return {
      slug,
      ...data,
      content,
      source: 'markdown'
    };
  } catch (mdError) {
    console.error(`Error fetching post "${slug}" from markdown files:`, mdError);
    
    // Add a more descriptive error
    throw new Error(`Post with slug "${slug}" not found in either database or markdown files. MongoDB error: ${dbError?.message || 'None'}, Markdown error: ${mdError.message}`);
  }
}

export async function getBlogPosts(page = 1, postsPerPage = 9) {
  try {
    // Initialize arrays for both post types
    let dbPosts = [];
    let mdPosts = [];
    
    // Try to get database posts
    try {
      // Connect to the database
      const connectToDatabase = (await import('@/lib/mongodb')).default;
      await connectToDatabase();
      
      // Import the Post model
      const Post = (await import('@/models/Post')).default;
      
      // Fetch all posts from MongoDB (without pagination yet)
      const posts = await Post.find()
        .sort({ date: -1 })
        .lean(); // Convert MongoDB documents to plain JS objects
      
      // Format MongoDB posts
      dbPosts = posts.map(post => {
        // Ensure image has a valid URL or path
        let imageUrl = post.image || post.thumbnail;
        
        // If the image URL is invalid or missing, use default
        if (!imageUrl || imageUrl === 'test' || typeof imageUrl !== 'string') {
          imageUrl = '/default-blog-image.jpg';
        } else if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://') && !imageUrl.startsWith('/')) {
          // Add leading slash to relative paths
          imageUrl = `/${imageUrl}`;
        }
        
        return {
          title: post.title || 'Untitled Post',
          slug: post.slug,
          date: post.date || new Date(),
          excerpt: post.excerpt || 'No excerpt available',
          image: imageUrl,
          tags: post.tags || [],
          category: post.category || '',
          author: post.author || 'Sanjana M Shenoy',
          source: 'database'
        };
      });
      
      console.log(`Successfully fetched ${dbPosts.length} posts from database`);
    } catch (dbError) {
      console.error('Error fetching from database:', dbError);
    }
    
    // Now get markdown posts
    try {
      const files = await fs.readdir(postsDirectory);
      
      // First, filter out directories
      const markdownFiles = [];
      for (const fileName of files) {
        const stat = await fs.stat(path.join(postsDirectory, fileName));
        if (!stat.isDirectory() && fileName.endsWith('.md')) {
          markdownFiles.push(fileName);
        }
      }
      
      // Process markdown files
      mdPosts = await Promise.all(
        markdownFiles.map(async (file) => {
          const filePath = path.join(postsDirectory, file);
          const fileContent = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContent);
          
          // Ensure image has a valid URL or path
          let imageUrl = data.image || data.thumbnail;
          
          // If the image URL is invalid or missing, use default
          if (!imageUrl || imageUrl === 'test' || typeof imageUrl !== 'string') {
            imageUrl = '/default-blog-image.jpg';
          } else if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://') && !imageUrl.startsWith('/')) {
            // Add leading slash to relative paths
            imageUrl = `/${imageUrl}`;
          }
          
          return {
            ...data,
            slug: file.replace(/\.md$/, ''),
            title: data.title || 'Untitled Post',
            excerpt: data.excerpt || 'No excerpt available',
            image: imageUrl,
            date: data.date || new Date(),
            tags: data.tags || [],
            source: 'markdown',
            isMdFile: true
          };
        })
      );
      
      console.log(`Successfully fetched ${mdPosts.length} posts from markdown files`);
    } catch (mdError) {
      console.error('Error fetching from markdown files:', mdError);
    }
    
    // Combine both post types and sort by date
    const allPosts = [...dbPosts, ...mdPosts].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
    
    console.log(`Combined ${allPosts.length} total posts`);
    
    // Apply pagination
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (page - 1) * postsPerPage;
    const paginatedPosts = allPosts.slice(startIndex, startIndex + postsPerPage);
    
    return { 
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        postsPerPage
      }
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

// Test function to create a MongoDB post
export async function createTestPost() {
  try {
    // Connect to the database
    const connectToDatabase = (await import('@/lib/mongodb')).default;
    await connectToDatabase();
    
    // Import the Post model
    const Post = (await import('@/models/Post')).default;
    
    // Create a unique slug with timestamp
    const timestamp = Date.now();
    const slug = `test-post-${timestamp}`;
    
    // Create test post
    const testPost = {
      title: `Test Post ${timestamp}`,
      slug: slug,
      date: new Date(),
      excerpt: 'This is a test post created via API to verify MongoDB connectivity.',
      content: `<h1>Test Post</h1><p>This is a test post created at ${new Date().toISOString()}.</p>`,
      category: 'Test',
      tags: ['test', 'api', 'mongodb'],
      image: '/default-blog-image.jpg',
      author: 'Test User'
    };
    
    console.log(`Creating test post with slug: ${slug}`);
    const post = await Post.create(testPost);
    
    console.log(`Successfully created test post with id: ${post._id}`);
    return post;
  } catch (error) {
    console.error('Error creating test post:', error);
    throw error;
  }
} 