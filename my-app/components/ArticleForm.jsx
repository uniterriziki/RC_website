"use client";
//use client in order to actually reset the form when used

import { addArticle } from "../lib/actions/formAction"; //import the form action which takes care of the api calls
import { useRef } from "react"; //https://react.dev/reference/react/useRef

const ArticleForm = () => {
  return (
    <div>
      {/* use the inbuilt next.js form here and store data in a variable formData */}
      <form
        action={async (formData) => {
          await addArticle(formData);
        }}
      >
        <input
          required
          type="text"
          name="articleTitle"
          placeholder="Write your title here"
          className="border border-red-500"
        />
        <input
          required
          type="text"
          name="articleBody"
          placeholder="Write your article here"
          className="border border-red-500"
        />
        <button type="submit" className="border border-red-600">
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
