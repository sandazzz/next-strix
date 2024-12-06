"use client";
import { useState } from "react";
import { Product } from "@/lib/definition";

import clsx from "clsx";

type PlanType = "lite_plan" | "standard_plan" | "extended_plan";

export default function CoachDetail({ coachData }: { coachData: Product }) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("standard_plan");
  const [cart, setCart] = useState<Boolean>(true);

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const addToCart = () => {
    const stripeKey =
      selectedPlan === "lite_plan"
        ? coachData.lite_stripe_price
        : selectedPlan === "standard_plan"
          ? coachData.standard_stripe_price
          : coachData.extended_stripe_price;

    const cartItem = {
      id: coachData.id,
      name: coachData.name,
      game: coachData.game,
      price: coachData[selectedPlan],
      key: stripeKey,
    };

    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cart.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(cart));

    setCart(false);
  };

  return (
    <div className="flex flex-col gap-5 rounded-lg border border-gray-700 bg-gray-900 p-5 text-white shadow-lg sm:max-w-md sm:p-8">
      {/* Plan Selection */}
      <div className="grid grid-cols-3 gap-2">
        {["lite_plan", "standard_plan", "extended_plan"].map((plan) => (
          <button
            key={plan}
            onClick={() => handlePlanChange(plan as PlanType)}
            type="button"
            className={clsx(
              "h-10 rounded-md text-xs font-medium transition",
              selectedPlan === plan
                ? "bg-teal-600 text-white opacity-75"
                : "bg-gray-700 text-gray-300 hover:bg-teal-500 hover:text-white",
            )}
            disabled={selectedPlan === plan}
          >
            {plan.replace("_", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Divider and Price */}
      <div className="flex flex-col items-center">
        <div className="w-full border-t border-gray-700"></div>
        <h2 className="m-2 text-2xl font-semibold text-teal-400">
          {`${coachData[selectedPlan]}€/month`}
        </h2>
        <div className="w-full border-t border-gray-700"></div>
      </div>

      {/* Description */}
      <p className="text-center text-sm text-gray-300">
        {coachData.description}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        type="button"
        className={clsx(
          "h-10 w-full rounded-lg text-sm font-medium transition",
          cart
            ? "bg-teal-600 text-white hover:bg-teal-500"
            : "cursor-not-allowed bg-gray-500 text-gray-300",
        )}
        disabled={!cart}
      >
        {cart ? "Add to Cart" : "Added"}
      </button>
    </div>
  );
}
