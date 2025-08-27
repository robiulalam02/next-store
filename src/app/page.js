import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-10 px-4">
      <Hero />
      <FeaturedProducts />
    </div>
  );
}