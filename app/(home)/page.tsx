import Link from "next/link";
import { fetchTwoProducts } from "@/lib/data";
import GridOfGame from "@/components/home/grid-of-game";
import MainPageProduct from "@/components/home/product";

export default async function Home() {
  const products = await fetchTwoProducts();

  return (
    <main className="">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-indigo-800 via-purple-700 to-blue-900 p-8 text-center text-white"
      >
        <h1 className="text-3xl font-extrabold md:text-5xl">
          Master Your Skills with Tailored Coaching
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Choose your favorite game, connect with mentors, and rise to the top!
        </p>
        <Link
          href="#products-section"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-800 transition duration-200 hover:bg-blue-800 hover:text-white focus:outline-none"
        >
          Explore Coaches
        </Link>

        <GridOfGame />
      </section>

      {/* Products Section */}
      <section
        id="products-section"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-blue-600 via-indigo-800 to-purple-700 p-8 text-center text-white"
      >
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          In a click : A dedicated coach to improve your skills
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
