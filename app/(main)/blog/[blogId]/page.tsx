import BlogComments from "@/app/components/blog/blogComments";
import { SparklesCore } from "@/app/components/ui/sparkles";
import moment from "moment";
import Image from "next/image";
import React from "react";

const Page = () => {
  const blog = {
    title: "Green eyes red lips, voice like an angel",
    description:
      "Hidden in plane site, with the lightb shine light a spot light, doors open but cant walk in",
    content: `acon ipsum dolor amet pork belly anim qui deserunt swine porchetta minim sausage fugiat sed tempor voluptate ipsum. Tempor jerky drumstick fugiat, venison salami excepteur. Spare ribs excepteur ex kevin, prosciutto eu shank culpa cupidatat ipsum consectetur porchetta non capicola. Nisi jerky ex, ribeye aliqua non bacon strip steak.

      Capicola qui spare ribs esse prosciutto corned beef biltong. Dolor eu meatball prosciutto, strip steak ullamco tenderloin buffalo. Frankfurter ham hock jerky chicken laborum in dolore jowl pancetta strip steak burgdoggen ad. Dolor short loin nisi, rump salami tail sed. Veniam kielbasa voluptate laboris swine pig chislic adipisicing corned beef cupim tempor picanha cillum lorem porchetta. Nostrud ham hock frankfurter enim, cupim velit lorem pig ex bacon tail eiusmod sed duis quis. Nisi sausage tenderloin, flank kevin sed pork belly cillum aliquip ut adipisicing venison turducken.
      
      Tongue anim qui cow shoulder labore, rump t-bone bresaola cillum aliqua. Sunt ut beef strip steak occaecat. Dolore do short ribs tri-tip non. Tongue andouille jowl swine, pancetta burgdoggen pariatur ham hock. Prosciutto nulla ad drumstick fugiat eiusmod officia. Deserunt duis sunt pastrami andouille sint esse flank.
      
      Incididunt irure consequat, jerky pariatur buffalo laborum spare ribs ad fugiat eiusmod. Turkey beef kielbasa biltong, swine rump short loin sirloin meatloaf landjaeger consequat. Tongue aute short loin, consequat sirloin pork belly bacon turkey commodo dolor lorem frankfurter turducken. Eiusmod fugiat voluptate dolore. Eiusmod cupim dolor esse et prosciutto biltong beef ribs buffalo shankle enim aute fugiat capicola deserunt.
      
      Sirloin tail shank andouille short loin ball tip strip steak ex ut laborum pork loin brisket prosciutto kevin. Short ribs consequat ex, tempor duis est aliqua ut adipisicing flank excepteur. Deserunt id kielbasa sausage, sed pork belly est fatback. Nulla dolore sed ground round occaecat labore in landjaeger biltong short ribs hamburger. Reprehenderit bresaola et incididunt nisi elit cupidatat quis venison eiusmod landjaeger. Hamburger exercitation ham hock mollit eiusmod ut ea sirloin qui tongue. Shoulder enim t-bone aute.
      
      Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!`,
    createdAt: "2024-02-23T01:58:26.683+00:00",
    author: "DepressedSnowShrederBunny",
  };

  return (
    <section className="w-full min-h-screen bg-[#111]">
      <header className="w-full h-[400px] flex items-center justify-center flex-col gap-3 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">{blog.title}</h2>
        <p className="font-2xl mb-4">{blog.description}</p>
        <div className="flex justify-between items-center w-[60%]">
          <p className="flex items-center">
            <span className="mr-2">{blog.author}</span>
            <div className="w-16 h-16 bg-[#333] rounded-full overflow-hidden ml-2 relative">
              <Image src="/MystixKat-2.png" alt="author" fill />
            </div>
          </p>
          <p className="text-gray-400">
            {moment(blog.createdAt.toString()).fromNow()}
          </p>
        </div>
      </header>

      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={100}
        className="w-full h-[200px]"
        particleColor="#FFF"
      />

      <article className="max-w-4xl mx-auto text-white">
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      <BlogComments />
    </section>
  );
};

export default Page;
