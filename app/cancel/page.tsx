// success.js
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase.</p>
      <Link href="/">
        <a>Return to Home</a>
      </Link>
    </div>
  );
};

