import React from 'react'
import ProductCard from './ProductCard';

async function getProducts() {
  try {
    const res = await fetch("https://next-store-server-alpha.vercel.app/products/featured", {
      cache: "no-store",
    });
    console.log(res)
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

const FeaturedProducts = async () => {
  const products = await getProducts();
  return (
    <div className='mt-10 min-h-screen'>
      <h2 className='text-2xl text-center font-bold'>Featured Products</h2>

      {products.length === 0 ? (
        <p className="">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

    </div>
  )
}

export default FeaturedProducts
