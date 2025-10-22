'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-white mb-4">⚠️ Error</h1>
        <p className="text-gray-400 text-lg mb-2">
          Something went wrong on this page.
        </p>
        <p className="text-gray-500 text-sm mb-8 font-mono break-words">
          {error.message || 'An unexpected error occurred'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
            Try Again
          </Button>
          <Button 
            className="bg-gray-700 hover:bg-gray-800"
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
