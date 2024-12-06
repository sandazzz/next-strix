"use client";
import ProductSectionPage from "@/components/products/product";
import { useState } from "react";
import { Product } from "@/lib/definition";

export default function ProductSection({ products }: { products: Product[] }) {
  const [filtredProduct, setFiltredProduct] = useState(products);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    if (inputValue === "") {
      setFiltredProduct(products);
    } else {
      const newProductList = products.filter((product: Product) =>
        product.game.toLowerCase().includes(inputValue),
      );
      setFiltredProduct(newProductList);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div
        id="search-bar"
        className="flex w-full items-center justify-center p-4"
      >
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for a game..."
            className="w-full rounded-full border-2 border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-700 shadow-md outline-none transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            onChange={handleChange}
          />
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex items-center justify-center gap-6 p-7 max-sm:flex-col md:flex-wrap">
        {filtredProduct.map((product: Product) => (
          <ProductSectionPage product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
