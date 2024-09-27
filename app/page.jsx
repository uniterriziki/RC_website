//THIS WILL BE THE HOMEPAGE OF THE APP
import "tailwindcss/tailwind.css";
import Carousel from "../components/Carousel";
import ArticleCard from "../components/ArticleCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-500">
      <section >
        <section className=" bg-gradient-to-r h-10 text-x1 text-center decoration-8 my-10 font-mono italic text-white" style={{
          background: 'linear-gradient(to right, #2a338a, #843b81)'
        }}>WELCOME TO RESEARCH CLUB UoN</section>
        <section className=" sm:hidden">
          <div className="  ">Learn more about
            <br /> <div className="text-green-400">us</div>  <Link href="/about" legacyBehavior>
              <a className="text-un">here</a>
            </Link></div>
          <Carousel />
          <div><img src="/." alt="" /></div>
        </section>
      </section>


      <section className="container mx-auto grid grid-cols-3 md:gap-x-5 gap-y-5 px-5 py-10 mt-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4" />

      </section>
      <div className="flex justify-center border-blue-800">
        <Link
          className="justify-center border-2 border-blue-600 rounded-xl gap-7 mt-4 p-4 text-blue-600 text-bold hover:text-blue-800 duration-500 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
          href={"/articles"}
        >
          More Articles
        </Link>
      </div>
    </main>
  );
}
