import { FormattedPost } from "@/app/types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";
import React from "react";

interface CategoryAndEditorProps {
  post: FormattedPost;
  isEditable: boolean;
  handleIsEditable: (bool: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
}

export default function CategoryAndEditor({
  post,
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
}: CategoryAndEditorProps) {
  function handleEnableEdit() {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  }

  function handleCancelEdit() {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  }

  return (
    <div className="flex justify-between items-center">
      <h2 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post?.category}
      </h2>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3 ">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
}
