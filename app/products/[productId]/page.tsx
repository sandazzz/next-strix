import { fetchProduct } from "@/app/lib/data";
import CoachCard from "@/app/ui/products/productId/coach-card";
import CoachOption from "@/app/ui/products/productId/coach-options";

export default async function ProductDetail({
  params,
}: {
  params: { productId: number };
}) {
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
        <section
          key={p.id}
          id="coach-profile"
          className="flex flex-col items-center py-10 md:flex-row md:justify-evenly "
        >
        <CoachCard coachData={p} key={p.id} />
        <CoachOption data={p} key={p.id}/>
        </section>
      ))}
    </main>
  );
}
