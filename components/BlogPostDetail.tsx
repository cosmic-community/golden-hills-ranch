import { BlogPost } from '@/types';

interface BlogPostDetailProps {
  post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {post.metadata.featured_image && (
        <div className="mb-8">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata.post_title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      )}
      
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.metadata.post_title}
        </h1>
        
        <div className="flex items-center text-gray-600 mb-4">
          <span>By {post.metadata.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
        
        {post.metadata.excerpt && (
          <p className="text-xl text-gray-700 mb-6">
            {post.metadata.excerpt}
          </p>
        )}
      </div>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.metadata.content }}
      />
    </div>
  );
}