import { Post } from "@prisma/client";
import Card from "./Card";

interface otherPostsProps {
  otherPosts: Array<Post>;
}

export default function Other({ otherPosts }: otherPostsProps) {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />

      {/* HEADER */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card
          className=" mt-5 sm:mt-0"
          post={otherPosts[0]}
          imageHeight="h-80"
        />
        <Card
          className=" mt-5 sm:mt-0"
          post={otherPosts[1]}
          imageHeight="h-80"
        />
        <Card
          className=" mt-5 sm:mt-0"
          post={otherPosts[2]}
          imageHeight="h-80"
        />
        <Card
          className=" mt-5 sm:mt-0"
          post={otherPosts[3]}
          imageHeight="h-80"
        />
      </div>
    </section>
  );
}
