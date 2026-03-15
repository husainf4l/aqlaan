'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-bold text-white mb-4">⚠️ Something went wrong</h1>
            <p className="text-gray-300 text-lg mb-2">
              An unexpected error occurred.
            </p>
            <p className="text-gray-400 opacity-80 text-sm mb-8 font-mono break-words">
              {error.message || 'Unknown error'}
            </p>
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mr-4"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
            >
              Go Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}