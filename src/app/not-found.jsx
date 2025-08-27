// app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="px-4 py-2 rounded border border-gray-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}