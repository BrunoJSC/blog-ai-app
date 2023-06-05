import { prisma } from "@/app/api/client";
import { FormattedPost } from "@/app/types";
import { Post as PostType } from "@prisma/client";
import Content from "./Content";
import Sidebar from "@/app/(share)/Sidebar";

interface PostProps {
  params: {
    id: string;
  };
}

export const revalidate = 60;

async function getPost(id: string) {
  const post: PostType | null = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt.toISOString(),
    updatedAt: post?.updatedAt.toISOString(),
  };

  return formattedPost;
}

export default async function Post({ params }: PostProps) {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post not a found</div>;
  }

  return (
    <main className="px-10 leading-7 ">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
