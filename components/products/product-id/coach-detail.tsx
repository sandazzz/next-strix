"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/definition";
import VanillaTilt from "vanilla-tilt";

type PlanType = "lite_plan" | "standard_plan" | "extended_plan";

export default function CoachDetail({ coachData }: {coachData :Product}) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("standard_plan");

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  const addToCart = () => {
    let stripe_key = "";
    switch (selectedPlan) {
      case "lite_plan":
        stripe_key = coachData.lite_stripe_price;
        break;
      case "standard_plan":
        stripe_key = coachData.standard_stripe_price;
        break;
      case "extended_plan":
        stripe_key = coachData.extended_stripe_price;
        break;
      default:
        break;
    }

    const cartItem = {
      id: coachData.id,
      name: coachData.name,
      game: coachData.game,
      price: coachData[selectedPlan],
      key: stripe_key,
    };

    // Récupère les éléments du localStorage ou crée un tableau vide s'il n'y en a pas encore
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    //console.log(cart);
    cart.push(cartItem);
    // Enregistre le tableau mis à jour dans le localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  useEffect(() => {
    const element: any = document.querySelector(".coachCard");
    VanillaTilt.init(element, {
      max: 35,
      startX: -20, // the starting tilt on the Y axis, in degrees.

      speed: 300,
      glare: true,
      "max-glare": 1,
      gyroscope: true, // Boolean to enable/disable device orientation detection,
      gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    });
  }, []);

  return (
    <section
      id="coach-profile"
      className="flex flex-col items-center py-10 md:flex-row md:justify-evenly "
    >
      <div className="coachCard flex flex-col align-center relative w-[290px] h-[370px] rounded-[20px] bg-white bg-opacity-10 shadow-2xl">
        <div className="w-[250px] h-[250px] m-[20px]">
          <Image
            src={coachData.image}
            alt={coachData.name}
            width={235.35}
            height={261.17}
            className="w-[100%] h-[100%] rounded-[50%] object-cover"
          />
        </div>
        <h2 className="text-center text-white">{coachData.name}</h2>
        <h3 className="text-center text-white">{coachData.game}</h3>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-[360px] md:w-[500px] h-auto rounded-[20px] border-2 border-solid border-[#B620E8] p-5 bg-white bg-opacity-10 shadow-2xl text-white">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => handlePlanChange("lite_plan")}
            type="button"
            className="lite-plan w-24 h-12 bg-[#AD1FDB] rounded-lg transition duration-500 hover:bg-blue-400"
          >
            Lite plan
          </button>
          <button
            onClick={() => handlePlanChange("standard_plan")}
            type="button"
            className="standard-plan w-24 h-12 bg-[#7A169C] rounded-lg transition duration-500 hover:bg-blue-400"
          >
            Standard plan
          </button>
          <button
            onClick={() => handlePlanChange("extended_plan")}
            type="button"
            className="extended-plan w-24 h-12 bg-[#480D5C] rounded-lg transition duration-500 hover:bg-blue-400"
          >
            Extended plan
          </button>
        </div>
        <div className="line content-none w-[80%] h-[1px] border-2 rounded-md border-[#B620E8]"></div>
        <h2 className="">{`${coachData[selectedPlan]}€/month`}</h2>
        <div className="line content-none w-[80%] h-[1px] border-2 rounded-md border-[#B620E8]"></div>
        <p className="">{coachData.description}</p>
        <button
          onClick={addToCart}
          type="button"
          className="add-to-cart w-28 h-10 bg-[#3648e4] rounded-lg transition duration-500 hover:bg-blue-400"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
