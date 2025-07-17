// app/categories/[slug]/page.tsx
import { getProductCategory, getProductsByCategory } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getProductCategory(slug);
  
  if (!category) {
    return {
      title: 'Category Not Found - Golden Hills Ranch',
    };
  }

  return {
    title: `${category.metadata.category_name} - Golden Hills Ranch`,
    description: category.metadata.description || `Browse our selection of ${category.metadata.category_name.toLowerCase()} products.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getProductCategory(slug);
  
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {category.metadata.category_name}
        </h1>
        {category.metadata.description && (
          <p className="text-lg text-gray-600">
            {category.metadata.description}
          </p>
        )}
      </div>

      <ProductGrid products={products} />
    </div>
  );
}