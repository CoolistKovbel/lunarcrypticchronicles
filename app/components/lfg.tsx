import Image from "next/image";
import React from "react";
import { AnimatedTooltip } from "./ui/tool-tip";
import Link from "next/link";

export const LFG = () => {
  const fr3nds = [
    {
      id: 1,
      name: "lyub",
      preference: "FrontEnd",
      image: "/ghost-1.png",
    },
    {
      id: 2,
      name: "lyub12",
      preference: "BackEnd",
      image: "/MystixKat-1.png",
    },
    {
      id: 3,
      name: "lyubTHEBEST1",
      preference: "BlockChain",
      image: "/ghost-1.png",
    },
    {
      id: 4,
      name: "lyub24",
      preference: "FullStack",
      image: "/MystixKat-2.png",
    },
    {
      id: 5,
      name: "You",
      preference: "FullStack",
      image: "/ghost-1.png",
    },
  ];

  const Captains = () => (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={fr3nds} />
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto mt-10 p-6 bg-[#f4f4f4] text-black rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Project: x</h2>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Current Emotional status:
          <span className="text-yellow-500">Depressed af</span>
        </h2>
        <h2 className="text-xl font-semibold">
          Current Status: <span className="text-yellow-500">Set Up</span>
        </h2>
      </div>

      <p className="text-lg mb-6">
        Looking to create a small group of individuals who feel like they have
        the skills to help create this project. We need at least 5 people. The
        goal is to raise a few dollars, and if the current team can handle it,
        move on to phase 2.
      </p>

      {/* options */}
      <div className="w-[200px] flex items-center gap-4">

        <button className="bg-[#222] text-white py-2 px-4 rounded-md hover:bg-[#212] focus:outline-none focus:ring focus:border-blue-300">
          Join Up
        </button>

        <Link href="/chamber/progress/2" className="bg-[#222] text-white py-2 px-4 rounded-md hover:bg-[#212] focus:outline-none focus:ring focus:border-blue-300">
          View 
        </Link>

      </div>


      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Friends who joined</h3>
        <Captains />
      </div>
    </section>
  );
};
