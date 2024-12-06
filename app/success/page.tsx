import Link from "next/link";

export default async function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-600 p-7 text-white">
      <h1 className="mb-4 text-center text-4xl font-extrabold md:text-5xl">
        Order Successful!
      </h1>
      <p className="mb-8 text-center text-lg md:text-2xl">
        Thank you for your purchase.
      </p>
      <Link
        href="/"
        className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-violet-600 shadow-md transition duration-300 hover:bg-violet-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
      >
        Return to Home
      </Link>
    </div>
  );
}
