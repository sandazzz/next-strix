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
    if (cartItems.length === 0) return; // Prevent checkout if cart is empty

    setLoading(true);
    const body = cartItems.map((item) => ({
      price: item.key,
      quantity: 1,
    }));

    try {
      const response = await fetch("/api/checkout-sessions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        clearCart();
        // Redirect user to the payment session
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
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-gray-900 via-purple-800 to-indigo-900 p-6 text-white sm:p-10">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Your Cart</h1>

      {/* Actions */}
      <div className="mb-6 flex w-full justify-center gap-4 sm:w-auto">
        <button
          className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:bg-blue-400"
          onClick={checkout}
          disabled={loading}
        >
          {loading ? "Processing..." : "Checkout"}
        </button>
      </div>

      {/* Cart Items */}
      <section className="mt-4 flex w-full flex-col items-center">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 flex w-full max-w-md items-center justify-between rounded-lg bg-gray-800 p-4 text-white shadow-lg transition hover:scale-105 sm:max-w-lg"
            >
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.game}</p>
              </div>
              <div className="text-lg font-semibold text-teal-400">
                {item.price} €
              </div>
            </div>
          ))
        ) : (
          <p className="mt-8 text-lg text-gray-300 sm:text-xl">
            Your cart is empty.
          </p>
        )}
      </section>
    </main>
  );
}
