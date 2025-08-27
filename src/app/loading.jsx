// app/products/[id]/loading.jsx
export default function Loading() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 animate-pulse">
      <div className="h-64 bg-gray-200 rounded mb-6" />
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  );
}