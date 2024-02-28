"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  //   const [dataz, setDataZ] = useState([]);

  const dataz = [
    {
      slug: "CODE",
      icon: "🧑🏽‍💻",
      title: "CODE",
    },
    {
      slug: "LIFE",
      icon: "🧑🏽",
      title: "LIFE",
    },
    {
      slug: "CRYPTO",
      icon: "🌠",
      title: "CRYPTO",
    },
    {
      slug: "HACK",
      icon: "🤖",
      title: "HACK",
    },
  ];

  return (
    <div className="my-32">
      {/* Categories */}
      <div className="flex justify-between text-center gap-10 flex-wrap flex-col md:flex-row">
        {/* Category */}

        {dataz &&
          dataz?.map((item: any) => (
            <Link
              href={`/blog?cat=${item.slug}`}
              key={crypto.randomUUID()}
              className="flex items-center relative gap-3 capitalize bg-[#111] w-[40%] md:w-[15%] h-[80px] justify-center drop-shadow-lg shadow-[#50d71e] border-2 border-[#222] rounded-md m-auto"
            >
              <p className="text-2xl">{item.icon}</p>

              <p className="font-bold">{item.title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategoryList;
