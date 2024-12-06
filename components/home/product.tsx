import { Product } from "@/lib/definition";
import Image from "next/image";
import Link from "next/link";

export default function MainPageProduct({ product }: { product: Product }) {
  return (
    <div className="m-4 flex h-auto w-full max-w-lg flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-md md:h-[24rem] md:flex-row">
      {/* Image Section */}
      <div className="h-48 w-full md:h-full md:w-1/2">
        <Image
          width={240}
          height={320}
          alt="coach-image"
          className="h-full w-full object-cover"
          src={product.image}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-6 text-white md:w-1/2">
        <div>
          <h2 className="mb-2 text-lg font-bold">{product.name}</h2>
          <h3 className="mb-4 text-sm text-indigo-400">{product.game}</h3>
          <p className="mb-4 line-clamp-3 text-sm text-gray-300">
            {product.description}
          </p>
          <p className="text-lg font-bold">
            Starting from{" "}
            <span className="text-xl text-blue-400">{product.lite_plan}€</span>
            /month
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href={`/products/${product.id}`}
            className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:scale-105 focus:translate-y-1 focus:scale-105 active:scale-95"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
