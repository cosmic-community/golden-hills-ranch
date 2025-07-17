import { getBlogPosts } from '@/lib/cosmic';
import BlogGrid from '@/components/BlogGrid';

export const metadata = {
  title: 'Ranch Blog - Golden Hills Ranch',
  description: 'Read stories from Golden Hills Ranch about grass-fed beef, ranch life, and our farming practices.',
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ranch Blog</h1>
        <p className="text-lg text-gray-600">
          Stories from Golden Hills Ranch about grass-fed beef, ranch life, and our farming practices.
        </p>
      </div>

      <BlogGrid posts={blogPosts} />
    </div>
  );
}