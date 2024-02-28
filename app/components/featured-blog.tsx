import Image from "next/image";

export const FeaturedBlog = () => {
  return (
    <section className=" p-4 shadow-lg">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Blog</h2>

      <article className="w-full bg-[#f4f4f4] text-black rounded-lg overflow-hidden shadow-lg">

        <header className="w-full p-4 bg-[#000] text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            How to Set Up NextAuth with Smart Contracts and AI Integration
          </h2>

          <div className="flex flex-row items-center justify-between">
            <h4 className="text-sm mb-2 md:mb-0">by: LyubTheBest1</h4>
            <h6 className="text-sm">Uploaded: 2-21-24</h6>
          </div>
        </header>

        <div className="w-full flex items-center  flex-col lg:flex-row">
          <Image
            src="/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg"
            alt="Blog Image"
            width={1400}
            height={500}
            className="object-cover w-full h-72 md:h-[500px]"
          />

          <div className="p-4">
            <p className="text-base mb-10 md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              maxime quae inventore ipsum, expedita pariatur. Nostrum officia
              odit sapiente architecto fugit iusto, deleniti voluptate
              dignissimos enim laborum cumque quae perspiciatis nam natus
              reiciendis iste sed, repellat qui. Sapiente nulla iure repudiandae
              deserunt fugit! Molestias quibusdam ipsam asperiores, facilis non
              repudiandae nisi temporibus ad nemo repellendus voluptas nostrum
              quasi architecto exercitationem!
            </p>

            <div className="flex flex-row items-center justify-between">
              <p className="text-sm text-gray-600 mb-2 mr-4 md:mb-0">
                Category: Life
              </p>

              <p className="text-sm text-gray-600 mb-2 md:mb-0">Views: 6</p>

              <a
                href="#"
                className="bg-[#222] p-2 text-white hover:text-yellow-500 hover:bg-[#212] md:ml-auto"
              >
                Read more
              </a>
            </div>
          </div>
        </div>


      </article>
    </section>
  );
};
