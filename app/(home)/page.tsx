import Link from "next/link";
import { fetchTwoProducts } from "@/lib/data";
import GridOfGame from "../../components/home/grid-of-game";
import MainPageProduct from "../../components/home/product";

export default async function Home() {
  const products = await fetchTwoProducts();
  return (
    <main className="relative min-h-screen bg-white">
      <section
        id="main-title"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-gradient-to-tl from-purple-900 via-indigo-900 to-blue-900 p-8 text-white"
      >
        <h1 className="transform text-center text-3xl font-bold transition-transform hover:scale-105 md:text-4xl">
          <Link href="#product-container">
            Learn new techs, improve your skills and hit your dreamed rank
          </Link>
        </h1>
        <h2 className="mt-4 text-center text-xl font-semibold md:text-2xl">
          Search by game, mentor, or company
        </h2>
        <GridOfGame />
      </section>

      <section
        id="product-container"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900"
      >
        <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
          In a click : A dedicated coatch to improve your skills
        </h1>

        <div className="mt-10 flex w-full items-center justify-center max-sm:flex-col">
          {products.map((product) => (
            <MainPageProduct
              key={product.id}
              product={product}
            ></MainPageProduct>
          ))}
        </div>
      </section>
    </main>
  );
}
