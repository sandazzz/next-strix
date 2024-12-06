import Image from "next/image";

export default function GridOfGame() {
  const games = [
    { src: "/assets/Valorant-nbg-removebg-preview.png", alt: "Valorant" },
    { src: "/assets/RL-nbg-removebg-preview.png", alt: "Rocket League" },
    { src: "/assets/R6-nbg-removebg-preview.png", alt: "Rainbow Six" },
    { src: "/assets/LOL-nbg-removebg-preview.png", alt: "League of Legends" },
    { src: "/assets/CSGO-nbg-removebg-preview.png", alt: "CS:GO" },
    { src: "/assets/OW2-nbg-removebg-preview.png", alt: "Overwatch" },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {games.map((game, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-md bg-gray-800 p-4 text-white transition-transform hover:scale-105"
        >
          <div className="relative h-[80px] w-[120px] md:h-[100px] md:w-[150px]">
            <Image
              src={game.src}
              alt={game.alt}
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium">{game.alt}</p>
        </div>
      ))}
    </div>
  );
}
