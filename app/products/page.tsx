import { fetchProducts } from "@/app/lib/data";
import ProductSection from "@/app/ui/products/ProductSection";
import { useEffect } from "react";

export default async function Products() {
  const products = await fetchProducts();

  return (
    <main>
      <section
        id="product-container"
        className="w-full min-h-screen flex flex-col items-center md:flex-row md:justify-center md:gap-7 md:flex-wrap p-7 m-auto bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900"
      >
        <ProductSection products={products} />
      </section>
    </main>
  );
}
