import UpdateProfileForm from "@/app/components/auth/update-profile-form";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen bg-[#000] text-white">
      <header className="text-2xl font-bold w-full h-[100px] flex items-center justify-center capitalize">
        <h2>Edit profile</h2>
      </header>

        <UpdateProfileForm />

    </section>
  );
};

export default Page;
