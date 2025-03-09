import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const caseFilesDirectory = path.join(process.cwd(), 'posts/case-files');

export async function getAllCaseFiles() {
  const files = await fs.readdir(caseFilesDirectory);
  
  // First, filter out directories
  const markdownFiles = [];
  for (const fileName of files) {
    const stat = await fs.stat(path.join(caseFilesDirectory, fileName));
    if (!stat.isDirectory() && fileName.endsWith('.md')) {
      markdownFiles.push(fileName);
    }
  }

  const caseFiles = await Promise.all(
    markdownFiles.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(caseFilesDirectory, file);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data
      };
    })
  );

  return caseFiles.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}

export async function getCaseFileBySlug(slug) {
  const fullPath = path.join(caseFilesDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Return all frontmatter data along with the content
  return {
    slug,
    content,
    ...data, // This spreads all frontmatter fields including title, id, date, category, symptoms, etc.
  };
} 