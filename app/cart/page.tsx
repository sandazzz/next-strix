"use client";
import { useEffect, useState } from "react";
//import { loadStripe } from "@stripe/stripe-js";

/*const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );*/
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
    <main>
      <h2>Your Cart</h2>
      <button className="btn btn-active btn-ghost" onClick={clearCart}>
        Clear Cart
      </button>
      {/*<form action="/api/checkout_sessions" method="POST">
        <button className="btn btn-info" type="submit" role="link">
          Checkout
        </button>
  </form>*/}
      <section className="flex flex-col items-center">
        {cartItems.map((item, index) => (
          <div
            className="w-1/2 flex flex-row justify-between items-center"
            key={index}
          >
            <div>
              <h3>{item.name}</h3>
            </div>
            <div>
              <h3>{item.game}</h3>
            </div>
            <div>
              <h3>{item.price} €</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
