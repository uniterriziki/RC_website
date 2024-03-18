import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import { Editor } from "@tiptap/react";

const Toolbar = ({ editor, content }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap"></div>
    </div>
  );
};

export default Toolbar;
