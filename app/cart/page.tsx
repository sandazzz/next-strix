"use client";
import { useEffect, useState } from "react";

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

  const checkout = async () => {
    const body = cartItems.map((item) => {
      return {
        price: item.key,
        quantity: 1,
      };
    });
    console.log(body);

    const response = await fetch("api/checkout-sessions", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    
    if (response.ok) {
      const data = await response.json();
      console.log("Checkout session created:", data);
      // Rediriger l'utilisateur vers la session de paiement
      window.location.href = data;
    }
  };
  return (
    <main className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen p-7 md:px-16 text-white">
      <h1 className="text-3xl">Your Cart</h1>
      <div className="my-2 flex gap-2">
        <button className="btn" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="btn btn-info" onClick={checkout}>
          Checkout
        </button>
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
