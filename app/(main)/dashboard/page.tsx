import { FeaturedBlog } from "@/app/components/featured-blog";
import { LFG } from "@/app/components/lfg";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#111] text-white">
      <h1 className=" text-2xl md:text-5xl font-bold p-4">
        <a href="/" className="leading-[90px]">
          Hey lyub12 here, expressing myself..
        </a>
      </h1>

      <div className="p-4">
        <h2 className="text-4xl font-bold">Current Objective: </h2>
        {/* Status:  */}
        <LFG />
      </div>

      {/* Featured blog */}
      <FeaturedBlog />
    </main>
  );
}
