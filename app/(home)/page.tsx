import Link from "next/link";
import { fetchTwoProducts } from "@/lib/data";
import GridOfGame from "../../components/home/grid-of-game";
import MainPageProduct from "../../components/home/main-page-product";

export default async function Home() {
  const products= await fetchTwoProducts();
  return (
    <main className=" bg-white min-h-screen w-full flex flex-col justify-evenly items-center">
      <section
        id="main-title"
        className="flex flex-col justify-center gap-4 p-6"
      >
        <h1 className="font-medium text-2xl md:text-3xl text-[#9733b6]">
          <Link href="#products-container">
            Learn new techs, improve your skills and hit your dreamed rank
          </Link>
        </h1>
        <h2 className="text-center font-semibold text-2xl ">
          Search by game, mentor or company
        </h2>
      </section>

      <GridOfGame />

      <section
        id="product-container"
        className="w-full h-min p-7 flex flex-col items-center md:flex-row md:justify-center gap-7 bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900"
      >
        {products.map((product) => (
          <MainPageProduct key={product.id} product={product}></MainPageProduct>
        ))}
      </section>
    </main>
  );
}
