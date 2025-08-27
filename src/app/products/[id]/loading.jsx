// app/products/[id]/loading.jsx
export default function Loading() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse">
            {/* Image placeholder */}
            <div className="h-80 w-full bg-gray-200 rounded-t-lg dark:bg-gray-700" />

            {/* Content placeholder */}
            <div className="px-5 pb-5 mt-2 space-y-3">
                {/* Product name */}
                <div className="h-6 w-3/4 bg-gray-200 rounded dark:bg-gray-700" />

                {/* Price and button */}
                <div className="flex items-center justify-between mt-2">
                    <div className="h-8 w-1/4 bg-gray-200 rounded dark:bg-gray-700" />
                    <div className="h-8 w-24 bg-gray-200 rounded dark:bg-gray-700" />
                </div>
            </div>
        </div>
    );
}