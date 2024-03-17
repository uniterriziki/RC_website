"use server";
//server action as it sends info to the DB

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

//if ts is used, say (FormData: FormData)
export const addArticle = async (FormData) => {
  const articleTitle = FormData.get("articleTitle");
  const articleBody = FormData.get("articleBody");

  //MUTATIONS
  const article = await prisma.article.create({
    data: {
      title: articleTitle,
      body: articleBody,
    },
  });

  //REVALIDATE PATH AFTER
  revalidatePath("/write");
};
