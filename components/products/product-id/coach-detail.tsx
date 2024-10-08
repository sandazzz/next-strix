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

  function addToCart() {
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
  }

  return (
    <div className="flex h-80 w-[360px] flex-col items-center gap-7 rounded-lg border-2 border-solid border-[#B620E8] bg-white bg-opacity-10 p-5 text-white shadow-2xl md:w-[500px]">
      <div className="flex items-center gap-4">
        <button
          onClick={() => handlePlanChange("lite_plan")}
          type="button"
          className={clsx(
            "h-12 w-24 rounded-lg bg-[#AD1FDB] transition duration-500 hover:bg-blue-400",
            selectedPlan == "lite_plan"
              ? "cursor-not-allowed opacity-40"
              : null,
          )}
          disabled={selectedPlan == "lite_plan"}
        >
          Lite plan
        </button>
        <button
          onClick={() => handlePlanChange("standard_plan")}
          type="button"
          className={clsx(
            "h-12 w-24 rounded-lg bg-[#7A169C] transition duration-500 hover:bg-blue-400",
            selectedPlan == "standard_plan"
              ? "cursor-not-allowed opacity-40"
              : null,
          )}
          disabled={selectedPlan == "standard_plan"}
        >
          Standard plan
        </button>
        <button
          onClick={() => handlePlanChange("extended_plan")}
          type="button"
          className={clsx(
            "h-12 w-24 rounded-lg bg-[#480D5C] transition duration-500 hover:bg-blue-400",
            selectedPlan == "extended_plan"
              ? "cursor-not-allowed opacity-40"
              : null,
          )}
          disabled={selectedPlan == "extended_plan"}
        >
          Extended plan
        </button>
      </div>
      <div className="line h-[1px] w-4/5 rounded-md border-t-2 border-[#B620E8] content-none"></div>
      <h2 className="">{`${coachData[selectedPlan]}€/month`}</h2>
      <div className="line h-[1px] w-4/5 rounded-md border-t-2 border-[#B620E8] content-none"></div>
      <p className="">{coachData.description}</p>
      <button
        onClick={addToCart}
        type="button"
        className={clsx(
          "h-10 w-28 rounded-lg bg-[#3648e4] transition duration-500 hover:bg-blue-400",
          cart == false ? "cursor-not-allowed opacity-40" : null,
        )}
        disabled={cart == false}
      >
        {cart == false ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}
