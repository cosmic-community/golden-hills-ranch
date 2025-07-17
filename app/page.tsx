import { getFeaturedProducts, getReviews, getBlogPosts } from '@/lib/cosmic';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomerReviews from '@/components/CustomerReviews';
import LatestBlog from '@/components/LatestBlog';

export default async function HomePage() {
  const [featuredProducts, reviews, blogPosts] = await Promise.all([
    getFeaturedProducts(),
    getReviews(),
    getBlogPosts()
  ]);

  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <CustomerReviews reviews={reviews.slice(0, 3)} />
      <LatestBlog posts={blogPosts} />
    </div>
  );
}