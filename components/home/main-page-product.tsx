import { Product } from "@/lib/definition";
import Image from "next/image";
import Link from "next/link";

export default function MainPageProduct({ product }: {product : Product}) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-5/6 max-w-xl h-auto md:h-96 m-2">
      <Image
        width={256}
        height={384}
        alt="coach-image"
        className="object-cover w-full md:w-64 h-64 md:h-96 border-2 border-indigo-200 rounded-t-xl md:rounded-3xl"
        src={product.image}
      />
      <div className="bg-purple-700 bg-opacity-80 backdrop-blur-sm w-full md:w-60 h-56 md:h-[90%] border-2 border-t-0 md:border-t-2 md:border-l-0 md:border-indigo-100 border-opacity-10 rounded-b-xl md:rounded-r-xl md:rounded-b-none relative flex flex-col items-start p-5 text-white duration-500 hover:bg-indigo-900 hover:border-indigo-400">
        <h2 className="mb-2 text-xl font-bold">{product.name}</h2>
        <h3 className="mb-2 text-lg text-indigo-100">{product.game}</h3>
        <p className="mb-2">{product.description}</p>
        <p className="mb-2 font-bold">
          Starting from
          <span className="text-2xl">{product.lite_plan}€</span>/month
        </p>
        <Link
          className="bg-blue-600 rounded-full py-1 px-2 text-lg text-white cursor-pointer absolute bottom-5 right-5 transition duration-500 hover:bg-blue-400 hover:shadow-lg"
          type="button"
          href={`/products/${product.id}`}
        >
          View More
        </Link>
      </div>
    </div>
  );
}
