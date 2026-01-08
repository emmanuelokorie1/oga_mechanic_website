"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-red-600" />
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Something went wrong!
      </h2>
      
      <p className="text-gray-600 text-lg max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error has occurred while processing your request.
      </p>

      <div className="flex gap-4">
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Try again
        </button>
        <a
          href="/"
          className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
