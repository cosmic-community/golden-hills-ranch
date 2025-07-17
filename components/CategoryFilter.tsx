import Link from 'next/link';
import { ProductCategory } from '@/types';

interface CategoryFilterProps {
  categories: ProductCategory[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/products"
        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
      >
        All Products
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="px-4 py-2 rounded-lg bg-ranch-100 hover:bg-ranch-200 text-ranch-700 transition-colors"
        >
          {category.metadata.category_name}
        </Link>
      ))}
    </div>
  );
}