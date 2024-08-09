import { fetchProduct } from "@/lib/data";
import { Product } from "@/lib/definition";
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
    <main
      className="p-[6%]"
      style={{
        background:
          "linear-gradient(to right top, #051937, #0e2969, #393499, #7336c5, #b620e8)",
      }}
    >
      <section
        id="coach-profile"
        className="flex items-center justify-evenly gap-11 max-sm:flex-col"
      >
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
