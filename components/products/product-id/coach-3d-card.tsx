import Image from "next/image";
import Tilt from "@/components/ui/vanilla-tilt";

export default function Coach3dCard({
  image,
  name,
  game,
}: {
  image: string;
  name: string;
  game: string;
}) {
  const options = {
    max: 25,
    startX: -20,
    gyroscope: false,
    speed: 300,
    glare: true,
    "max-glare": 0.5,
  };

  return (
    <Tilt
      options={options}
      className="flex h-[320px] w-[260px] flex-col items-center justify-center gap-4 rounded-lg bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-5 shadow-lg transition-transform hover:scale-105 sm:h-[360px] sm:w-[280px]"
    >
      {/* Image Section */}
      <div className="relative h-44 w-44 sm:h-48 sm:w-48">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="100wv"
          className="rounded-full border-2 border-white object-cover"
          priority={true}
        />
      </div>

      {/* Text Section */}
      <h2 className="mt-2 text-center text-lg font-bold text-white sm:text-xl">
        {name}
      </h2>
      <h3 className="sm:text-md text-center text-sm font-medium text-teal-300">
        {game}
      </h3>
    </Tilt>
  );
}
