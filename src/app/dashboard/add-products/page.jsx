"use client";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function AddProductPage() {

  const { data: session, status } = useSession();

  // show toast only once when status is unauthenticated
  if (status === "unauthenticated") {
    toast("Access Denied", {
      description: "Please login first to add products",
    });
    redirect("/login");
  }

  // do nothing while loading
  if (status === "loading") return null;

  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("https://next-store-server-pi.vercel.app/products", {
        cache: "no-store",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setLoading(false);

      if (result.success) {
        toast("Product Added Successfully");
        reset(); // clear form after success
        router.push("/products");
      } else {
        toast.error("Something went wrong!")
      }
    } catch (err) {
      setLoading(false);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          {...register("name", { required: "Name is required" })}
          className="border px-3 py-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Description */}
        <textarea
          placeholder="Description"
          {...register("description", { required: "Description is required" })}
          className="border px-3 py-2 rounded"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

        {/* Price */}
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be at least 1" }
          })}
          className="border px-3 py-2 rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        {/* Image URL */}
        <input
          type="url"
          placeholder="Product Image URL"
          {...register("image", { required: "Image URL is required" })}
          className="border px-3 py-2 rounded"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
