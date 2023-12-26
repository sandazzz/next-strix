import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="main-title">
        <h1 className="text-center font-medium text-3xl p-5 text-[#9733b6]">
          <Link href="#products-homepage">
            Learn new techs, improve your skills and hit your dreamed rank
          </Link>
        </h1>
        <div className="mx-auto my-12 md:my-6 w-3/4 flex flex-row justify-between bg-[#E0B0EF] py-2 px-6 rounded-lg shadow-lg md:mt-10 md:mb-16">
          <h2 className="font-semibold hidden md:block">Search by game, mentor or company</h2>
          <input id="search" type="text" placeholder="Search mentor" />
        </div>
      </section>

      <section id="games-section" className="m-4 h-96 flex items-center justify-center">
        <h2 className="text-center font-semibold">Dozens of games and <br /> mentors to learn from</h2>
        <div id="grid-of-games" className="grid grid-cols-3 grid-rows-2 gap-4">
          <Image src="/assets/Valorant-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt="" />
          <Image src="/assets/RL-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/R6-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/LOL-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/CSGO-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
          <Image src="/assets/OW2-nbg-removebg-preview.png" width={140} height={100} className="w-1/2 object-cover m-auto" alt=""/>
        </div>
      </section>
    </main>
  );
}
