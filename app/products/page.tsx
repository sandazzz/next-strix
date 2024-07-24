import { fetchProducts } from "@/lib/data";
import ProductSection from "@/components/products/product-section";

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
