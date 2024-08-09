import Image from "next/image";
import Tilt from "@/components/ui/vanilla-tilt";

export default async function Coach3dCard({
  image,
  name,
  game,
}: {
  image: string;
  name: string;
  game: string;
}) {
  const options = {
    max: 35,
    startX: -20, // the starting tilt on the Y axis, in degrees.
    gyroscope: false, // Boolean to enable/disable device orientation detection,

    speed: 150,
    glare: true,
    "max-glare": 1,
  };
  return (
    <Tilt
      options={options}
      className="flex h-96 w-72 flex-col items-center justify-center gap-2 rounded-lg bg-white bg-opacity-10 shadow-2xl"
    >
      <div className="relative bottom-2 h-64 w-64">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="100wv"
          className="rounded-full object-cover"
          priority={true}
        />
      </div>
      <h2 className="text-center text-white">{name}</h2>
      <h3 className="text-center text-white">{game}</h3>
    </Tilt>
  );
}
