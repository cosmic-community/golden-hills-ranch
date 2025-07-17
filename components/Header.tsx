import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-ranch-600">Golden Hills Ranch</h1>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}