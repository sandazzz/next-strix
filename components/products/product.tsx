"use client"
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/definition";

export default function ProductSectionPage({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="mb-4 flex h-auto w-[320px] transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform hover:scale-95 hover:shadow-lg"
    >
      <Image
        width={320}
        height={200}
        src={product.image}
        alt={product.name}
        priority={true}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
        <h3 className="text-lg font-medium text-gray-700">{product.game}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-sm font-semibold text-gray-900">
          Starting from {product.lite_plan}€/month
        </p>
        <Link
          className="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href={`/products/${product.id}`}
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
  );
}
