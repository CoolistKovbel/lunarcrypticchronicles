import CategoryList from "@/app/components/blog/categoryList"


const Page = () => {
  return (
    <section className="min-h-screen w-full bg-[#111] text-white">

      <header className="w-full flex items-center justify-center pt-[40px]">
        <h2 className="text-4xl font-bold">Blogs</h2>
      </header>

      <CategoryList />


    </section>
  )
}

export default Page