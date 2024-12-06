import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/definition";

export default function ProductSectionPage({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="relative flex h-auto w-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl sm:max-w-[360px]"
    >
      {/* Image Section */}
      <div className="relative h-44 w-full sm:h-52">
        <Image
          width={320}
          height={200}
          src={product.image}
          alt={product.name}
          priority={true}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <h2 className="absolute bottom-3 left-3 text-lg font-bold text-white sm:text-xl">
          {product.name}
        </h2>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="sm:text-md text-sm font-medium text-indigo-400">
            {product.game}
          </h3>
          <p className="text-xs font-semibold text-gray-300 sm:text-sm">
            {product.lite_plan}€/month
          </p>
        </div>
        <p className="mt-2 line-clamp-2 text-xs text-gray-400 sm:text-sm">
          {product.description}
        </p>
        <Link
          href={`/products/${product.id}`}
          passHref
          className="group mt-4 inline-flex w-full items-center justify-center rounded-lg border border-indigo-600 bg-transparent px-4 py-2 text-xs font-medium text-indigo-400 transition hover:bg-indigo-600 hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:px-5 sm:text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
