import { fetchProduct } from "@/lib/data";
import Coach3dCard from "@/components/products/product-id/coach-3d-card";
import CoachDetail from "@/components/products/product-id/coach-detail";

export default async function ProductDetail({
  params,
}: {
  params: { productId: number };
}) {
  const products = await fetchProduct({ id: params.productId });
  const product = products[0];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-700 to-purple-900 p-6">
      <section className="flex w-full flex-wrap items-center justify-evenly gap-6">
        <Coach3dCard
          image={product.image}
          name={product.name}
          game={product.game}
        />
        <CoachDetail coachData={product} />
      </section>
    </main>
  );
}
