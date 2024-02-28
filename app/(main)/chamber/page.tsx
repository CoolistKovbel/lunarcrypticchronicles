// Champer
import { LFG } from "@/app/components/lfg";
import React from "react";

const Page = () => {


  const recentProjects = [
    {
      title: "Deliever de Bag",
      status: "setting up",
      description: "Looking to assemble a team to deliver a project for the whale that lives by the ocean, need 5 people to create a website connected to smart contract",
      friends: [
        {
          name: "bob",
          preference: "Full stack",
          image: "/bbS.png"
        },
        {
          name: "dan",
          preference: "front end",
          image: "/bbS.png"
        },
        {
          name: "jessy",
          preference: "desginer",
          image: "/bbS.png"
        }
      ]
    },
    {
      title: "Minting head 4 tech",
      status: "setting up",
      description: "Looking to assemble a team to deliver a project for bears moms, need 5 people to create a website connected to smart contract",
      friends: [
        {
          name: "Jim",
          preference: "Full stack",
          image: "/bbS.png"
        },
        {
          name: "Stacy",
          preference: "front end",
          image: "/bbS.png"
        },
        {
          name: "Alek",
          preference: "desginer",
          image: "/bbS.png"
        }
      ]
    }
  ]






  return (
    <section className="w-full min-h-screen bg-[#111] ">

      <header className="w-full h-[200px] flex items-center justify-center flex-col gap-4">
        <h2 className="text-3xl font-bold">Welcome Chambers</h2>
        <p className="text-md text-gray-400">
          Are you a wizard? Look at my current and past objective, join if you want, looking forward to building with you.
        </p>
      </header>

      <LFG />


      {/* Recent objective */}
      <section className="w-full h-[400px] p-3 flex items-center justify-center overflow-auto">

          

          {
            recentProjects ? (
              <div className="w-full h-full flex flex-wrap gap-3">
                {recentProjects.map((item) => (
                  <div key={crypto.randomUUID()} className="w-[300px] h-[300px] bg-[#222] p-2 rounded-md shadow-lg">
                    <h2>Project: {item.title}</h2>
                    <p>{item.description.substring(0, 32)}</p>
                    <p>Joined: {item.friends.length}</p>
                  </div>
                ))}
              </div>
            ) : (
                <h2 className="text-2xl font-bold text-gray-500">Sorry no recent objects</h2>
            )
          }

      </section>


    </section>
  );
};

export default Page;
