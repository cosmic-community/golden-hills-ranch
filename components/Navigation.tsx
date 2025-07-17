import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-8">
      <Link href="/" className="text-gray-700 hover:text-ranch-600 transition-colors">
        Home
      </Link>
      <Link href="/products" className="text-gray-700 hover:text-ranch-600 transition-colors">
        Products
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-ranch-600 transition-colors">
        Blog
      </Link>
      <Link href="/about-golden-hills-ranch" className="text-gray-700 hover:text-ranch-600 transition-colors">
        About
      </Link>
      <Link href="/shipping-delivery" className="text-gray-700 hover:text-ranch-600 transition-colors">
        Shipping
      </Link>
    </nav>
  );
}