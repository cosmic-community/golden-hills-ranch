import { getProducts, getProductCategories } from '@/lib/cosmic';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata = {
  title: 'Products - Golden Hills Ranch',
  description: 'Browse our selection of premium grass-fed beef products including steaks, ground beef, and roasts.',
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getProductCategories()
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">
          Premium grass-fed beef from Golden Hills Ranch, raised with care for over 70 years.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter categories={categories} />
      </div>

      <ProductGrid products={products} />
    </div>
  );
}