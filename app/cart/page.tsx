"use client";
import { useEffect, useState } from "react";
//import { loadStripe } from "@stripe/stripe-js";

/*const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );*/

/*import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1OTTSMD72PzL52Rm2AFAsRd7',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
*/
export interface CartItem {
  id: number;
  name: string;
  game: string;
  price: number;
  key: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(cart);
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  /*useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);*/

  return (
    <main className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen p-7 md:px-16 text-white">
      <h1 className="text-3xl">Your Cart</h1>
      <div className="my-2 flex gap-2">
        <button className="btn" onClick={clearCart}>
          Clear Cart
        </button>
        <form action="/" method="POST">
          <button className="btn btn-info" type="submit" role="link">
            Checkout
          </button>
        </form>
      </div>

      <section className="flex flex-col items-center w-full">
        {cartItems.map((item, index) => (
          <div
            className="w-full md:max-w-80 my-6	flex flex-row justify-between items-center"
            key={index}
          >
            <div className="">
              <h3>{item.name}</h3>
            </div>
            <div className="w-auto">
              <h3>{item.game}</h3>
            </div>
            <div className="">
              <h3>{item.price} €</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
