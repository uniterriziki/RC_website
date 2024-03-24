//THIS WILL BE THE HOMEPAGE OF THE APP
import "tailwindcss/tailwind.css";
import Carousel from "../components/Carousel";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <main className="bg-blue-200">
      <section className=" sm:hidden">
        <Carousel />
      </section>

      <section className="container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4" />
      </section>
    </main>
  );
}
