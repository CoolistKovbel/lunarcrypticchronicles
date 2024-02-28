import CreateBlogform from "@/app/components/blog/createBlogForm";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen p-8 flex items-center justify-center">

      <div className="max-w-3xl mx-auto p-8">
        
        <header className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl mb-8 font-bold">Blog Creation</h2>
          <p className="text-gray-600">
            Share something cool, explain a topic, or even sell a product. You
            can do it all here!
          </p>
        </header>

        <CreateBlogform />

      </div>

    </section>
  );
};

export default Page;
