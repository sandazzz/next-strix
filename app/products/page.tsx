import { fetchProducts } from "@/app/lib/data";
import ProductSection from "@/app/ui/products/ProductSection";

export default async function Products() {
  const products = await fetchProducts();

  return (
    <main
      id="product-container"
      className="w-full min-h-screen bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900"
    >
      <ProductSection products={products} />
    </main>
  );
}
