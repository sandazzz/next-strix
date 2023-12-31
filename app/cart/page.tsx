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
    try {
      const body = {
        line_items: cartItems.map((product) => ({
          price: product.key,
          quantity: 1,
        })),
      };

      const response = await fetch("/api/stripes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.error(
        "Erreur lors de la création de la session de paiement :",
        error
      );
    }
  };

  return (
    <main>
      <h2>Your Cart</h2>
      <button className="btn btn-active btn-ghost" onClick={clearCart}>
        Clear Cart
      </button>
      <button className="btn btn-info" onClick={checkout}>
        Checkout
      </button>
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
