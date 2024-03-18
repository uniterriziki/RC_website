"use client";

import Tiptap from "./Tiptap";
import React, { useState } from "react";
import { uuidv4 } from "uuid";

const ArticlePicker = () => {
  const [content, setContent] = useState("");
  const handleContentChange = (reason) => {
    setContent(reason);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: 1, //Universally unique identifier, is 36 bit BSON type
      content: content,
    };
    console.log(data); //check if data is actually being pushed locally
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
      >
        <div className="text-3xl text-center text-sky-300 mb-10">
          Article Picker
        </div>
        <Tiptap
          content={content}
          onChange={(newContent) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};

export default ArticlePicker;
