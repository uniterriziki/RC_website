//"use client"; //conflicting server and client components here, split them

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ArticleForm from "../../components/ArticleForm";
import { useSession } from "next-auth/react";

import React from "react";
import ArticleWriter from "../../components/richtext-ui/ArticleWriter";

const prisma = new PrismaClient();

const write = async () => {
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
      <ArticleWriter />
    </div>
  );
};

export default write;

// const page = () => {
//   // const { data: session } = useSession();
//   // if (!session || !session.user)
//   //   return (
//   //     <div>
//   //       <p className="text-2xl text-red-500 p-4;">You need to sign In</p>
//   //     </div>
//   //   );
//   return (
//     <div>
//       <h1>protect this route</h1>
//       <ArticleWriter />
//     </div>
//   );
// };

// export default page;

// // const prisma = new PrismaClient();

// // const writeArticlePage = async () => {
// //   const articles = await prisma.articles.findMany();

// //   const addArticle = async (formData) => {
// //     "use server"; //using server actions here to handle all api calls in nextjs

// //     //store data from the form in these constants at first using get method.
// //     const articleTitle = formData.get("articleTitle");
// //     const articleBody = formData.get("articleBody");

// //     //do server mutations to pick new data, using prisma ORM and calling Mongo DB
// //     const article = await prisma.articles.create({
// //       data: {
// //         title: articleTitle, //if TS is used, declare type as string
// //         body: articleBody,
// //       },
// //     });

// //     revalidatePath("/write");
// //   };
// //   return (
// //     <div>
// //       <h1>Write a new article here!</h1>
// //       <ArticleForm />
// //     </div>
// //   );
// // };

// // export default writeArticlePage;
