import Link from 'next/link';
import { BlogPost } from '@/types';
import BlogCard from '@/components/BlogCard';

interface LatestBlogProps {
  posts: BlogPost[];
}

export default function LatestBlog({ posts }: LatestBlogProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">From the Ranch</h2>
        <p className="text-lg text-gray-600">
          Stories and insights from Golden Hills Ranch
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/blog" className="btn-primary">
          Read More Stories
        </Link>
      </div>
    </section>
  );
}