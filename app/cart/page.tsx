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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const body = cartItems.map((item) => ({
      price: item.key,
      quantity: 1,
    }));
    console.log(body);

    try {
      const response = await fetch("/api/checkout-sessions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log("Checkout session created:", data);
        clearCart();
        // Rediriger l'utilisateur vers la session de paiement
        window.location.href = data;
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-7 text-white md:px-16">
      <h1 className="mb-6 text-4xl font-bold">Your Cart</h1>
      <div className="mb-4 flex w-full justify-center">
        <button
          className="mr-4 transform rounded-lg bg-red-500 px-6 py-2 font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-red-600"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          className="transform rounded-lg bg-blue-500 px-6 py-2 font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-600"
          onClick={checkout}
          disabled={loading}
        >
          {loading ? "Processing..." : "Checkout"}
        </button>
      </div>
      <section className="mt-6 flex w-full flex-grow flex-col items-center">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              className="mb-4 flex w-full items-center justify-between rounded-lg bg-white p-4 text-gray-800 shadow-md md:max-w-xl"
              key={item.id}
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.game}</p>
              </div>
              <div className="text-lg font-bold">{item.price} €</div>
            </div>
          ))
        ) : (
          <p className="mt-4 text-xl">Your cart is empty.</p>
        )}
      </section>
    </main>
  );
}
