import Link from 'next/link';

export default async function SuccessPage() {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen p-7 md:px-16 text-white flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-center	'>Order Successful!</h1>
      <p className='text-3xl text-center'>Thank you for your purchase.</p>
      <Link  className='text-center' href="/">
        Return to Home
      </Link>
    </div>
  );
};

