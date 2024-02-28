import Image from "next/image";
import { WavyBackground } from "../components/ui/wavy-background";
import { FaClipboardList, FaClipboardUser } from "react-icons/fa6";
import { EmailList } from "../components/waitlist/emailList";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#000] text-white">
      <WavyBackground>
        <div className="w-full p-3 h-[400px] mb-[100px] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4 capitalize">
              Living in a world where everything comes at you fast can be hard
            </h2>
            <p className="text-2xl font-bold mb-3">
              Life used to be simple and yet we were moving forward. Member berry 🍒
            </p>

            <p className="text-sm lowercase text-gray-300 font-semibold text-shadow-lg w-[80%] mx-auto">
              wouldnt it be nice just to hear the birds chirp or the world feel
              like it did 33 years ag feel that love in the air but this time
              without all the stupid drama attacks that lead to major clusters
              of depression
            </p>
          </div>
        </div>

        <div className="w-full p-3 h-[400px] flex flex-col items-center justify-center">
          <Image
            src="/TestConflict.png"
            alt="lyub"
            width={300}
            height={300}
            className="mb-5"
          />

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold captilize mb-2">
              It only takes you to make a change
            </h2>

            <p className="text-sm">
              Follow me through my little journey, if you are interested I am
              going this is a small blog website where I basically introduce
              myself, try to create a team and spread some knowledge and the
              place to be if you want to know when I will be laucnhing my next
              project
            </p>

            <p className="font-bold mt-2">Dont be a loser, spread some love</p>

            <div>
              <div className="flex items-center gap-2  mt-10">
                <a
                  href="/login"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardUser className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">login</p>
                </a>
                <a
                  href="/register"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardList className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">register</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>
      <EmailList />
    </main>
  );
}
