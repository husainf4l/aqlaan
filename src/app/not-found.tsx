import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-blue-400 mb-4">404</h1>
        <p className="text-[var(--muted)] text-lg mb-2">
          Page not found
        </p>
        <p className="text-[var(--muted)] opacity-80 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
