// app/blog/[slug]/page.tsx
import { getBlogPost } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/BlogPostDetail';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Golden Hills Ranch',
    };
  }

  return {
    title: `${post.metadata.post_title} - Golden Hills Ranch Blog`,
    description: post.metadata.excerpt || post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPostDetail post={post} />
    </div>
  );
}