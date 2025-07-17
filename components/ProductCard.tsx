import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const featuredImage = product.metadata.product_images?.[0];

  return (
    <div className="card">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          {featuredImage && (
            <img
              src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={product.metadata.product_name}
              className="w-full h-48 object-cover"
            />
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {product.metadata.product_name}
          </h3>
          <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ 
            __html: product.metadata.description.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
          }} />
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-ranch-600">
              ${product.metadata.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              {product.metadata.weight}
            </span>
          </div>
          {product.metadata.in_stock ? (
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              In Stock
            </span>
          ) : (
            <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}