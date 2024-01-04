"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/productCard.module.css";
import Image from "next/image";
import { Product } from "@/app/lib/definition";
import VanillaTilt from 'vanilla-tilt';

interface CoachCardProps {
  coachData: Product;
}
type PlanType = "lite_plan" | "standard_plan" | "extended_plan";

export default function CoachDetail({ coachData }: CoachCardProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("extended_plan");

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
    console.log(cart)
    console.log("done")
    cart.push(cartItem);
    // Enregistre le tableau mis à jour dans le localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  useEffect(() => {
    const element : any = document.querySelector(".coachCard");
    VanillaTilt.init((element), {
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
      <div className={`${styles.coachData} coachCard`}>
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
      <div className={`${styles.productPrice} text-white`}>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => handlePlanChange("lite_plan")}
            type="button"
            className="lite-plan w-24 h-12 bg-[#AD1FDB] rounded-lg"
          >
            Lite plan
          </button>
          <button
            onClick={() => handlePlanChange("standard_plan")}
            type="button"
            className="standard-plan w-24 h-12 bg-[#7A169C] rounded-lg"
          >
            Standard plan
          </button>
          <button
            onClick={() => handlePlanChange("extended_plan")}
            type="button"
            className="extended-plan w-24 h-12 bg-[#480D5C] rounded-lg"
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
          className="add-to-cart w-28 h-10 bg-[#3648e4] rounded-lg"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
