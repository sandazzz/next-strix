import Image from "next/image";

export default async function GridOfGame() {
  return (
    <div
      id="games-section"
      className="my-7 flex flex-col md:items-center md:justify-center md:flex-row"
    >
      <h2 className="text-center font-semibold text-2xl">
        Dozens of games and <br /> mentors to learn from
      </h2>
      <div
        id="grid-of-games"
        className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4"
      >
        <Image
          src="/assets/Valorant-nbg-removebg-preview.png"
          width={140}
          height={100}
          className="w-1/2 object-cover m-auto"
          alt=""
        />
        <Image
          src="/assets/RL-nbg-removebg-preview.png"
          width={140}
          height={100}
          className="w-1/2 object-cover m-auto"
          alt=""
        />
        <Image
          src="/assets/R6-nbg-removebg-preview.png"
          width={140}
          height={100}
          className="w-1/2 object-cover m-auto"
          alt=""
        />
        <Image
          src="/assets/LOL-nbg-removebg-preview.png"
          width={140}
          height={100}
          className="w-1/2 object-cover m-auto"
          alt=""
        />
        <Image
          src="/assets/CSGO-nbg-removebg-preview.png"
          width={140}
          height={100}
          className="w-1/2 object-cover m-auto"
          alt=""
        />
        <Image
          src="/assets/OW2-nbg-removebg-preview.png"
          width={140}
          height={100}
          className="w-1/2 object-cover m-auto"
          alt=""
        />
      </div>
    </div>
  );
}
