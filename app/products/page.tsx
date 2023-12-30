import { fetchProducts } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const products = await fetchProducts();
  return (
    <main>
      <section id="product-container"
        className="flex flex-col md:flex-row md:justify-center md:gap-7 md:flex-wrap p-12 place-content-center m-auto bg-[#4B105E] md:bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900">
        {products.map((p) => (
          <div
            key={p.id}
            className="mb-3 border-solid border-2 border-purple-400 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-4 flex items-center gap-4"
          >
            <Image
              width={181}
              height={267}
              src={p.image}
              alt={p.name}
              className="rounded-md"
            />
            <div className="text-white">
              <h2>{p.name}</h2>
              <h3 className="text-base">{p.game}</h3>
              <p>{p.description}</p>
              <p>Starting from {p.lite_plan}€/month</p>
              <Link href={`/products/${p.id}`} passHref>
                Voir les détails
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
