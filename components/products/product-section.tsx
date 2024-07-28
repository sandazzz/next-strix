"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/definition";

export default function ProductSection({ products }: { products: Product[] }) {
  const [filtredProduct, setFiltredProduct] = useState(products);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setFiltredProduct(products);
      return;
    } else {
      const inputValue = event.target.value.toLowerCase();
      const newProduct = products.filter((product: Product) =>
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
            className="flex flex-col w-[320px] h-auto mb-4 border border-gray-200 rounded-xl overflow-hidden shadow-md transition-transform transform hover:scale-95 hover:shadow-lg bg-white"
          >
            <Image
              width={320}
              height={200}
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-2xl font-bold text-gray-900">{p.name}</h2>
              <h3 className="text-lg font-medium text-gray-700">{p.game}</h3>
              <p className="text-sm text-gray-600">{p.description}</p>
              <p className="text-sm font-semibold text-gray-900">Starting from {p.lite_plan}€/month</p>
              <Link
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href={`/products/${p.id}`}
                passHref
              >
                Voir les détails
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-10.707a1 1 0 00-1.414-1.414L7 9.586 5.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>


        ))}
      </div>
    </>
  );
}
