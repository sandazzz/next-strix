import { fetchProduct } from "@/app/lib/data";
import CoachDetail from "@/app/ui/products/productId/coach-detail";

export default async function ProductDetail({ params, }: { params: { productId: number };}) {
  const product = await fetchProduct({ id: params.productId });
  return (
    <main
      className="p-[5%]"
      style={{
        background:
          "linear-gradient(to right top, #051937, #0e2969, #393499, #7336c5, #b620e8)",
      }}
    >
      {product.map((p) => (
        <CoachDetail coachData={p} key={p.id} />
      ))}
    </main>
  );
}
