"use client";
import ProductSectionPage from "@/components/products/product";
import { useState } from "react";
import { Product } from "@/lib/definition";

export default function ProductSection({ products }: { products: Product[] }) {
  const [filtredProduct, setFiltredProduct] = useState(products);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setFiltredProduct(products);
      return;
    } else {
      const inputValue = event.target.value.toLowerCase();
      const newProductList = products.filter((product: Product) =>
        product.game.toLowerCase().includes(inputValue),
      );
      setFiltredProduct(newProductList);
    }
  };
  return (
    <>
      <div
        id="search-bar"
        className="flex h-16 w-full items-center justify-center"
      >
        <input
          type="text"
          placeholder="Filter by game"
          className="input input-bordered input-primary w-full max-w-sm"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center gap-6 p-7 max-sm:flex-col md:flex-wrap">
        {filtredProduct.map((product: Product) => (
          <ProductSectionPage product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
