"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline"; //standalone tiptap lib for underline
import Blockquote from "@tiptap/extension-blockquote";

const Tiptap = ({ onChange, content }) => {
  const handleContentChange = (newContent) => {
    onChange(newContent);
  };

  //configure the actual space where a user types.
  const editor = useEditor({
    extensions: [StarterKit, Underline, Blockquote],
    editorProps: {
      attributes: {
        className:
          "size-8 flex flex-col px-4 py-3 justify-start border-b border-r border-1 border-gray-700 text-gray-400 items-start w-full h-10 gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      {/* Title Editor Here */}
      <input
        required
        type="text"
        name="articleTitle"
        placeholder="Write your title here"
        className="border-2 pt-3 border-red-500 w-full items-center"
      />
      {/* Body Editor Here */}
      {/* make this body editor into an input element so that prisma picks it up */}
      <EditorContent
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
        type="text"
        placeholder="Write your article here"
        name="articleBody" // Introduced naming for DB interaction
        className="border-gray-800 border-2 pt-3"
      />
    </div>
  );
};

export default Tiptap;

{
  /* <EditorContent
          style={{ whiteSpace: "pre-line" }}
          editor={editor}
          className="border-gray-800 border-2 pt-3"
        /> */
}
