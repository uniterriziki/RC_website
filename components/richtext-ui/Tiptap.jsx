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
  const editor = useEditor({
    extensions: [StarterKit, Underline, Blockquote],
    editorProps: {
      attributes: {
        className:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full h-10 gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent
        style={{ whiteSpace: "pre-line" }}
        editor={editor}
        className="border-gray-800 border-2"
      />
    </div>
  );
};

export default Tiptap;
