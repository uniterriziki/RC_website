// https://nextjs.org/docs/app/api-reference/file-conventions/route
// HTTP Methods
// A route file allows you to create custom request handlers for a given route. The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

import Article from "../../../../models/Article";

//Next Response gives more control over API responses
import { NextResponse } from "next/server";

//CREATING AN ARTICLE, POST METHOD
export async function POST(request) {
  console.log("POST RAN")
  try {
    //create a form to input data and then use the data in the POST reuest
    const body = await request.json();
    const articleData = body.formData;
    //await Article.create(articleData), is a mongoose function
    await Article.create(articleData);
    return NextResponse.json({ message: "Article Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error encountered in POST", error },
      { status: 500 }
    );
  }
}
