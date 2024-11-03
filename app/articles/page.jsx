"use client";

import { useRouter } from "next/navigation";
import { article1, article2, article3, article4 } from "../../lib/article";
import ArticleCard from "../../components/ArticleCard";

export default function Page() {
  const router = useRouter();
  const articles = [
    { ...article1, imageSrc: "/ARTICLE 1 picture.jpg" },
    { ...article2, imageSrc: "/ARTICLE 2 picture.jpg" },
    { ...article3, imageSrc: "/ARTICLE 3 picture.jpg" },
    { ...article4, imageSrc: "/ARTICLE 4 picture.jpg" },
    // Continue adding more if needed
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          className="w-full hover:cursor-pointer"
          title={article.title}
          description={article.abstract}
          imageSrc={article.imageSrc}
          onClick={() => router.push(`/articles/${article.id}`)}
        />
      ))}
    </div>
  );
}
