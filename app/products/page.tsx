//"use client";
import { fetchProducts } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";

export default async function Products() {
  //const [name, setName] = useState("");

  const products = await fetchProducts();

  //const handleChange = (event) => {};
  return (
    <main>
      
        {/*<div id="search-bar" className="h-16 flex justify-center items-center">
        <input
          type="text"
          placeholder="Filter by game"
          className="input input-bordered input-primary w-full max-w-xs"
          //onChange={handleChange()}
        /> </div>*/}
     
      <section
        id="product-container"
        className="flex flex-col items-center md:flex-row md:justify-center md:gap-7 md:flex-wrap p-7 m-auto bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900"
      >
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
