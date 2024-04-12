import Image from "next/image";
import Link from "next/link";
import GridOfGame from "./ui/main/GridOfGame";
import { fetchTwoProducts } from "@/app/lib/data";

export default async function Home() {
  const products = await fetchTwoProducts();
  return (
    <main className=" bg-white min-h-screen w-full flex flex-col justify-evenly items-center">
      <section id="main-title" className="flex flex-col justify-center gap-4 p-6">
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
        {products.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-4
              w-[350px] h-[300px] 
              border-solid border-2 border-purple-400 rounded-lg p-4
              bg-opacity-10 bg-white backdrop-filter backdrop-blur-md"
          >
            <Image
              width={181}
              height={267}
              src={p.image}
              alt={p.name}
              className="rounded-md"
            />
            <div className="flex flex-col gap-2 text-white">
              <h2 className="text-2xl">{p.name}</h2>
              <h3 className="text-xl">{p.game}</h3>
              <p>{p.description}</p>
              <p>Starting from {p.lite_plan}€/month</p>
              <Link
                className="btn btn-outline btn-info"
                href={`/products/${p.id}`}
                passHref
              >
                Voir les détails
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
