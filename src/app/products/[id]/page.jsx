import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

async function getProductById(id) {
    // use no-store so it always fetches fresh
    const res = await fetch(`http://localhost:5000/products/${id}`);

    if (!res.ok) {
        return null;
    }
    const data = await res.json();
    return data.product ?? null;
}

const ProductDetailsPage = async ({ params }) => {
    const { id } = params;
    const product = await getProductById(id);

    if (!product) {
        // Renders Next.js 404 page
        notFound();
    }

    return (
        <div className="max-w-screen-xl mx-auto px-6 py-10">
            <Link href="/all-products" className="text-sm text-blue-600">
                Back to products
            </Link>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded-lg"
                    />
                </div>

                <div className='space-y-6'>
                    <div>
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="text-gray-500">Price: <span className="font-semibold text-lg">${product.price}</span></p>
                    </div>
                    <p className="text-gray-700">{product.description}</p>

                    <div className="text-sm text-gray-500">
                        <p>Added: {new Date(product.createdAt).toLocaleDateString()}</p>
                        {/* show product id for debugging/admin */}
                    </div>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Product</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage
