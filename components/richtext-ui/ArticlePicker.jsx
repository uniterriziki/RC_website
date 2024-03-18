"use client";

import Tiptap from "./Tiptap";
import React, { useState } from "react";

const ArticlePicker = () => {
  const [content, setContent] = useState("");
  const handleContentChange = (reason) => {
    setContent(reason);
  };
  return (
    <div>
      <form className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10">
        <div className="text-3xl text-center text-sky-300 mb-10">
          Article Picker
        </div>
        <Tiptap
          content={content}
          onChange={(nexContent) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};

export default ArticlePicker;
