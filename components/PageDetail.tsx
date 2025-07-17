import { Page } from '@/types';

interface PageDetailProps {
  page: Page;
}

export default function PageDetail({ page }: PageDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {page.metadata.page_image && (
        <div className="mb-8">
          <img
            src={`${page.metadata.page_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={page.metadata.page_title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      )}
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {page.metadata.page_title}
      </h1>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: page.metadata.content }}
      />
    </div>
  );
}