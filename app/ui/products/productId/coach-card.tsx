"use client"
import Image from "next/image";
import styles from "@/app/ui/productCard.module.css";
import { useEffect } from "react";
import { VanillaTilt } from "@/app/ui/vanilla-tilt"

// Définir le type des données d'un coach individuel
interface CoachData {
  name: string;
  game: string;
  image: string;
}

// Passer les données d'un coach individuel en tant que props
interface CoachCardProps {
  coachData: CoachData; 
}

export default function CoachCard({ coachData }: CoachCardProps) {

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".coachCard"),
        {
            max: 35,
            startX:                 -20,      // the starting tilt on the Y axis, in degrees.

            speed: 300,
            glare: true, 
            "max-glare": 1,
            gyroscope:              true,   // Boolean to enable/disable device orientation detection,
            gyroscopeMinAngleX:     -45,     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
        });
      }, []);

  return (
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
  );
}
