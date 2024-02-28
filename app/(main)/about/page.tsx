import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen w-full bg-[#000] text-white">
      <header className="w-full p-10">

        <h2 className="text-5xl md:text-6xl font-bold mb-2">About ME</h2>

        <p className="font-bold text-[1.2rem]">
          Name: <span className="text-yellow-500">Lyubomyr Kovbel</span>
        </p>
        <p className="font-bold text-[1.2rem]">
          Type: <span className="text-yellow-500">Attack Helicopter</span>
        </p>
        <p className="font-bold text-[1.2rem]">
          Age: <span className="text-yellow-500">24</span>
        </p>
      </header>

      <div className="max-w-6xl mx-auto mb-10 p-6 bg-[#111] text-white rounded-lg shadow-lg border-2">
        <blockquote className="border-l-4 border-[#3498db] pl-4 italic">
          <q className="text-xl font-semibold">
            From dust and ashes, a new form of self is created. No matter how
            many times you fall, as long as you get back up, you will always
            win.
          </q>
          <p className="text-right mt-2">- LyubTheBest1</p>
        </blockquote>
      </div>

      <section className="w-full p-4 flex flex-col md:flex-row items-center gap-5">

        <Image
          src="/thumbnail_Lonely dead astronaut-228ebde8.png"
          alt="dead astronut"
          width={200}
          height={200}
          className="order-1 md:order-2 w-full md:w-1/3 shadow-lg rounded-lg border-4 mb-4 md:mb-0"
        />
        <div className="order-2 md:order-1 w-full md:w-2/3 text-lg">
          <p className="mb-2">
            I am a young dude who feel likes an old man. My whole body hurts I
            feel like cracking all my bones in my body just so maybe i can feel
            okay. I love to eat food but also interesting in eating evey other
            cultures food before I die. I used to be a happy boy and then i grew
            up and realized that what i tried to avoid when i was little kinda
            of back fired but at least I am not in a scary office building stuck
            behend a desk sorting data without code.
          </p>
          <p className="mb-2">
            I would consider myself smart but I can still do some stupid things.
            I am not a bad kid just a curious dude trying to know things that
            seem to be hidden right in front of our eyes. I do regret not
            reading books when I was a kid, probably wouldve helped enhanced my
            english and I probably couldve been someone cooler than cool and
            have more respect and own buisness I guess but just like going to
            the gym and working on your body, everyday is a learning experience
            depending on how you take life.
          </p>
          <p className="mb-2">
            I always wanted to code, was interesting in computers when I was kid
            but got sucked into video games and social sites because felt like
            it was too hard to read. I wish i was there for myself and gotten a
            grib on life and focus on the technical side of a computer instead
            of the whole social aspect and engement between online presence and
            social presence. Again like i said i am kinda smart.
          </p>
          <p className="mb-2">
            Other than this, I consider myself a captain, a leader, a family a
            man, the father who suports his family and a freind who they can
            rely on. If good things happen to me I like to spread my wealth and
            happiness with those around me or even those who helped me through
            the process. I dont like to ask for help nor like to waste time.
            People play my often because of the way I am but I feel like thanks
            to my recent interactions with people, I kinda of give some people
            the cold sholder at this point. My heart turning colder as my
            emotions go numb, but i tend to control it. Somtimes its hard when
            you are hungry and havent slept well and have some weird events
            happen in your life that you can just put your finger on it but you
            know its wrong or something is wrong and cant do anything about and
            instead just hope things go well.
          </p>
          <p>
            They say that the life gets rough and hard when you grow up. I
            planned to not go through that but it got messed up so bad, stuck
            between life and death, but here I am looking to finish what I
            started.
          </p>
        </div>

      </section>

      {/* <div className="max-w-6xl mx-auto mb-10 p-6 bg-[#111] text-white rounded-lg shadow-lg border-2">
        <blockquote className="border-l-4 border-[#3498db] pl-4 italic">
          <q className="text-xl font-semibold">
            
          </q>
          <p className="text-right mt-2">- LyubTheBest1</p>
        </blockquote>
      </div> */}

    </section>
  );
};

export default Page;
