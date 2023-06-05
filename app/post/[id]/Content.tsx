"use client";

import { FormattedPost } from "@/app/types";
import { ChangeEvent, FormEvent, useState } from "react";

import Image from "next/image";
import SocialLinks from "@/app/(share)/SocialLinks";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CategoryAndEditor from "./CategoryAndEditor";
import Article from "./Article";

interface ContentProps {
  post: FormattedPost;
}

export default function Content({ post }: ContentProps) {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);
  const [tempContent, setTempContent] = useState<string>(content);

  const date = new Date(post?.createdAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleOnChangeTitle(e: ChangeEvent<HTMLTextAreaElement>) {
    if (title) {
      setTitleError("");
      setTitle(e.target.value);
    }
  }

  function handleIsEditable(bool: boolean) {
    setIsEditable(bool);
    editor?.setEditable(bool);
  }

  function handleOnChangeContent({ editor }: any) {
    if (!(editor as Editor).isEmpty) {
      setContentError("");
      setContent((editor as Editor).getHTML());
    }
  }

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full ",
      },
    },
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // validation checks
    if (title === "") {
      setTitleError("Title is required");
    }

    if (editor?.isEmpty) {
      setContentError("Content is required");
    }

    if (title === "" || editor?.isEmpty) {
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/${post.id},`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: post?.id,
          title,
          content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("title");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  }

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-300 ">{`Home > ${post?.category} > ${post?.title}`}</h5>

      <CategoryAndEditor
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />

      <form onSubmit={handleSubmit}>
        {/* HEADER*/}

        {isEditable ? (
          <div>
            <textarea
              className="border-2 rounded-md bg-wh-50 p-3 w-full"
              placeholder="Title"
              onChange={handleOnChangeTitle}
              value={title}
            />
            {titleError && (
              <p className="text-red-500 text-xs mt-1">{titleError}</p>
            )}
          </div>
        ) : (
          <h3 className="font-bold text-3xl mt-3">{title}</h3>
        )}

        <div className="flex items-center gap-3">
          <h5 className="font-semibold text-xs ">By {post.author}</h5>
          <h6 className="text-wh-300 text-sx">{date}</h6>
        </div>

        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="
              (max-width: 480px) 100vw, 
              (max-width: 768px) 85vw, 
              (max-width: 1060px) 75vw,
              60vw
              "
            className="object-cover"
          />
        </div>

        <Article
          contentError={contentError}
          editor={editor}
          isEditable={isEditable}
          setContent={setContent}
          title={title}
        />

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5  mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
}
