"use client";

import { CreateBlogPost } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const CreateBlogform = () => {
  const router = useRouter();

  const CreateBlogPostWithId = CreateBlogPost.bind(null, "12");
  const [state, dispatch] = useFormState(CreateBlogPostWithId, undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      dispatch(formData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (state?.message.startsWith("Authentication success")) router.push("/blog");
  }, [state, router]);

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-[1.5rem] font-medium text-gray-600"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full text-black border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-[1.5rem] mb-2 text-sm font-medium text-gray-600"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          className="mt-1 p-2 w-full h-[80px] text-black border rounded-md resize-none overflow-auto"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-[1.5rem] mb-2 text-sm font-medium text-gray-600"
        >
          Content:
        </label>
        <textarea
          id="content"
          name="content"
          className="mt-1 p-2 w-full h-[420px] text-black border rounded-md resize-none overflow-auto"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-[1.5rem] mb-2 text-sm font-medium text-gray-600"
        >
          Image:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="mt-1 p-2 w-full text-black border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-[1.5rem] mb-2 text-sm font-medium text-gray-600"
        >
          Category:
        </label>
        <select
          id="category"
          name="category"
          className="mt-1 p-2 w-full text-black border rounded-md"
        >
          <option value="HACK">HACK</option>
          <option value="CODE">CODE</option>
          <option value="CRYPTO">CRYPTO</option>
          <option value="LIFE">LIFE</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 w-full"
      >
        Submit
      </button>

      {state && (
        <>
          {/* <A className="h-5 w-5 text-red-500" /> */}
          <p className="text-sm text-yellow-500">{state.message}</p>
        </>
      )}

    </form>
  );
};

export default CreateBlogform;
