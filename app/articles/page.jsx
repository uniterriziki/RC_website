import ArticleSection from "../../components/ArticleSection";
import Section from "../../components/ArticleCard";
import ArticleCard from "../../components/ArticleCard";

export const metadata = {
  title: "Articles", //title: {absolute: "sth sth sth here"}
};

export default function page() {
  return (
    // <div><ArticleSection /></div>
    <div className="container mx-auto grid grid-cols-3 md:gap-x-5 gap-y-5 px-5 py-10">
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4"/>
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4"/>
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)] md:gap-4"/>
    </div>
  );
}
