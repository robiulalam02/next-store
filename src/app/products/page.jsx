import ProductCard from '@/components/ProductCard';
import React from 'react'

async function getProducts() {
  try {
    const res = await fetch("http://localhost:5000/products");
    console.log(res)
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

const AllProducts = async () => {
  const products = await getProducts();
  return (
    <div className='my-10'>
      <h2 className='text-center text-2xl'>All Products</h2>

      {products.length === 0 ? (
        <p className="">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default AllProducts
