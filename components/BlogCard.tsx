import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card">
      <Link href={`/blog/${post.slug}`}>
        {post.metadata.featured_image && (
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={post.metadata.post_title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {post.metadata.post_title}
          </h3>
          <p className="text-gray-600 mb-4">
            {post.metadata.excerpt || post.metadata.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              By {post.metadata.author}
            </span>
            <span className="text-ranch-600 font-medium">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}