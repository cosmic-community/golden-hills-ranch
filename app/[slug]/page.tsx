// app/[slug]/page.tsx
import { getPage } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import PageDetail from '@/components/PageDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);
  
  if (!page) {
    return {
      title: 'Page Not Found - Golden Hills Ranch',
    };
  }

  return {
    title: `${page.metadata.page_title} - Golden Hills Ranch`,
    description: page.metadata.content.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);
  
  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageDetail page={page} />
    </div>
  );
}