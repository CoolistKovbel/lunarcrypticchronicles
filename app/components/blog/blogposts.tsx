import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface BlogpostsItem {
  item: any;
}

const BlogPosts = ({ item }: BlogpostsItem) => {
  return (
    <div
      className="mb-8 bg-gray-800 text-white flex items-center gap-4 shadow-lg rounded-lg p-4"
      key={crypto.randomUUID()}
    >
      <div className="w-40 h-40 relative overflow-hidden rounded">
        <Image src={item.bannerImage} alt="blog item" layout="fill" objectFit="fit" />
        <div className="absolute p-4 bg-black bg-opacity-70 bottom-0 right-0">
          <span className="text-emerald-500 mr-2">11-11-24</span>
          <span className="font-bold">{item.slug}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <Link href={`/blog/${item.slug}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold hover:text-emerald-500 cursor-pointer">
            {item.title}
          </h2>
        </Link>

        <div className="text-sm leading-5 text-gray-300">
          {item.description.substring(0, 60)}
        </div>

        <Link href={`/blog/${item.slug}`} className="self-end">
          <p className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 font-bold flex items-center space-x-2">
            Read More <FaArrowRightLong className="w-4 h-4" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
