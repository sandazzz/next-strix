import styles from "@/app/ui/productCard.module.css";
import { useState } from "react";

interface CoachOptionProps {
  data: {
    lite_plan: number;
    standard_plan: number;
    extended_plan: number;
    description: string;
  };
}

export default function CoachOption({ data }: CoachOptionProps) {
  return (
    <div className={`${styles.productPrice} text-white`}>
      <div className="flex gap-4 items-center">
        <button
          type="button"
          className="lite-plan w-24 h-12 bg-[#AD1FDB] rounded-lg

"
        >
          Lite plan
        </button>
        <button
          type="button"
          className="standard-plan w-24 h-12 bg-[#7A169C] rounded-lg

"
        >
          Standard plan
        </button>
        <button
          type="button"
          className="extended-plan w-24 h-12 bg-[#480D5C] rounded-lg

"
        >
          Extended plan
        </button>
      </div>
      <div className="line content-none w-[80%] h-[1px] border-2 rounded-md border-[#B620E8]"></div>
      <h2 className="">{`${data.standard_plan}€/month`}</h2>
      <div className="line content-none w-[80%] h-[1px] border-2 rounded-md border-[#B620E8]"></div>
      <p className="">{data.description}</p>
      <button
        type="button"
        className="add-to-cart w-28 h-10 bg-[#3648e4] rounded-lg"
      >
        Add to cart
      </button>
    </div>
  );
}
