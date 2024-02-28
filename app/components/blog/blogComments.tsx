import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogComments = () => {
  const status = "unauthenticated";

  const isLoading = false;

  const data = [
    {
      image: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      username: "lyub",
      createdAt: "2024-02-23T01:58:26.683+00:00",
      description: "You need a lady nurse",
    },
    {
      image: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      username: "lyub",
      createdAt: "2024-02-23T01:58:26.683+00:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas assumenda tenetur incidunt magnam, earum voluptatem perspiciatis iste, deleniti omnis exercitationem hic ipsam totam, cupiditate dignissimos. Amet explicabo voluptates quaerat consequuntur itaque laudantium aperiam velit id dolorum incidunt, inventore ullam! Iure fuga voluptates eligendi officia ipsum architecto reiciendis exercitationem obcaecati quae commodi voluptas id, dolor soluta recusandae aliquid repellendus officiis tempore? Nostrum suscipit, architecto consequatur id necessitatibus magni delectus saepe minus quo laborum modi omnis eaque cum doloribus rem optio.",
    },
    {
      image: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      username: "lyub",
      createdAt: "2024-02-23T01:58:26.683+00:00",
      description: "You need a lady nurse",
    },
    {
      image: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      username: "lyub",
      createdAt: "2024-02-23T01:58:26.683+00:00",
      description: "You need a lady nurse",
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Comments
      </h2>

      {status !== "unauthenticated" ? (
        <form className="mb-8">
          <label htmlFor="Comment" className="text-white block mb-4">
            <span className="text-lg font-bold">Add Comment:</span>
            <textarea className="resize-none h-[150px] w-full px-4 py-2 text-white border rounded-md focus:outline-none focus:border-blue-400 bg-[#2b2b2b] mt-4" />
          </label>

          <button className="bg-[#3399FF] text-white px-8 py-2 rounded-md hover:bg-[#1f6fff] focus:outline-none focus:bg-[#1f6fff]">
            Submit
          </button>
        </form>
      ) : (
        <Link
          href="/sign-in"
          className="text-sm text-[#66a2ff] p-2 hover:underline block mb-8"
        >
          Login to comment
        </Link>
      )}

      {/* comments */}
      <div>
        {isLoading ? (
          <p className="text-white">Loading...</p>
        ) : (
          data?.map((item: any) => (
            <div
              key={crypto.randomUUID()}
              className="bg-[#333] p-4 rounded-md mb-6"
            >
              <div className="flex items-center gap-4">
                {/* user */}
                <Image
                  src={`${item.image}`}
                  alt="user"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-[#3399FF]"
                />
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-bold text-white">
                        {item.username}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {moment(item.createdAt.toString()).fromNow()}
                    </span>
                  </div>
                  <p className="text-sm text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogComments;
