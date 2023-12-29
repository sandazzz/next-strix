import { fetchProduct } from "../../lib/data";
import { VanillaTilt } from "../../ui/vanilla-tilt.js";
import Image from "next/image";
import styles from "@/app/ui/productCard.module.css";

export default async function ProductDetail({
  params,
}: {
  params: { productId: number };
}) {
  const product = await fetchProduct({ id: params.productId });
  /*VanillaTilt.init(document.querySelectorAll(".coach-data"),
            {
                max: 35,
                startX:                 -20,      // the starting tilt on the Y axis, in degrees.
    
                speed: 300,
                glare: true, 
                "max-glare": 1,
                gyroscope:              true,   // Boolean to enable/disable device orientation detection,
                gyroscopeMinAngleX:     -45,     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
            });*/
  return (
    <main
      className="p-[5%]"
      style={{
        background:
          "linear-gradient(to right top, #051937, #0e2969, #393499, #7336c5, #b620e8)",
      }}
    >
      {product.map((p) => (
        <section
          key={p.id}
          id="coach-profile"
          className="flex flex-col items-center py-10 md:flex-row md:justify-evenly "
        >
          <div className={styles.coachData}>
            <div className="w-[250px] h-[250px] m-[20px]">
              <Image
                src={p.image}
                alt={p.name}
                width={235.35}
                height={261.17}
                className="w-[100%] h-[100%] rounded-[50%] object-cover"
              />
            </div>
            <h2 className="text-center text-white">{p.name}</h2>
            <h3 className="text-center text-white">{p.game}</h3>
          </div>
        </section>
      ))}
    </main>
  );
}
