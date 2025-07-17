// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import ProductReviews from '@/components/ProductReviews';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found - Golden Hills Ranch',
    };
  }

  return {
    title: `${product.metadata.product_name} - Golden Hills Ranch`,
    description: product.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  if (!product) {
    notFound();
  }

  const reviews = await getProductReviews(product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
      <div className="mt-16">
        <ProductReviews reviews={reviews} />
      </div>
    </div>
  );
}