import Image from "next/image";
import Link from "next/link";
import { fetchTwoProducts } from "@/app/lib/data";

export default async function Home() {
  const products = await fetchTwoProducts()
  return (
    <main className="bg-white min-h-screen">
      <section id="main-title">
        <h1 className="text-center font-medium text-3xl p-5 text-[#9733b6]">
          <Link href="#products-container">
            Learn new techs, improve your skills and hit your dreamed rank
          </Link>
        </h1>
        <h2 className="text-center font-semibold text-2xl">Search by game, mentor or company</h2>

      </section>

      <section id="games-section" className="mx-4 my-9 flex flex-col md:items-center md:justify-center md:flex-row">
        <h2 className="text-center font-semibold text-2xl">Dozens of games and <br /> mentors to learn from</h2>
        <div id="grid-of-games" className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4">
          <Image src="/assets/Valorant-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt="" />
          <Image src="/assets/RL-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/R6-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/LOL-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/CSGO-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/OW2-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
        </div>
      </section>

      <section id="product-container"
        className="flex flex-col items-center md:flex-row md:justify-center md:gap-7 md:flex-wrap p-7 m-auto bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-4
              w-[370px] h-[300px] 
              mb-3 border-solid border-2 border-purple-400 rounded-lg p-4
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
              <Link className="btn btn-outline btn-info" href={`/products/${p.id}`} passHref>
                Voir les détails
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
