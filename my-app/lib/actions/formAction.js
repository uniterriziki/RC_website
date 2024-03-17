"use server";
//server action as it sends info to the DB

import { PrismaClient } from "@prisma/client"; //https://www.prisma.io/client
import { revalidatePath } from "next/cache"; //https://nextjs.org/docs/app/api-reference/functions/revalidatePath

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
