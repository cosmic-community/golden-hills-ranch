import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Golden Hills Ranch</h3>
            <p className="text-earth-200">
              Premium grass-fed beef from Montana's golden prairies for over 70 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/premium-steaks" className="text-earth-200 hover:text-white transition-colors">
                  Premium Steaks
                </Link>
              </li>
              <li>
                <Link href="/categories/ground-beef" className="text-earth-200 hover:text-white transition-colors">
                  Ground Beef
                </Link>
              </li>
              <li>
                <Link href="/categories/roasts" className="text-earth-200 hover:text-white transition-colors">
                  Roasts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-golden-hills-ranch" className="text-earth-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-delivery" className="text-earth-200 hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-earth-200 hover:text-white transition-colors">
                  Ranch Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-earth-200">
              <p>orders@goldenhillsranch.com</p>
              <p>(555) 123-4567</p>
              <p>Montana, USA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-earth-600 mt-8 pt-8 text-center text-earth-200">
          <p>&copy; 2024 Golden Hills Ranch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}