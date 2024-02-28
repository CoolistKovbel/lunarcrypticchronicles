import { getSession } from "@/app/lib/action";
import Image from "next/image";
import BlogPosts from "@/app/components/blog/blogposts";
import Link from "next/link";
import { FaEnvelope, FaUserEdit, FaUserPlus } from "react-icons/fa";

const Page = async ({ params }: { params: { userId: string } }) => {
  console.log();

  const session = await getSession();

  const recentBlogs = [
    {
      title: "What is life",
      description:
        "Hate my life, life is slow, just dont really know  why any more, going to keep moving forward though",
      bannerImage: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      category: "LIFE",
      slug: "bomm",
    },
    {
      title: "What is life",
      description:
        "Hate my life, life is slow, just dont really know  why any more, going to keep moving forward though",
      bannerImage: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      category: "CODE",
      slug: "bomm",
    },
    {
      title: "What is life",
      description:
        "Hate my life, life is slow, just dont really know  why any more, going to keep moving forward though",
      bannerImage: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      category: "HACK",
      slug: "bomm",
    },
    {
      title: "What is life",
      description:
        "Hate my life, life is slow, just dont really know  why any more, going to keep moving forward though",
      bannerImage: "/704433dc-a8d5-43e6-8654-c120de4c21c1bugzbunny-2.jpg",
      category: "CRYPTO",
      slug: "bomm",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#333] text-white">
    <header className="flex items-center justify-center w-full p-4 gap-10">
      <Image
        src={session.image as string}
        alt="Profile Image"
        width={300}
        height={300}
      />

      <div>
        <div className="mb-2">
          <h2 className="text-2xl font-bold">{session.username}</h2>
          <p>Preference: {session.preference}</p>
          <p>Blogs: 2</p>
        </div>

        {session.userId === params.userId ? (
          <div className="w-[300px] bg-[#222] flex items-center justify-between p-2 rounded-md">
            <Link href={`/profile/${session.userId}/edit`} className="font-bold">
              <p className="flex items-center gap-2">
                <FaUserEdit /> Edit Profile
              </p>
            </Link>
          </div>
        ) : (
          <div className="w-[300px] bg-[#222] flex flex-col items-center justify-between p-2 rounded-md">
            <button className="flex items-center gap-2">
              <FaUserPlus /> Add Friend
            </button>
            <button className="flex items-center gap-2">
              <FaEnvelope /> Send Message
            </button>
          </div>
        )}
      </div>
    </header>

    <section className="max-w-6xl mx-auto py-8 flex justify-between gap-8">
      <div className="w-3/4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          User Recent Blogs:
        </h2>
        {recentBlogs ? (
          <div className="w-full p-4 rounded-md bg-white mx-auto">
            {recentBlogs.map((item) => (
              <BlogPosts item={item} key={crypto.randomUUID()} />
            ))}
          </div>
        ) : (
          <div className="w-full h-32 flex items-center justify-center">
            <h2>No blogs yet, sorry.</h2>
          </div>
        )}
      </div>

      {/* Small Menu on the Right */}
      <div className="w-1/4">
        <div className="bg-[#222] p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Profile Menu</h3>
          <ul className="text-white">
            <li>Edit Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
  );
};

export default Page;
