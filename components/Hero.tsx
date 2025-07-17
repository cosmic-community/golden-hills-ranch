import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-earth-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('https://imgix.cosmicjs.com/8bd6ef60-a045-11ed-81f2-f50e185dd248-YFFGkE3y4F8.jpg?w=1800&h=800&fit=crop&auto=format,compress')"
        }}
      />
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Grass-Fed Beef from Montana
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Family-owned and operated for over 70 years, Golden Hills Ranch delivers 
            the finest grass-fed beef straight from our pastures to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="btn-primary text-center"
            >
              Shop Our Products
            </Link>
            <Link
              href="/about-golden-hills-ranch"
              className="btn-secondary text-center"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}