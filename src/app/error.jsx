// app/error.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log to an error reporting service if you want
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] grid place-items-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          An unexpected error occurred. You can try again or go back home.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded border border-gray-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}