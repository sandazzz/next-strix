import Link from "next/link";
import { fetchTwoProducts } from "@/lib/data";
import GridOfGame from "../../components/home/grid-of-game";
import MainPageProduct from "../../components/home/main-page-product";

export default async function Home() {
  const products = await fetchTwoProducts();
  return (
    <main className="bg-white relative min-h-screen">
      <section
        id="main-title"
        className="min-h-screen w-full flex flex-col justify-center items-center gap-6 p-8 bg-gradient-to-tl from-purple-900 via-indigo-900 to-blue-900 text-white"
      >
        <h1 className="text-center font-bold text-3xl md:text-4xl transition-transform transform hover:scale-105">
          <Link href="#product-container">
            Learn new techs, improve your skills and hit your dreamed rank
          </Link>
        </h1>
        <h2 className="text-center font-semibold text-xl md:text-2xl mt-4">
          Search by game, mentor, or company
        </h2>
        <GridOfGame />
      </section>

      <section
        id="product-container"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900"
      >
        <h1 className="text-center font-bold text-3xl md:text-4xl text-white">In a click : A dedicated coatch to improve your skills</h1>

        <div className="flex max-sm:flex-col justify-center items-center mt-10 w-full ">
          {products.map((product) => (
            <MainPageProduct key={product.id} product={product}></MainPageProduct>
          ))}
        </div>

      </section>
    </main>
  );
}
