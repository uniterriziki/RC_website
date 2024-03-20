"use client";

import { addArticle } from "../../lib/actions/formAction"; //import the form action which takes care of the api calls
import Tiptap from "./Tiptap";
import React, { useState } from "react";
import { uuidv4 } from "uuid";

const ArticleWriter = () => {
  const [content, setContent] = useState("");
  const handleContentChange = (reason) => {
    setContent(reason);
  };

  //handle submit here so that both title and body interact with prisma
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random, //Universally unique identifier, is 36 bit BSON type
      content: content,
    };
    console.log(data); //check if data is actually being pushed locally
  };

  return (
    <div>
      {/* use the inbuilt next.js form here and store data in a variable formData */}
      <form
        action={async (formData) => {
          await addArticle(formData);
        }}
        className="max-w-3xl w-full grid place-items-center mx-auto pt-6 mb-6"
      >
        <div className="text-3xl text-center text-blue-600 mb-6">
          Article Writer
        </div>

        <Tiptap
          content={content}
          onChange={(newContent) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};

export default ArticleWriter;

// const ArticleWriter = () => {
//   const [content, setContent] = useState("");
//   const handleContentChange = (reason) => {
//     setContent(reason);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       id: Math.random, //Universally unique identifier, is 36 bit BSON type
//       content: content,
//     };
//     console.log(data); //check if data is actually being pushed locally
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-3xl w-full grid place-items-center mx-auto pt-6 mb-6"
//       >
//         <div className="text-3xl text-center text-blue-600 mb-6">
//           Article Writer
//         </div>
//         <Tiptap
//           content={content}
//           onChange={(newContent) => handleContentChange(newContent)}
//         />
//       </form>
//     </div>
//   );
// };

// export default ArticleWriter;
