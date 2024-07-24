"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/definition";

export default function ProductSection({ products }: { products: any }) {
  const [filtredProduct, setFiltredProduct] = useState(products);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setFiltredProduct(products);
      return;
    } else {
      const inputValue = event.target.value.toLowerCase();
      const newProduct = products.filter((product: any) =>
        product.game.toLowerCase().includes(inputValue)
      );
      setFiltredProduct(newProduct);
    }
  };
  return (
    <>
      <div
        id="search-bar"
        className="h-16 w-full flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Filter by game"
          className="input input-bordered input-primary w-full max-w-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex max-sm:flex-col md:justify-center items-center md:gap-7 md:flex-wrap p-7">
        {filtredProduct.map((p: Product) => (
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
      </div>
    </>
  );
}
