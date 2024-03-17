import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ArticleForm from "../../../components/ArticleForm";

const prisma = new PrismaClient();

const writeArticlePage = async () => {
  //const articles = await prisma.articles.findMany();

  const addArticle = async (formData) => {
    "use server"; //using server actions here to handle all api calls in nextjs

    //store data from the form in these constants at first using get method.
    const articleTitle = formData.get("articleTitle");
    const articleBody = formData.get("articleBody");

    //do server mutations to pick new data, using prisma ORM and calling Mongo DB
    const article = await prisma.articles.create({
      data: {
        title: articleTitle, //if TS is used, declare type as string
        body: articleBody,
      },
    });

    revalidatePath("/write");
  };
  return (
    <div>
      <h1>Write a new article here!</h1>
      <ArticleForm />
    </div>
  );
};

export default writeArticlePage;
