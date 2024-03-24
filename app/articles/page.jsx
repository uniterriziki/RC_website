import ArticleSection from "../../components/ArticleSection";
import Section from "../../components/ArticleCard";
import ArticleCard from "../../components/ArticleCard";

export const metadata = {
  title: "Articles", //title: {absolute: "sth sth sth here"}
};

export default function page() {
  return (
    // <div><ArticleSection /></div>
    <div className="container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
      <ArticleCard />
    </div>
  );
}
