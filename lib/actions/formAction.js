"use server";
//server action as it sends info to the DB

//FORM action handles api calls to our DB

import { PrismaClient } from "@prisma/client"; //https://www.prisma.io/client
import { revalidatePath } from "next/cache"; //https://nextjs.org/docs/app/api-reference/functions/revalidatePath

//prisma orm called here so that it handles the no-sql call
const prisma = new PrismaClient();

//if ts is used, say (FormData: FormData)
export const addArticle = async (formData) => {
  const articleTitle = formData.get("articleTitle");
  const articleBody = formData.get("articleBody");

  //MUTATIONS
  const Article = await prisma.article.create({
    data: {
      title: articleTitle,
      body: articleBody,
    },
  });

  //REVALIDATE PATH AFTER
  revalidatePath("/write");
};
